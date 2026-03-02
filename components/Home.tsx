"use client";

import handleScroll from "@/utils/handleScroll";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

function Home() {
  return (
    <section id="home" className="scroll-mt-[60px] mb-40 bg-[#f4f3ec]">
      <div className="pt-0">
        <div className="relative mx-auto w-full max-w-[1920px] px-6">
          {/* HERO CARD */}
          <div className="relative overflow-hidden rounded-3xl bg-stone-900/5 min-h-[85vh] flex flex-col items-center justify-center p-8 sm:p-12">
            {/* HERO CONTENT */}
            <div
              className={` ${dmSans.className} relative z-10 text-center text-zinc-900 w-full `}
            >
              {/* EYEBROW */}
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-light uppercase tracking-[0.12em] text-zinc-600/60 mb-12">
                Lead UX Designer
              </div>

              {/* HEADLINE */}
              <h1 className="flex flex-col items-center mb-4">
                <span
                  className={`
                    ${dmSans.className} 
                    text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem]
                    font-light tracking-tighter text-zinc-900 leading-[0.85]
                    whitespace-nowrap
                  `}
                >
                  Designing clarity
                </span>
                <span
                  className={`
                    ${playfair.className} 
                    text-4xl sm:text-6xl lg:text-[6rem] xl:text-[7rem]
                    font-medium italic text-zinc-800 leading-tight mt-6
                    whitespace-nowrap
                  `}
                >
                  across complex systems
                </span>
              </h1>

              {/* BUTTON ROW */}
              <div className="mt-16 flex flex-wrap justify-center gap-4">
                {/* PRIMARY BUTTON */}
                <button
                  className="w-48 rounded-full bg-zinc-900 px-6 py-4
                    text-sm font-semibold uppercase tracking-wide text-white
                    hover:bg-zinc-800 cursor-pointer shadow-lg shadow-zinc-900/10"
                  onClick={() => handleScroll("#experience")}
                  type="button"
                >
                  See the Work
                </button>

                {/* SECONDARY BUTTON */}
                <button
                  onClick={() => window.open("/Anna_Kahrs_resume.pdf", "_blank")}
                  className="w-48 rounded-full border border-zinc-900/10
                    bg-white/40 backdrop-blur-md px-6 py-4 text-sm font-semibold uppercase
                    tracking-wide text-zinc-900
                    cursor-pointer hover:bg-white/60"
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
