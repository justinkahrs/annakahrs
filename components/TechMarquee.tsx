import { motion } from "motion/react";
export default function TechMarquee() {
  const logos = [
    // "django",
    "github",
    "nextjs",
    "openai",
    "postgresql",
    "python",
    "react",
    "rust",
    "stripe",
    "tailwind",
    // "zapier",
  ];
  return (
    <div
      aria-label="Technology Marquee"
      className="relative right-1/2 left-1/2 -mx-[50vw] w-screen my-10
        overflow-x-hidden overflow-y-visible pb-6 pt-12"
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex gap-10"
        style={{ width: "200%" }}
      >
        <div className="flex items-center gap-20 sm:gap-40 pr-40">
          {logos.map((name) => (
            <div
              key={`a-${name}`}
              className="tooltip flex h-24 w-12 items-center justify-center"
              data-tip={name}
            >
              <img
                src={`/${name}.svg`}
                alt={`${name} logo`}
                className={`${name === "django" || name === "zapier" ? "h-16 w-16" : "h-12 w-12"}
                invert-[1]`}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-20 sm:gap-40 pr-40">
          {logos.map((name) => (
            <div
              key={`b-${name}`}
              className="tooltip flex h-24 w-12 items-center justify-center"
              data-tip={name}
            >
              <img
                src={`/${name}.svg`}
                alt={`${name} logo`}
                className={`${name === "django" || name === "zapier" ? "h-16 w-16" : "h-12 w-12"}
                invert-[1]`}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
