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
            return { title, link, description, pubDate, image, categories };
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

  const featured = items[0];
  const secondary = items.slice(1, 4);

  return (
    <section
      className="relative right-[50%] left-[50%] -mt-32 -mr-[50vw] -ml-[50vw]
        w-screen bg-[var(--background)] px-6 pb-40 pt-0 text-black sm:px-12"
    >
      {/* Stronger right-side gradient for the blue background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          background:
            "radial-gradient(circle at 100% 20%, rgba(59,130,246,0.35), transparent 60%), radial-gradient(circle at 100% 80%, rgba(37,99,235,0.55), transparent 60%)",
        }}
      />

      {/* RECOGNIZED FOR EXCELLENCE – full-bleed band at very top */}
      <div
        className="relative z-10 -mx-6 bg-[#f2e7ff] px-6 py-32 sm:-mx-12 sm:px-12 sm:py-40"
        id="projects"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-10 sm:flex-row">
          {/* Badge */}
          <img
            src="/COE-badge.png"
            alt="CASE Gold Circle of Excellence Award badge"
            className="h-32 w-auto flex-shrink-0 sm:h-36"
          />

          {/* Text */}
          <div className="flex max-w-xl flex-col justify-center text-center sm:text-left">
            <h3
              className={`
                ${playfair.className}
                text-3xl sm:text-4xl font-semibold tracking-tight
                text-[var(--highlight)]
              `}
            >
              Recognized for Excellence
            </h3>

            <p
              className={`
                ${dmSans.className}
                mt-4 text-base sm:text-lg leading-relaxed text-zinc-800
              `}
            >
              <span className="font-semibold">
                Work I contributed to has earned national recognition.
              </span>{" "}
              The UCSF Magazine website, where I led information architecture,
              conducted user interviews, and shaped user-tested navigation, was
              awarded the{" "}
              <a
                href="https://www.case.org/awards/circle-excellence/2022/ucsf-magazine-website"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium inline-flex items-center gap-1"
              >
                CASE Gold Circle of Excellence Award
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline h-4 w-4 align-baseline"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.25 3a.75.75 0 000 1.5h2.19l-6.72 6.72a.75.75 0 101.06 1.06l6.72-6.72v2.19a.75.75 0 001.5 0V3.75A.75.75 0 0014.06 3h-2.81zM5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-4a.75.75 0 00-1.5 0v4a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V7A.5.5 0 015 6.5h4a.75.75 0 000-1.5H5z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-40 max-w-4xl">
        {/* HEADER + BLURB */}
        <div className="mx-auto mb-40 max-w-4xl">
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2
              gap-12 sm:gap-20
              items-start 
              text-center sm:text-left
              justify-items-center sm:justify-items-start
            "
          >
            {/* LEFT — TITLES */}
            <div className="flex flex-col items-center sm:items-start">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className={`
                  ${dmSans.className}
                  text-sm sm:text-base 
                  uppercase tracking-[0.24em]
                  text-[var(--foreground)]/70
                `}
              >
                Case Studies
              </motion.h3>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className={`
                  ${playfair.className}
                  mt-3 text-5xl sm:text-6xl font-semibold tracking-tight
                  text-[var(--highlight)]
                `}
              >
                Work in Practice
              </motion.h2>
            </div>

            {/* RIGHT — BLURB */}
            <div className="max-w-md">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8 }}
                className={`
                  ${dmSans.className}
                  text-lg sm:text-xl 
                  leading-relaxed text-[var(--foreground)]/90
                `}
              >
                When{" "}
                <span className="font-semibold">
                  <a
                    href="https://userpilot.com/blog/ux-statistics/?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    88%
                  </a>{" "}
                  of users do not return after a poor experience
                </span>
                , the stakes are real. I design with that in mind, focusing on
                clarity, reducing friction, and supporting real tasks. The
                projects below highlight how I approach that work from start to
                finish.
              </motion.p>
            </div>
          </div>
        </div>

        {/* FEATURED + SECONDARY GRID */}
        <div className="mt-10">
          {loading ? (
            <div className="mt-20 flex justify-center">
              <span className="loading loading-spinner loading-lg text-black" />
            </div>
          ) : (
            <div
              className="
                grid grid-cols-1 gap-6 
                lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]
                items-stretch
              "
            >
              {/* LEFT: FEATURED PROJECT */}
              <div className="h-full">
                {featured && (
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <article
                      className="
                        flex h-full flex-col overflow-hidden
                        rounded-[2rem] border border-white/25 bg-white/5
                        shadow-sm backdrop-blur-sm
                      "
                    >
                      <div className="relative w-full overflow-hidden">
                        <DicebearThumbnail
                          seed={featured.title || featured.link || "featured"}
                          size={500}
                        />
                      </div>

                      <div className="px-6 py-6 sm:px-8 sm:py-7">
                        <div className="mb-4 flex flex-wrap gap-2">
                          {featured?.categories &&
                          featured.categories.length > 0 ? (
                            featured.categories.map((category) => (
                              <span
                                key={category}
                                className={`
                                  ${dmSans.className}
                                  inline-flex items-center rounded-full
                                  border border-white/30 bg-white/10
                                  px-3 py-1 text-[0.65rem] tracking-[0.18em]
                                  uppercase text-white/85
                                `}
                              >
                                {category}
                              </span>
                            ))
                          ) : (
                            <span
                              className={`
                                ${dmSans.className}
                                inline-flex items-center rounded-full
                                border border-white/30 bg-white/10
                                px-3 py-1 text-[0.65rem] tracking-[0.18em]
                                uppercase text-white/85
                              `}
                            >
                              Case Study
                            </span>
                          )}
                        </div>

                        <h3
                          className={`
                            ${playfair.className}
                            text-2xl sm:text-3xl font-semibold text-white
                          `}
                        >
                          {featured.title}
                        </h3>

                        <p
                          className={`
                            ${dmSans.className}
                            mt-3 text-sm sm:text-base leading-relaxed text-white/85
                          `}
                        >
                          {featured.description}
                        </p>
                      </div>
                    </article>
                  </a>
                )}
              </div>

              {/* RIGHT: SECONDARY PROJECTS / PLACEHOLDERS */}
              <div className="flex h-full flex-col gap-4">
                {[
                  "Next case study",
                  "Research in progress",
                  "More work coming",
                ].map((fallbackTitle, index) => {
                  const item = secondary[index];

                  if (item) {
                    return (
                      <a
                        key={item.link || item.title || fallbackTitle}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block flex-1"
                      >
                        <article className="flex h-full flex-col rounded-[2rem] border border-white/25 bg-white/5 px-6 py-6 sm:px-8 sm:py-7 shadow-sm backdrop-blur-sm">
                          <div className="mb-4 flex flex-wrap gap-2">
                            {item.categories && item.categories.length > 0 ? (
                              item.categories.map((category) => (
                                <span
                                  key={category}
                                  className={`
                                    ${dmSans.className}
                                    inline-flex items-center rounded-full
                                    border border-white/30 bg-white/10
                                    px-3 py-1 text-[0.65rem] tracking-[0.18em]
                                    uppercase text-white/85
                                  `}
                                >
                                  {category}
                                </span>
                              ))
                            ) : (
                              <span
                                className={`
                                  ${dmSans.className}
                                  inline-flex items-center rounded-full
                                  border border-white/30 bg-white/10
                                  px-3 py-1 text-[0.65rem] tracking-[0.18em]
                                  uppercase text-white/85
                                `}
                              >
                                Case Study
                              </span>
                            )}
                          </div>

                          <h3
                            className={`
                              ${playfair.className}
                              mt-0 text-xl sm:text-2xl font-semibold text-white
                            `}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`
                              ${dmSans.className}
                              mt-3 text-sm sm:text-base leading-relaxed text-white/80
                            `}
                          >
                            {item.description}
                          </p>
                          {item.pubDate && (
                            <p
                              className={`
                                ${dmSans.className}
                                mt-4 text-xs tracking-[0.18em] uppercase text-white/60
                              `}
                            >
                              {item.pubDate.toLocaleDateString()}
                            </p>
                          )}
                        </article>
                      </a>
                    );
                  }

                  // Fallback "Coming soon" cards
                  return (
                    <div
                      key={fallbackTitle}
                      className="flex-1 rounded-[2rem] border border-white/25 bg-white/5 px-6 py-6 sm:px-8 sm:py-7 shadow-sm backdrop-blur-sm"
                    >
                      <div
                        className={`
                          ${dmSans.className}
                          inline-flex items-center rounded-full
                          border border-white/30 bg-white/10
                          px-3 py-1 text-[0.65rem] tracking-[0.18em]
                          uppercase text-white/85
                        `}
                      >
                        Coming soon
                      </div>
                      <h3
                        className={`
                          ${playfair.className}
                          mt-4 text-xl sm:text-2xl font-semibold text-white
                        `}
                      >
                        {fallbackTitle}
                      </h3>
                      <p
                        className={`
                          ${dmSans.className}
                          mt-3 text-sm sm:text-base leading-relaxed text-white/80
                        `}
                      >
                        I&apos;m currently shaping this story capturing the
                        research, decisions, and outcomes in a way that does the
                        work justice.
                      </p>
                      <p
                        className={`
                          ${dmSans.className}
                          mt-4 text-xs tracking-[0.18em] uppercase text-white/60
                        `}
                      >
                        Case study in progress
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        {items.length > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              aria-disabled="true"
              disabled
              className="
                w-44 rounded-full bg-[var(--primary)] px-5 py-3
                text-sm font-semibold uppercase tracking-wide 
                text-white opacity-60 cursor-not-allowed select-none
              "
            >
              More soon
            </button>
          </div>
        )}
      </div>
    </section>
  );
}