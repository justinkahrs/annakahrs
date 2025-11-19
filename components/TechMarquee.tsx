import { useRef, useState, useLayoutEffect } from "react";
import { motion } from "motion/react";

export default function TechMarquee({
  logos = [],
  speed = 20,
  size = 64,
}) {
  const baseRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(2);

  useLayoutEffect(() => {
    if (!baseRef.current) return;

    const baseWidth = baseRef.current.offsetWidth;
    const screenWidth = window.innerWidth;

    // how many copies needed to fill full width *plus* one extra for seamless looping
    const needed = Math.ceil(screenWidth / baseWidth) + 2;

    setRepeatCount(needed);
  }, [logos, size]);

  return (
    <div
      className="
        relative left-1/2 right-1/2 -mx-[50vw] 
        w-screen overflow-hidden py-6
      "
    >
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* dynamic clones */}
        {Array.from({ length: repeatCount }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? baseRef : undefined}
            className="flex items-center gap-10 mr-10"
          >
            {logos.map((name) => (
              <div
                key={`${i}-${name}`}
                style={{ width: size, height: size }}
                className="flex items-center justify-center"
              >
                <img
                  src={`/${name}.svg`}
                  alt={name}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}