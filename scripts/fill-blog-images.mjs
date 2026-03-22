import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { mkdtemp } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const workspaceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogDirectory = path.join(workspaceRoot, "content", "blog");
const publicDirectory = path.join(workspaceRoot, "public");
const dustJacketRoot = path.resolve(workspaceRoot, "..", "dust-jacket");

const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "illustration";

const getPostsMissingImages = async () => {
  const entries = await fs.readdir(blogDirectory, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && [".md", ".mdx"].includes(path.extname(entry.name)))
    .map((entry) => entry.name)
    .sort();

  const posts = [];

  for (const fileName of files) {
    const filePath = path.join(blogDirectory, fileName);
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = matter(raw);

    if (parsed.data.image) {
      continue;
    }

    posts.push({
      fileName,
      filePath,
      slug: fileName.replace(/\.mdx?$/, ""),
      parsed
    });
  }

  return posts;
};

const inferExtension = (url, contentType) => {
  const urlPathExtension = path.extname(new URL(url).pathname).toLowerCase();
  if (supportedExtensions.has(urlPathExtension)) {
    return urlPathExtension;
  }

  if (contentType.includes("jpeg")) {
    return ".jpg";
  }
  if (contentType.includes("png")) {
    return ".png";
  }
  if (contentType.includes("webp")) {
    return ".webp";
  }
  if (contentType.includes("gif")) {
    return ".gif";
  }

  return ".jpg";
};

const runDustJacket = async (inputPath) =>
  new Promise((resolve, reject) => {
    const child = spawn(
      "npm",
      ["--prefix", dustJacketRoot, "run", "--silent", "cli", "--", "recommend", "--input", inputPath],
      {
        stdio: ["ignore", "pipe", "pipe"],
        env: {
          ...process.env,
          npm_config_loglevel: "silent",
          LOG_LEVEL: "silent"
        }
      }
    );

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(stderr.trim() || `dust-jacket exited with code ${code}`));
        return;
      }

      try {
        const lines = stdout
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);
        const payload = [...lines].reverse().find((line) => line.startsWith("{") && line.endsWith("}"));

        if (!payload) {
          throw new Error("dust-jacket did not return a JSON payload.");
        }

        resolve(JSON.parse(payload));
      } catch (error) {
        reject(error);
      }
    });
  });

const saveImage = async (slug, title, sourceImageUrls) => {
  let lastError = null;

  for (const sourceImageUrl of sourceImageUrls) {
    try {
      const response = await fetch(sourceImageUrl);
      if (!response.ok) {
        throw new Error(`Failed to download image: ${response.status} ${response.statusText}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const contentType = response.headers.get("content-type") ?? "";
      const extension = inferExtension(sourceImageUrl, contentType);
      const relativeDirectory = path.join("blog", slug);
      const absoluteDirectory = path.join(publicDirectory, relativeDirectory);
      const fileName = `${slugify(title)}${extension}`;
      const absolutePath = path.join(absoluteDirectory, fileName);
      const publicPath = `/${path.posix.join("blog", slug, fileName)}`;

      await fs.mkdir(absoluteDirectory, { recursive: true });
      await fs.writeFile(absolutePath, Buffer.from(arrayBuffer));

      return publicPath;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError ?? new Error("Failed to download image from all available candidates.");
};

const updateFrontmatter = async (filePath, parsed, metadata) => {
  const nextData = {
    ...parsed.data,
    image: metadata.image,
    imageAlt: metadata.imageAlt,
    imageSource: metadata.imageSource,
    imageCitation: metadata.imageCitation
  };

  const nextContent = matter.stringify(parsed.content, nextData);
  await fs.writeFile(filePath, nextContent);
};

const main = async () => {
  const posts = await getPostsMissingImages();

  if (posts.length === 0) {
    console.log("No blog posts are missing images.");
    return;
  }

  const tempDirectory = await mkdtemp(path.join(os.tmpdir(), "dust-jacket-"));

  try {
    for (const post of posts) {
      console.log(`Processing ${post.slug}...`);

      const inputPath = path.join(tempDirectory, `${post.slug}.json`);
      const input = {
        title: post.parsed.data.title,
        excerpt: post.parsed.data.excerpt,
        content: post.parsed.content,
        category: post.parsed.data.category
      };

      await fs.writeFile(inputPath, JSON.stringify(input, null, 2));
      const result = await runDustJacket(inputPath);
      const imagePath = await saveImage(
        post.slug,
        result.selectedIllustration.title,
        result.selectedIllustration.imageUrlCandidates ?? [result.selectedIllustration.imageUrl]
      );

      await updateFrontmatter(post.filePath, post.parsed, {
        image: imagePath,
        imageAlt: result.selectedIllustration.altText,
        imageSource: result.selectedIllustration.pageUrl,
        imageCitation: result.selectedIllustration.citation
      });

      console.log(`Updated ${post.fileName} with ${imagePath}`);
    }
  } finally {
    await fs.rm(tempDirectory, { recursive: true, force: true });
  }
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
