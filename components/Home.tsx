"use client";

import handleScroll from "@/utils/handleScroll";
import gsap from "gsap";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { useEffect, useRef } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

function Home() {
  const firstLineRef = useRef<HTMLSpanElement>(null);
  const secondLineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!firstLineRef.current || !secondLineRef.current) {
      return;
    }

    const firstLineText = "Designing clarity";
    const secondLineText = "across complex systems";
    const fullText = `${firstLineText} ${secondLineText}`;
    const glyphs = "!<>-_\\/[]{}=+*^?#";
    const state = { reveal: 1 };
    let lastRenderedReveal = -1;

    const render = (revealCount: number) => {
      const scrambled = fullText
        .split("")
        .map((char, index) => {
          if (char === " " || index < revealCount) {
            return char;
          }

          return glyphs[Math.floor(Math.random() * glyphs.length)];
        })
        .join("");

      firstLineRef.current!.textContent = scrambled.slice(0, firstLineText.length);
      secondLineRef.current!.textContent = scrambled.slice(firstLineText.length + 1);
    };

    render(1);

    const tween = gsap.to(state, {
      delay: 0.5,
      duration: 3,
      ease: "none",
      reveal: fullText.length,
      snap: { reveal: 1 },
      onUpdate: () => {
        const nextReveal = Math.round(state.reveal);
        if (nextReveal === lastRenderedReveal) {
          return;
        }

        lastRenderedReveal = nextReveal;
        render(nextReveal);
      },
      onComplete: () => {
        firstLineRef.current!.textContent = firstLineText;
        secondLineRef.current!.textContent = secondLineText;
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section id="home" className="scroll-mt-[60px] mb-0 bg-[var(--background)]">
      <div className="p-4 sm:p-0">
        <div className="relative mx-auto w-full max-w-[1920px] px-0 sm:px-6">
          {/* HERO CARD */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] min-h-[85vh] flex flex-col items-center justify-center p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(92%_56%_at_50%_100%,rgba(255,94,64,0.26),rgba(255,94,64,0.09)_34%,rgba(186,255,231,0.14)_56%,rgba(236,228,251,0.92)_78%,rgba(236,228,251,1)_90%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_32%_at_50%_34%,rgba(214,188,255,0.34),rgba(214,188,255,0.08)_58%,transparent_75%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(171,138,255,0.22)_0%,transparent_24%,transparent_78%,rgba(255,104,73,0.14)_100%)]" />
            <div className="pointer-events-none absolute inset-y-0 left-[21%] w-[23%] rotate-[8deg] bg-[linear-gradient(to_bottom,rgba(236,220,255,0.40),rgba(236,220,255,0.08)_55%,transparent)] blur-2xl" />
            <div className="pointer-events-none absolute inset-y-0 right-[21%] w-[23%] -rotate-[8deg] bg-[linear-gradient(to_bottom,rgba(204,248,229,0.30),rgba(204,248,229,0.05)_55%,transparent)] blur-2xl" />
            <div
              className="pointer-events-none absolute inset-0 opacity-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(24,24,27,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(24,24,27,0.12) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                animation: "home-graph-fade-in 1.2s ease-out 0.2s forwards",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.18'/%3E%3C/svg%3E\")",
              }}
            />
            {/* HERO CONTENT */}
            <div
              className={` ${dmSans.className} relative z-10 text-center text-zinc-900 w-full `}
            >
              {/* EYEBROW */}
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-light uppercase tracking-[0.12em] text-zinc-600/60 mb-12">
                Anna Kahrs • Lead UX Designer
              </div>

              {/* HEADLINE */}
              <h1 className="flex flex-col items-center mb-4">
                <span
                  className={`
                    ${dmSans.className} 
                    text-4xl sm:text-6xl lg:text-[6rem] xl:text-[7rem]
                    font-light tracking-tighter text-zinc-900 leading-[0.85]
                    whitespace-nowrap
                  `}
                  ref={firstLineRef}
                >
                  Designing clarity
                </span>
                <span
                  className={`
                    ${playfair.className} 
                    text-4xl sm:text-5xl lg:text-[5rem] xl:text-[6rem]
                    font-medium italic tracking-[-0.02em] text-zinc-800 leading-[1.02] sm:leading-[1.06] mt-2 sm:mt-6
                    whitespace-normal sm:whitespace-nowrap
                  `}
                  ref={secondLineRef}
                >
                  across complex systems
                </span>
              </h1>

              {/* BUTTON ROW */}
              <div className="mt-16 flex flex-wrap justify-center gap-3">
                {/* PRIMARY BUTTON */}
                <button
                  className="rounded-xl bg-zinc-900 px-4 py-2.5
                    text-sm font-semibold text-white
                    hover:bg-zinc-800 cursor-pointer"
                  onClick={() => handleScroll("#experience")}
                  type="button"
                >
                  See the Work
                </button>

                {/* SECONDARY BUTTON */}
                <button
                  onClick={() => handleScroll("#experience")}
                  className="rounded-xl border border-zinc-900/35
                    bg-transparent px-4 py-2.5 text-sm font-semibold
                    text-zinc-900
                    cursor-pointer hover:bg-zinc-900/5"
                >
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
