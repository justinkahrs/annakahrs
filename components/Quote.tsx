"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image?: string;
  category?: string;
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
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/blog");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error loading blog posts:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const getFirstCategory = (post?: BlogPost) => {
    return post?.category || "Case Study";
  };

  const getExcerpt = (post?: BlogPost) => {
    if (!post?.excerpt) {
      return "Read the full post for details.";
    }
    return post.excerpt.length > 200 ? `${post.excerpt.slice(0, 197).trimEnd()}...` : post.excerpt;
  };

  return (
    <section
      id="projects"
      className="relative right-[50%] left-[50%] -mr-[50vw] -ml-[50vw]
        w-screen bg-(--background) px-4 pb-8 pt-8 text-black sm:px-12"
    >
      <div className="relative mx-auto mt-8 max-w-[1500px] px-0 sm:px-6">
        {/* EYEBROW */}
        <div className="w-full relative mb-6">
          <div
            className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none`}
          >
            <div className="w-2 h-2 bg-(--highlight)" />
            FEATURED POST
          </div>
          <div className="w-full border-t-[3px] border-dotted border-zinc-900/10" />
        </div>

      </div>
      
      {/* FEATURED POST SECTION (FULL BLEED) */}
        <div className="relative mt-12 -mx-4 sm:-mx-12 overflow-hidden">
          {loading ? (
            <div className="w-full flex justify-center py-20">
              <span className="loading loading-spinner loading-lg text-zinc-900" />
            </div>
          ) : posts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="group relative"
            >
              <a
                href={`/blog/${posts[0].slug}`}
                className="relative block py-24 transition-all duration-500 sm:py-32 lg:py-44"
              >
                {/* Background Layer (Full Bleed) */}
                <div className="absolute inset-0 z-0">
                  {posts[0].image ? (
                    <img
                      src={posts[0].image}
                      alt={posts[0].title}
                      className="h-full w-full object-cover opacity-[0.07] transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: thumbnailGradients[0],
                      }}
                    />
                  )}

                  {/* Decorative overlays */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: thumbnailDotPattern,
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 ${
                      posts[0].image
                        ? "bg-linear-to-tr from-emerald-500/10 via-transparent to-emerald-500/5 mix-blend-overlay"
                        : "bg-linear-to-tr from-white/40 via-transparent to-white/20"
                    }`}
                  />
                  {/* Subtle edge masks */}
                  <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-(--background) to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-(--background) to-transparent" />
                </div>

                {/* Content Container (Constrained) */}
                <div className="relative z-10 mx-auto max-w-4xl px-6">
                  {/* Badge */}
                  <div className="mb-10 flex items-center gap-3">
                    <span className={`${dmSans.className} text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600`}>
                      Latest Insight
                    </span>
                    <div className="h-px w-8 bg-emerald-600/20" />
                    <span className={`${dmSans.className} text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500`}>
                      {getFirstCategory(posts[0])}
                    </span>
                  </div>

                  <h3 className={`${playfair.className} mb-8 text-5xl font-semibold leading-[1.05] text-zinc-900 sm:text-7xl lg:text-8xl`}>
                    {posts[0].title}
                  </h3>

                  <p className={`${dmSans.className} mb-12 max-w-2xl text-lg leading-relaxed text-zinc-700 sm:text-xl lg:text-2xl`}>
                    {getExcerpt(posts[0])}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className={`${dmSans.className} group/btn flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-900 transition-colors hover:text-emerald-600`}>
                      Explore Post
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ) : (
            <div className="text-zinc-400 py-20 text-center">No posts available at the moment.</div>
          )}
        </div>
    </section>
  );
}
