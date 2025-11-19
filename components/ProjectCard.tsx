import React from "react";
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

type Props = {
  href: string;
  title: string;
  subtitle: string;
  src: string;
};

export default function ProjectCard({ href, title, src, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="h-full"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group relative flex h-full flex-col overflow-hidden 
          rounded-[2rem] bg-white shadow-sm
          transition-transform duration-300
          hover:-translate-y-1 hover:shadow-md
        "
      >
        {/* Gradient overlay to match marquee + skills */}
        <div
          className="
            pointer-events-none absolute inset-0 opacity-[0.7]
          "
          style={{
            background: `
              radial-gradient(circle at 0% 20%, rgba(96,165,250,0.16), transparent 55%),
              radial-gradient(circle at 100% 100%, rgba(244,114,182,0.16), transparent 55%)
            `,
          }}
        />

        {/* IMAGE */}
        <div className="relative h-44 w-full overflow-hidden rounded-t-[2rem] z-[1]">
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-[1] p-6 flex flex-col flex-1 text-center items-center">
          <h3
            className={`
              ${playfair.className}
              text-xl sm:text-2xl font-semibold tracking-tight
              text-[var(--highlight)]
              line-clamp-2
            `}
          >
            {title}
          </h3>

          <p
            className={`
              ${dmSans.className}
              mt-3 text-sm sm:text-base leading-relaxed
              text-[var(--highlight)]/75 line-clamp-2
            `}
          >
            {subtitle}
          </p>
        </div>
      </a>
    </motion.div>
  );
}