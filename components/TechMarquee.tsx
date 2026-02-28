"use client";

import { motion } from "motion/react";

type TechMarqueeProps = {
  logos?: Array<string | { src: string; scale?: number }>;
  speedSeconds?: number;
  size?: number;
};

export default function TechMarquee({
  logos = [],
  speedSeconds = 20,
  size = 64,
}: TechMarqueeProps) {
  const getLogoSrc = (src: string) => {
    if (src.startsWith("http://") || src.startsWith("https://")) return src;
    return src.includes(".") ? `/${src}` : `/${src}.svg`;
  };

  return (
    <div
      className="relative left-1/2 right-1/2 -mx-[50vw] -my-10 w-screen overflow-hidden py-0"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, transparent 8%, black 30%, black 70%, transparent 92%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, transparent 8%, black 30%, black 70%, transparent 92%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex w-max will-change-transform"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: speedSeconds,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div className="flex items-center gap-20 pr-20 shrink-0">
          {logos.map((logo, index) => {
            const src = typeof logo === "string" ? logo : logo.src;
            const scale = typeof logo === "string" ? 1 : (logo.scale ?? 1);
            return (
            <div
              key={`set-a-${src}-${index}`}
              style={{ width: size * scale, height: size * scale }}
              className="flex items-center justify-center"
            >
              <img
                src={getLogoSrc(src)}
                alt={src}
                className="object-contain max-w-full max-h-full"
              />
            </div>
            );
          })}
        </div>

        <div className="flex items-center gap-20 pr-20 shrink-0" aria-hidden="true">
          {logos.map((logo, index) => {
            const src = typeof logo === "string" ? logo : logo.src;
            const scale = typeof logo === "string" ? 1 : (logo.scale ?? 1);
            return (
            <div
              key={`set-b-${src}-${index}`}
              style={{ width: size * scale, height: size * scale }}
              className="flex items-center justify-center"
            >
              <img
                src={getLogoSrc(src)}
                alt=""
                className="object-contain max-w-full max-h-full"
              />
            </div>
            );
          })}
        </div>

      </motion.div>
    </div>
  );
}
