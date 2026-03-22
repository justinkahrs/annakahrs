import { getBlogPost, getBlogPosts } from "@/utils/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: '--font-playfair',
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type Props = {
  params: Promise<{ slug: string }>;
};

function normalizeExcerpt(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function stripDuplicateExcerpt(content: string, excerpt?: string) {
  if (!excerpt) {
    return content;
  }

  const normalizedExcerpt = normalizeExcerpt(excerpt);
  const lines = content.split("\n");
  const paragraphLines: string[] = [];
  let endIndex = 0;

  for (const [index, line] of lines.entries()) {
    if (!line.trim()) {
      if (paragraphLines.length > 0) {
        endIndex = index + 1;
        break;
      }
      continue;
    }

    if (line.trim().startsWith("#") || line.trim().startsWith("![")) {
      return content;
    }

    paragraphLines.push(line.trim());
    endIndex = index + 1;
  }

  if (normalizeExcerpt(paragraphLines.join(" ")) !== normalizedExcerpt) {
    return content;
  }

  return lines.slice(endIndex).join("\n").replace(/^\s+/, "");
}

function stripCitationUrl(citation?: string) {
  if (!citation) {
    return citation;
  }

  return citation
    .replace(/\s*Source:\s*https?:\/\/\S+\s*$/i, "")
    .replace(/\s*https?:\/\/\S+\s*$/i, "")
    .trim();
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const articleContent = stripDuplicateExcerpt(content, metadata.excerpt);
  const imageCitation = stripCitationUrl(metadata.imageCitation);

  return (
    <div className={`min-h-screen bg-(--background) ${playfair.variable}`}>
      <Nav />
      <main className="mb-24">
        <header className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-zinc-950 text-white">
          <div className="grid grid-cols-1 lg:min-h-[76vh] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="flex items-center px-6 pb-16 pt-24 sm:px-8 sm:pb-12 sm:pt-20 lg:px-14 lg:pb-14 lg:pt-10 xl:px-18">
              <div className="mx-auto w-full max-w-3xl">
                <div aria-hidden="true" className="hidden h-4 sm:mb-10 sm:block" />

                <div className={`${dmSans.className} mb-5 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white/70 sm:mb-6 sm:text-sm`}>
                  <div className="h-2 w-2 bg-(--highlight)" />
                  {metadata.category || "Thinking & Practice"}
                </div>

                <h1 className={`${playfair.className} max-w-4xl text-[2.8rem] leading-[0.92] text-white sm:text-6xl lg:text-7xl xl:text-8xl`}>
                  {metadata.title}
                </h1>

                {metadata.excerpt && (
                  <p className={`${dmSans.className} mt-6 max-w-2xl text-[15px] leading-relaxed text-white/72 sm:mt-8 sm:text-lg`}>
                    {metadata.excerpt}
                  </p>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-dotted border-white/20 pt-4 text-white/55 sm:mt-10 sm:py-2">
                  <time className={`${dmSans.className} text-[10px] uppercase tracking-widest sm:text-[11px]`}>
                    {new Date(metadata.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}
                  </time>
                  <span className="hidden h-px w-6 bg-white/20 sm:block" />
                  <span className={`${dmSans.className} text-[10px] uppercase tracking-widest sm:text-[11px]`}>
                    By Anna Kahrs
                  </span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[5/4] min-h-[240px] border-t border-white/10 lg:aspect-auto lg:min-h-full lg:border-t-0 lg:border-l lg:border-white/10">
              {metadata.image ? (
                <Image
                  src={metadata.image}
                  alt={metadata.imageAlt || metadata.title}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-center"
                />
              ) : (
                <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-950" />
              )}
            </div>
          </div>
        </header>

        <article className="mx-auto max-w-[1380px] px-6 pt-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-16">
            <div className={`prose prose-zinc max-w-4xl prose-lg ${dmSans.className} text-zinc-700 leading-relaxed [&>:first-child]:mt-0`}>
              <MDXRemote
                source={articleContent}
                components={{
                  h1: (props) => <h1 className={`${dmSans.className} text-4xl font-bold mb-8 mt-16 leading-tight text-zinc-900`} {...props} />,
                  h2: (props) => {
                    const isTLDR = typeof props.children === 'string' && props.children.toLowerCase().includes('tl;dr');
                    return (
                      <h2 className={`${isTLDR ? playfair.className : 'font-sans'} ${isTLDR ? 'text-4xl font-semibold not-italic' : 'text-3xl font-bold'} mb-6 mt-12 leading-tight text-zinc-900`} {...props}>
                        {props.children}
                      </h2>
                    );
                  },
                  h3: (props) => <h3 className={`${dmSans.className} text-2xl font-bold mb-4 mt-10 leading-tight text-zinc-900`} {...props} />,
                  p: (props) => <p className="mb-8 text-lg leading-[1.7]" {...props} />,
                  ul: (props) => <ul className="mb-6 list-none space-y-2" {...props} />,
                  ol: (props) => <ol className="mb-6 list-none space-y-2" {...props} />,
                  li: (props) => (
                    <li className="flex gap-3">
                      <span className="h-2 w-2 min-w-2 mt-2.5 bg-(--highlight)" />
                      <span>{props.children}</span>
                    </li>
                  ),
                  strong: (props) => <strong className="font-bold text-zinc-900" {...props} />,
                  em: (props) => <em className="italic" {...props} />,
                  hr: () => <hr className="my-16 border-t-[3px] border-dotted border-zinc-900/10" />,
                  blockquote: (props) => (
                    <blockquote className="my-12 rounded-r-2xl border-l-[6px] border-(--highlight) bg-zinc-900/5 px-10 py-8">
                      <div className={`${playfair.className} text-2xl text-zinc-800 leading-relaxed not-italic
                              [&_p]:font-serif [&_p]:text-2xl [&_p]:text-zinc-800 [&_p]:mb-0 [&_p]:not-italic
                              [&_a]:underline [&_a]:decoration-dotted [&_a]:decoration-zinc-900/30 [&_a]:hover:decoration-zinc-900 [&_a]:underline-offset-4`}>
                        {props.children}
                      </div>
                    </blockquote>
                  ),
                  pre: (props) => (
                    <pre className="my-12 overflow-x-auto rounded-xl bg-black px-8 py-8 text-sm text-zinc-50 ring-1 ring-white/10" {...props} />
                  ),
                  code: (props) => (
                    <code className="rounded bg-zinc-950 px-1.5 py-0.5 text-sm text-zinc-50" {...props} />
                  ),
                  img: (props) => (
                    <span className="my-16 flex flex-col items-center">
                      <img className="h-auto max-w-full rounded-2xl" {...props} />
                    </span>
                  ),
                  a: (props) => (
                    <a
                      className="underline decoration-dotted decoration-zinc-900/30 hover:decoration-zinc-900 underline-offset-4 transition-colors"
                      {...props}
                    />
                  )
                }}
              />
            </div>

            {(imageCitation || metadata.imageSource) && (
              <aside>
                <div className="relative px-5 py-6">
                  <div className="relative">
                    <p className={`${dmSans.className} text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700`}>
                      Image Citation
                    </p>
                    {imageCitation && (
                      <p className={`${dmSans.className} mt-4 text-sm leading-relaxed text-zinc-800`}>
                        {imageCitation}
                      </p>
                    )}
                    {metadata.imageSource && (
                      <a
                        href={metadata.imageSource}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${dmSans.className} mt-4 inline-flex text-sm font-medium text-zinc-900 underline decoration-dotted underline-offset-4 transition hover:text-emerald-700`}
                      >
                        View source
                      </a>
                    )}
                  </div>
                </div>
              </aside>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
