"use client";
import { useEffect, useState } from "react";
import { Gloock } from "next/font/google";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
const gloock = Gloock({ subsets: ["latin"], weight: "400" });
export default function Quote() {
  type RssItem = {
    title: string;
    link: string;
    description: string;
    pubDate: Date | null;
    image?: string;
  };
  const [items, setItems] = useState<RssItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/rss", { cache: "no-store" });
        const xmlText = await res.text();
        const doc = new DOMParser().parseFromString(xmlText, "application/xml");
        const parsed: RssItem[] = Array.from(doc.querySelectorAll("item")).map(
          (it) => {
            const title = it.querySelector("title")?.textContent?.trim() || "";
            const link = it.querySelector("link")?.textContent?.trim() || "";
            const description =
              it.querySelector("description")?.textContent?.trim() || "";
            const pubDateStr =
              it.querySelector("pubDate")?.textContent?.trim() || "";
            const pubDate = pubDateStr ? new Date(pubDateStr) : null;
            const mediaEl =
              it.querySelector("media\\:content") ||
              it.querySelector("enclosure");
            const image = mediaEl?.getAttribute("url") || undefined;
            return { title, link, description, pubDate, image };
          },
        );
        parsed.sort((a, b) => {
          const ta = a.pubDate ? a.pubDate.getTime() : 0;
          const tb = b.pubDate ? b.pubDate.getTime() : 0;
          return tb - ta;
        });
        setItems(parsed);
        setLoading(false);
      } catch {
        setItems([]);
        setLoading(false);
      }
    }
    load();
  }, []);
  return (
    <section
      className="relative right-[50%] left-[50%] -mt-32 -mr-[50vw] -ml-[50vw]
        w-screen bg-green-300 px-6 py-40 text-black sm:px-12"
    >
      <div id="projects" className="mx-auto max-w-4xl">
        <div
          className="flex flex-col gap-4 sm:flex-row sm:items-center
            sm:justify-between"
        >
          <div className="flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className={`${gloock.className} text-left text-4xl font-semibold
                tracking-wider lg:text-5xl`}
            >
              Automating{" "}
              <em>
                <motion.span
                  className="bg-[linear-gradient(-35deg,#4ade80,#05240D)]
                    bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "100% 200%",
                    backgroundPosition: "0% 0%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "0% 50%", "0% 0%"],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  output
                </motion.span>
              </em>
              .
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className={`${gloock.className} mt-4 text-left text-4xl
                font-semibold tracking-wider lg:text-5xl`}
            >
              Building{" "}
              <em>
                <motion.span
                  className="bg-[linear-gradient(-35deg,#4ade80,#05240D)]
                    bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "100% 200%",
                    backgroundPosition: "0% 0%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "0% 50%", "0% 0%"],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  outcomes
                </motion.span>
              </em>
              .
            </motion.h2>
          </div>
          <div className="sm:max-w-sm sm:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              className="text-2xl text-black"
            >
              <span className="text-2xl font-extrabold">62%</span> of developers
              are frustrated by technical debt.
              <sup>
                <a
                  href="https://stackoverflow.blog/2025/01/01/developers-want-more-more-more-the-2024-results-from-stack-overflow-s-annual-developer-survey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  [1]
                </a>
              </sup>{" "}
              I'm one of them. That’s why I build systems with clean
              abstractions and predictable patterns, so we move fast and
              sustainably.
            </motion.p>
          </div>
        </div>
        {loading ? (
          <div className="mt-40 flex justify-center">
            <span className="loading loading-spinner loading-lg text-black"></span>
          </div>
        ) : (
          <div className="mt-40 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.slice(0, 4).map((item) => (
              <ProjectCard
                key={item.link}
                href={item.link}
                title={item.title}
                subtitle={item.description}
                src={item.image || "/o11n.jpg"}
              />
            ))}
          </div>
        )}
        <div className="mt-8 flex justify-center">
          <a
            href="https://blog.justinkahrs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-black/20
              bg-white/90 px-5 py-3 text-base font-semibold text-black shadow-sm
              transition hover:bg-white uppercase"
          >
            See all projects
          </a>
        </div>
      </div>
    </section>
  );
}
