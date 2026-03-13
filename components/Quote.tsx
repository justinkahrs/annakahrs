"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type RssItem = {
  title: string;
  link: string;
  description: string;
  pubDate: Date | null;
  image?: string;
  categories?: string[];
  author?: string;
};

const thumbnailDotPattern =
  "radial-gradient(circle at 1px 1px, rgba(39,39,42,0.18) 1.2px, transparent 0)";
const thumbnailGradients = [
  "radial-gradient(circle at top left, rgba(187,247,208,0.95), rgba(187,247,208,0.58) 34%, rgba(248,250,252,0.84) 100%)",
  "radial-gradient(circle at top right, rgba(220,252,231,0.94), rgba(187,247,208,0.5) 36%, rgba(248,250,252,0.82) 100%)",
  "radial-gradient(circle at 20% 30%, rgba(187,247,208,0.9), rgba(240,253,244,0.72) 38%, rgba(248,250,252,0.82) 100%)",
  "radial-gradient(circle at 80% 20%, rgba(209,250,229,0.94), rgba(187,247,208,0.48) 35%, rgba(248,250,252,0.84) 100%)",
];

export default function Quote() {
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
            const categories = Array.from(it.querySelectorAll("category"))
              .map((el) => el.textContent?.trim() || "")
              .filter(Boolean);
            const author =
              it.querySelector("dc\\:creator")?.textContent?.trim() ||
              it.querySelector("creator")?.textContent?.trim() ||
              it.querySelector("author")?.textContent?.trim() ||
              "";

            return {
              title,
              link,
              description,
              pubDate,
              image,
              categories,
              author,
            };
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

  const getFirstCategory = (item?: RssItem) => {
    if (!item || !item.categories || item.categories.length === 0) {
      return "Case Study";
    }
    return item.categories[0];
  };

  const getExcerpt = (item?: RssItem) => {
    if (!item?.description) {
      return "Read the full post for details.";
    }

    const text = new DOMParser()
      .parseFromString(item.description, "text/html")
      .body.textContent?.replace(/\s+/g, " ")
      .trim();

    if (!text) {
      return "Read the full post for details.";
    }

    return text.length > 170 ? `${text.slice(0, 167).trimEnd()}...` : text;
  };

  return (
    <section
      id="projects"
      className="relative right-[50%] left-[50%] -mr-[50vw] -ml-[50vw]
        w-screen bg-[var(--background)] px-4 pb-8 pt-24 text-black sm:px-12"
    >
      <div className="relative mx-auto mt-20 max-w-[1500px] px-0 sm:px-6">
        {/* EYEBROW */}
        <div className="w-full relative mb-6">
          <div
            className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none`}
          >
            <div className="w-2 h-2 bg-(--highlight)" />
            IN PRACTICE
          </div>
          <div className="w-full border-t-[3px] border-dotted border-zinc-900/10" />
        </div>

        {/* HEADER SECTION */}
        <div className="mb-24 pr-0 sm:mt-16">
          <div className="flex flex-col gap-1 text-left md:flex-row md:items-baseline md:justify-between md:gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${playfair.className} text-left text-4xl font-medium text-zinc-900 leading-[1.05] sm:pl-20 sm:text-5xl sm:leading-tight lg:pl-32 lg:text-6xl`}
            >
              Observations and ideas
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`${dmSans.className} text-left text-4xl font-normal text-zinc-800 italic leading-[1.05] tracking-tight sm:text-5xl md:ml-auto md:text-right lg:text-6xl`}
            >
              from UX practice
            </motion.h3>
          </div>

          <div className="mt-6 flex flex-col gap-12 text-left sm:mt-12 sm:pl-20 lg:flex-row lg:pl-32">
            <div className="max-w-md">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${dmSans.className} text-lg sm:text-xl leading-relaxed text-zinc-700`}
              >
Gathered along the way while designing products, running research, and building systems that try to make digital work a little more thoughtful.              </motion.p>
            </div>
          </div>
        </div>

        {/* CAROUSEL SECTION */}
        <div className="relative overflow-visible">
          <div className="mb-6 hidden justify-end gap-4 md:flex">
            <button
              onClick={() => {
                const carousel = document.getElementById('case-study-carousel');
                if (carousel) carousel.scrollBy({ left: -500, behavior: 'smooth' });
              }}
              className="flex h-14 w-14 items-center justify-center border border-zinc-900/5 transition-all duration-300 hover:bg-zinc-900 hover:text-white"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button
              onClick={() => {
                const carousel = document.getElementById('case-study-carousel');
                if (carousel) carousel.scrollBy({ left: 500, behavior: 'smooth' });
              }}
              className="flex h-14 w-14 items-center justify-center border border-zinc-900/5 transition-all duration-300 hover:bg-zinc-900 hover:text-white"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          <div
            id="case-study-carousel"
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12 cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory'
            }}
          >
            {loading ? (
              <div className="w-full flex justify-center py-20">
                <span className="loading loading-spinner loading-lg text-zinc-900" />
              </div>
            ) : items.length > 0 ? (
              items.map((item, idx) => (
                <div key={idx} className="shrink-0 w-[78vw] sm:w-[440px] snap-start">
                  <a
                    href={item.link}
                    className="block group/card"
                  >
                    <article className="flex flex-col">
                      <div className="relative mb-5 aspect-[5/3] overflow-hidden rounded-3xl bg-[#e7f8ea] transition-transform duration-500 group-hover/card:scale-[1.02]">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage:
                                thumbnailGradients[
                                  idx % thumbnailGradients.length
                                ],
                            }}
                          />
                        )}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-30"
                          style={{
                            backgroundImage: thumbnailDotPattern,
                            backgroundSize: "18px 18px",
                          }}
                        />
                        <div
                          aria-hidden="true"
                          className={`pointer-events-none absolute inset-0 ${
                            item.image
                              ? "bg-[linear-gradient(145deg,rgba(187,247,208,0.16),rgba(248,250,252,0.04)_52%,rgba(187,247,208,0.20))] mix-blend-screen"
                              : "bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04)_52%,rgba(255,255,255,0.28))]"
                          }`}
                        />
                        {!item.image ? (
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -left-[10%] top-[12%] h-36 w-36 rounded-full bg-white/45 blur-3xl"
                          />
                        ) : null}
                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                          <div className="max-w-[85%] border border-white/50 bg-[#f3fff5]/88 px-4 py-3 backdrop-blur-sm">
                            <h4
                              className={`${dmSans.className} text-lg font-semibold leading-tight text-zinc-900 sm:text-xl line-clamp-2`}
                            >
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col text-left">
                        <p className={`${dmSans.className} text-xs text-zinc-500 font-medium uppercase tracking-[0.15em]`}>
                          {getFirstCategory(item)}
                        </p>
                        <p className={`${dmSans.className} mt-3 text-sm leading-relaxed text-zinc-700 line-clamp-3`}>
                          {getExcerpt(item)}
                        </p>
                      </div>
                    </article>
                  </a>
                </div>
              ))
            ) : (
              <div className="text-zinc-400 py-20">No items found.</div>
            )}
          </div>

          {/* ARROWS AT BOTTOM LEFT */}
          <div className="mt-8 flex gap-4 pb-2 md:hidden">
            <button
              onClick={() => {
                const carousel = document.getElementById('case-study-carousel');
                if (carousel) carousel.scrollBy({ left: -500, behavior: 'smooth' });
              }}
              className="flex h-14 w-14 items-center justify-center border border-zinc-900/5 transition-all duration-300 hover:bg-zinc-900 hover:text-white"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button
              onClick={() => {
                const carousel = document.getElementById('case-study-carousel');
                if (carousel) carousel.scrollBy({ left: 500, behavior: 'smooth' });
              }}
              className="flex h-14 w-14 items-center justify-center border border-zinc-900/5 transition-all duration-300 hover:bg-zinc-900 hover:text-white"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
