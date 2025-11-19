"use client";

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

function About() {
  return (
    <section className="scroll-mt-28">
      <div
        id="about"
        className="
          relative right-1/2 left-1/2 -mx-[50vw]
          w-screen bg-white
          px-10 py-32 sm:px-14 sm:py-40
        "
      >
        <div className="mx-auto max-w-3xl">

          {/* TOP: PHOTO + HEADING */}
          <div className="flex flex-col items-center text-center gap-8">

            {/* PHOTO */}
            <div className="h-44 w-44 overflow-hidden rounded-full border border-zinc-200 bg-zinc-50 shadow-sm sm:h-52 sm:w-52">
              <img
                src="/profile-kahrs.jpeg"
                alt="Portrait of Anna"
                className="h-full w-full object-cover"
              />
            </div>

            {/* HEADING */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className={`
                  ${dmSans.className}
                  mt-0 text-xs sm:text-sm uppercase tracking-[0.24em]
                  text-zinc-500
                `}
              >
                ABOUT
              </motion.h3>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className={`
                  ${playfair.className}
                  mt-1 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight
                  text-[var(--highlight)]
                `}
              >
                This is the part where I talk about myself.
              </motion.h2>
            </div>
          </div>

          {/* BODY COPY */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-16 space-y-6"
          >
            <p
              className={`
                ${dmSans.className}
                text-base sm:text-lg leading-relaxed text-zinc-600
              `}
            >
              I’ve always been drawn to the things most people never notice: the logic under the surface, the patterns that quietly guide you, the hidden decisions that make something feel “right” without announcing themselves. In another life, that meant memorizing art-movement timelines and happily losing afternoons in dusty archives.
            </p>

            <p
              className={`
                ${dmSans.className}
                text-base sm:text-lg leading-relaxed text-zinc-600
              `}
            >
              Now it means designing digital experiences that don’t make you think twice, in the good way. I care about the details a lot. The sort of lot you only notice when something feels unusually smooth. I like taking complex systems and giving them a shape people can actually move through. I like when a journey feels intuitive because every layer, the taxonomy, the content, the interface, is in conversation with the next.
            </p>

            <p
              className={`
                ${dmSans.className}
                text-base sm:text-lg leading-relaxed text-zinc-600
              `}
            >
              If something feels polished, it’s because I fussed over it until it could stand on its own.
            </p>
          </motion.div>

          {/* TWO-COLUMN DETAILS — centered like Skills */}
<div className="mt-24 flex justify-center">
  <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 max-w-3xl sm:max-w-4xl text-center">

    {/* HOT TAKES */}
    <div className="flex flex-col items-center">
      <h4
        className={`
          ${playfair.className}
          text-xl sm:text-2xl font-semibold text-[var(--highlight)]
        `}
      >
        UX opinions I will defend, politely:
      </h4>
      <div className="mt-3 h-[2px] w-10 bg-[var(--highlight)]/60" />
      <ul
        className={`
          ${dmSans.className}
          mt-4 space-y-3 text-sm sm:text-base text-zinc-600
        `}
      >
        <li>Clear is better than clever</li>
        <li>“Learn more” is lazy</li>
        <li>Content is design</li>
        <li>Users hate scrolling = myth</li>
        <li>It’s not about how many clicks</li>
        <li>UX is not graphic design</li>
      </ul>
    </div>

    {/* ENJOY LIST */}
    <div className="flex flex-col items-center">
      <h4
        className={`
          ${playfair.className}
          text-xl sm:text-2xl font-semibold text-[var(--highlight)]
        `}
      >
        Things I enjoy:
      </h4>
      <div className="mt-3 h-[2px] w-10 bg-[var(--highlight)]/60" />
      <ul
        className={`
          ${dmSans.className}
          mt-4 space-y-3 text-sm sm:text-base text-zinc-600
        `}
      >
        <li>A well maintained Jira ritual</li>
        <li>Digging in my garden</li>
        <li>Well-written documentation</li>
        <li>Finding the perfect emoji</li>
        <li>Categorizing things</li>
        <li>Knitting, crocheting, and sewing</li>
        <li>Hunting down thrift-store gold</li>
      </ul>
    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
}

export default About;