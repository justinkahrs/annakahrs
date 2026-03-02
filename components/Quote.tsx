"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display, DM_Sans } from "next/font/google";
import DicebearThumbnail from "./DiceBear";

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
        w-screen bg-[#f4f3ec] px-6 pb-40 pt-24 text-black sm:px-12"
    >
      <div className="relative mx-auto mt-20 max-w-[1500px] px-6">
        {/* EYEBROW */}
        <div className="w-full relative mb-6">
          <div
            className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none`}
          >
            <div className="w-2 h-2 bg-[#ff4500]" />
            SELECTED WORK
          </div>
          <div className="w-full border-t-[3px] border-dotted border-zinc-900/10" />
        </div>

        {/* HEADER SECTION */}
        <div className="mt-16 mb-24 pr-0">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${playfair.className} pl-10 sm:pl-20 lg:pl-32 text-4xl sm:text-5xl lg:text-6xl font-medium text-zinc-900 italic tracking-tight`}
            >
              where the work
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`${dmSans.className} text-4xl sm:text-5xl lg:text-6xl font-normal text-zinc-800 tracking-tight text-right md:ml-auto`}
            >
              comes to life
            </motion.h3>
          </div>

          <div className="mt-12 flex flex-col lg:flex-row pl-10 sm:pl-20 lg:pl-32 gap-12 text-left">
            <div className="max-w-md flex gap-6">
              <span className={`${dmSans.className} text-xs font-bold text-zinc-400 mt-1.5`}>01</span>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${dmSans.className} text-lg sm:text-xl leading-relaxed text-zinc-700`}
              >
This section holds both the work itself and the thinking behind it. Case studies, experiments, reflections, and the occasional strong opinion about how digital systems should behave.              </motion.p>
            </div>
          </div>
        </div>

        {/* CAROUSEL SECTION */}
        <div className="relative overflow-visible">
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/card"
                  >
                    <article className="flex flex-col">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-100 mb-5 transition-transform duration-500 group-hover/card:scale-[1.02]">
                        <DicebearThumbnail
                          seed={item.title || item.link}
                          size={600}
                        />
                        {/* Grayscale overlay that fades on hover */}
                        <div className="absolute inset-0 bg-zinc-900/10 grayscale mix-blend-multiply opacity-100 transition-all duration-500 group-hover/card:grayscale-0 group-hover/card:opacity-0" />
                      </div>

                      <div className="flex flex-col text-left">
                        <h4 className={`${dmSans.className} text-xl font-semibold text-zinc-900 mb-1 line-clamp-2`}>
                          {item.title}
                        </h4>
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
          <div className="flex gap-4 mt-8 pb-10">
            <button
              onClick={() => {
                const carousel = document.getElementById('case-study-carousel');
                if (carousel) carousel.scrollBy({ left: -500, behavior: 'smooth' });
              }}
              className="w-14 h-14 rounded-full border border-zinc-900/10 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all duration-300"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button
              onClick={() => {
                const carousel = document.getElementById('case-study-carousel');
                if (carousel) carousel.scrollBy({ left: 500, behavior: 'smooth' });
              }}
              className="w-14 h-14 rounded-full border border-zinc-900/10 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all duration-300"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
