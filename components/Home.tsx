"use client";

import handleScroll from "@/utils/handleScroll";
import { motion } from "motion/react";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function Home() {
  return (
    <section id="home" className="scroll-mt-28 mb-80">
      <div className="pt-20">
        <div className="relative mx-auto w-full max-w-4xl px-6 sm:px-0">
          {/* 3D BACKGROUND */}

          {/* HERO CONTENT */}
          <div
            className={`
              ${dmSans.className}
              relative z-10 rounded-[2rem] p-10 text-center
              text-[var(--foreground)]
            `}
          >
            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`
                mt-3 text-5xl sm:text-6xl font-semibold tracking-tight
          text-[var(--highlight)]
              `}
            >
              <motion.span
                className={`
                  relative ${playfair.className}
                  text-[var(--highlight)] font-semibold
                `}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                Anna Kahrs
              </motion.span>
            </motion.h1>

            {/* SUBHEAD */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6, ease: "easeOut" }}
              className="mt-4 text-xs sm:text-sm uppercase tracking-[0.24em] text-[var(--white)]"
            >
              Lead user experience designer
            </motion.p>

            {/* TAGLINE */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="mt-8 text-lg sm:text-2xl tracking-tight text-[var(--foreground)]/90"
            >
              I design intuitive systems, thoughtful content structures, and
              user journeys that make sense.
            </motion.p>

            {/* BUTTON ROW */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {/* PRIMARY BUTTON */}
              <button
                className="w-44 rounded-full bg-[var(--primary)] px-5 py-3
                  text-sm font-semibold uppercase tracking-wide text-white
                  transition hover:bg-[var(--primary-hover)] cursor-pointer"
                onClick={() => handleScroll("#experience")}
                type="button"
              >
                View Experience
              </button>

              {/* SECONDARY BUTTON */}
              <button
                onClick={() => handleScroll("#contact")}
                className="w-44 rounded-full border border-[var(--white)] bg-transparent
                  px-5 py-3 text-sm font-semibold uppercase tracking-wide
                  text-[var(--foreground)] transition cursor-pointer
                  hover:bg-[var(--secondary-light)] hover:text-white"
                style={{
                  ["--secondary-light" as any]: "rgba(71, 85, 105, 0.35)",
                }}
              >
                Contact
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;