"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import TechMarquee from "./TechMarquee";
import Quote from "./Quote";
import { Playfair_Display, DM_Sans, Dancing_Script } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const SKILL_SECTIONS = [
  {
    title: "Core Skills",
    items: [
      "User Research",
      "Information Architecture",
      "Interaction Design",
      "UX Writing",
      "Prototyping",
      "Survey Design",
      "Service Design",
      "Visual Design",
    ],
  },
  {
    title: "Methods",
    items: [
      "Design Thinking",
      "Usability Testing",
      "Card Sorting",
      "Journey Mapping",
      "Personas",
      "Content Modeling",
      "AI Prototyping",
      "Systems Thinking",
    ],
  },
  {
    title: "Relevant Tools",
    items: ["Figma", "ChatGPT", "Adobe CC", "Zoom", "CSS", "Qualtrics"],
  },
];

const ScrollWord = ({
  word,
  progress,
  range,
  className,
}: {
  word: string;
  progress: any;
  range: [number, number];
  className?: string;
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.25em] ${className || ""}`}
    >
      {word}
    </motion.span>
  );
};

const ScrollHighlightText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const phraseRef = useRef<HTMLSpanElement>(null);
  const [activeCount, setActiveCount] = useState(0);
  const [locked, setLocked] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (locked || !phraseRef.current) return;

    const node = phraseRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || timerRef.current !== null || locked) {
          return;
        }

        timerRef.current = window.setInterval(() => {
          setActiveCount((prev) => {
            const next = Math.min(text.length, prev + 1);
            if (next >= text.length) {
              if (timerRef.current !== null) {
                window.clearInterval(timerRef.current);
                timerRef.current = null;
              }
              setLocked(true);
            }
            return next;
          });
        }, 24);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [locked, text]);

  return (
    <span ref={phraseRef} className={className}>
      {text.split("").map((char, index) => {
        const isSpace = char === " ";
        const isActive = locked || (!isSpace && index < activeCount);
        return (
          <span
            key={`${char}-${index}`}
            className={isActive ? "rounded-sm bg-[#bbf7d0]/70" : undefined}
          >
            {isSpace ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
};

function Skills() {
  const skillCards = SKILL_SECTIONS.filter(
    (section) => section.title !== "Relevant Tools",
  );
  const hrLineStyle = { borderColor: "rgba(0, 0, 0, 0.05)" };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const updateIsMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  const statementRef = useRef<HTMLDivElement>(null);
  const statementOffsets = (isMobile
    ? ["start 0.85", "end 0.2"]
    : ["start 0.55", "start 0.1"]) as any;
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: statementOffsets,
  });

  const words1 =
    "When workflows sprawl, navigation tangles, and platforms quietly compete with themselves, something feels off. That’s where I start paying attention.".split(
      " ",
    );
  const words2 =
    "I’m a UX designer and systems-focused thinker who listens closely, studies patterns, and helps teams untangle complexity. My work is about turning friction into clarity and helping digital spaces feel simpler, steadier, and easier to navigate.".split(
      " ",
    );

  const totalWords = words1.length + words2.length;

  return (
    <section className="scroll-mt-28">
      <div
        id="skills"
        className="
          relative right-1/2 left-1/2 -mx-[50vw]
          w-screen bg-(--background)
          px-4 pt-28 pb-24 sm:px-12 sm:pt-44 sm:pb-28
          overflow-hidden
        "
      >
        {/* MAIN CONTENT */}
        <div className="relative z-10 mx-auto max-w-[1500px] px-0 sm:px-6">
          {/* EYEBROW BLOCK */}
          <div
            className={`${dmSans.className} flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none pl-0 sm:pl-20 lg:pl-32 mb-6`}
          >
            <div className="w-2 h-2 bg-(--highlight)" />
            FOCUS
          </div>

          {/* NEW STRATEGIC STATEMENT */}
          <div
            ref={statementRef}
            className={`
              ${dmSans.className}
              mt-2 sm:mt-0 mb-28 sm:mb-44 text-4xl sm:text-5xl lg:text-5xl text-zinc-900 leading-[1.2]
              pl-0 sm:pl-20 lg:pl-32 max-w-5xl
            `}
          >
            <div className="block mb-8 font-medium">
              {words1.map((word, i) => {
                const start = i / totalWords;
                const end = (i + 1) / totalWords;
                return (
                  <ScrollWord
                    key={i}
                    word={word}
                    progress={scrollYProgress}
                    range={[start, end]}
                    className={word.includes("off") ? "italic" : ""}
                  />
                );
              })}
            </div>

            <div className="block text-zinc-700 font-normal">
              {words2.map((word, i) => {
                const globalIndex = words1.length + i;
                const start = globalIndex / totalWords;
                const end = (globalIndex + 1) / totalWords;
                return (
                  <ScrollWord
                    key={i}
                    word={word}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <Quote />

        {/* SKILL CARDS */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-0 mb-28 max-w-none px-0 sm:static sm:left-auto sm:right-auto sm:mx-auto sm:w-auto sm:max-w-[1500px] sm:px-6">
          <div className="relative flex flex-col items-end gap-6 overflow-hidden rounded-none bg-(--surface) p-4 pb-8 sm:gap-8 sm:rounded-3xl sm:p-4 lg:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(95%_62%_at_18%_8%,rgba(184,255,232,0.22),rgba(184,255,232,0.06)_42%,transparent_66%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(88%_56%_at_84%_96%,rgba(255,97,66,0.20),rgba(255,97,66,0.07)_36%,rgba(170,145,245,0.14)_58%,rgba(235,227,247,0.96)_82%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(128deg,rgba(181,156,255,0.20)_0%,transparent_26%,transparent_72%,rgba(176,255,229,0.16)_100%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[repeating-linear-gradient(135deg,rgba(24,24,27,0.18)_0,rgba(24,24,27,0.18)_1px,transparent_1px,transparent_14px)]" />
            <div className="pointer-events-none absolute inset-y-0 left-[17%] w-[24%] rotate-[7deg] bg-[linear-gradient(to_bottom,rgba(245,234,255,0.30),rgba(245,234,255,0.05)_56%,transparent)] blur-2xl" />
            <div className="pointer-events-none absolute inset-y-0 right-[17%] w-[24%] -rotate-[7deg] bg-[linear-gradient(to_bottom,rgba(219,255,241,0.28),rgba(219,255,241,0.04)_56%,transparent)] blur-2xl" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-multiply"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.16'/%3E%3C/svg%3E\")",
              }}
            />
            {/* BACKGROUND TEXT - TOP LEFT */}
            <div className="absolute top-2 left-4 sm:top-4 sm:left-6 lg:top-5 lg:left-7 z-0 pointer-events-none hidden sm:block">
              <h2
                className={`
                  ${dmSans.className}
                  text-2xl sm:text-4xl lg:text-6xl text-zinc-900 leading-none tracking-tighter
                `}
              >
                Where insight
              </h2>
            </div>

            <div className="w-full px-4 py-6 sm:hidden relative z-10">
              <h2
                className={`
                  ${dmSans.className}
                  text-4xl text-zinc-900 leading-[1.05] tracking-tighter mb-1
                `}
              >
                Where insight
              </h2>
              <h2
                className={`
                  ${playfair.className}
                  mt-0 text-4xl font-medium italic tracking-tight text-zinc-900 leading-[1.05]
                `}
              >
                turns into action
              </h2>
            </div>

            {skillCards.map((section) => (
              <article
                key={section.title}
                className="relative z-10 flex min-h-[320px] w-full flex-col rounded-3xl bg-(--background)/30 px-6 py-8 shadow-none backdrop-blur-sm sm:w-full sm:rounded-3xl sm:px-10 sm:py-12 md:w-2/3 lg:w-1/2"
              >
                <div className="w-full relative mb-6">
                  <h3
                    className={`
                      ${dmSans.className}
                      absolute left-0 bottom-[12px] flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none
                    `}
                  >

                    {section.title}
                  </h3>
                  <div
                    className="w-full border-t-[3px] border-dotted border-zinc-900/10"
                  />
                </div>

                <div className="mt-auto pt-24">
                  <p
                    className={`
                        ${dmSans.className}
                        text-lg sm:text-xl leading-[1.5] text-zinc-800
                      `}
                  >
                    {section.items.join(" • ")}
                  </p>
                </div>
              </article>
            ))}

            {/* BACKGROUND TEXT - BOTTOM LEFT */}
            <div className="absolute bottom-2 left-4 sm:bottom-4 sm:left-6 lg:bottom-5 lg:left-7 z-0 pointer-events-none hidden sm:block">
              <h2
                className={`
                  ${playfair.className}
                  text-2xl sm:text-4xl lg:text-6xl font-medium text-zinc-900 italic leading-none tracking-tight
                `}
              >
                turns into action
              </h2>
            </div>
          </div>
        </div>

        {/* TOOL SECTION HEADING */}
        <div className="relative z-10 left-1/2 right-1/2 -mx-[50vw] w-screen mt-28 mb-8 px-4 sm:static sm:left-auto sm:right-auto sm:mx-auto sm:w-auto sm:max-w-[1500px] sm:px-6">
          <div className="w-full relative mb-6">
            <div
              className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none`}
            >
              <div className="w-2 h-2 bg-(--highlight)" />
              TECHNOLOGY
            </div>
            <div
              className="w-full border-t-[3px] border-dotted border-zinc-900/10"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4 mb-8">
            <div className="flex w-full sm:w-auto flex-col pl-0 sm:pl-20 lg:pl-32">
              <h4
                className={`
                      ${playfair.className}
                      text-left text-4xl sm:text-4xl lg:text-6xl font-medium text-zinc-900 leading-tight mb-0 sm:mb-4
                    `}
              >
                Powered by
              </h4>
              <p
                className={`
                    ${dmSans.className}
                    text-left text-4xl font-normal text-zinc-800 italic leading-[1.05] mt-0 sm:hidden
                  `}
              >
                a cross-functional tool stack
              </p>
              <div className="w-full max-w-none sm:max-w-md">
                <p
                  className={`
                        ${dmSans.className}
                        mt-4 sm:mt-0 text-left text-lg sm:text-xl leading-[1.5] text-zinc-800
                      `}
                >
                  A curated set of research, design, prototyping, and collaboration tools that support evidence-driven decisions and scalable digital systems.
                </p>

                <div
                  className={`${dmSans.className} mt-6 pt-4 sm:mt-12 sm:pt-0 text-left text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none`}
                >
                  SELECTED TOOLS
                </div>
              </div>
            </div>
            <p
              className={`
                    ${dmSans.className}
                    hidden sm:block text-left sm:text-5xl lg:text-6xl font-normal text-zinc-800 italic mt-0
                  `}
            >
              a cross-functional tool stack
            </p>
          </div>
        </div>

        {/* MARQUEE — Tools */}
        <div className="mt-0 mb-12">
          <div
            className="relative left-1/2 right-1/2 -mx-[50vw] mt-0 w-screen"
          >
            <div className="relative z-10">
              <TechMarquee
                logos={[
                  "adobe",
                  "figma",
                  "drupal",
                  { src: "github", scale: 0.9 },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Google_Antigravity_Logo.svg",
                    scale: 2.0,
                  },
                  {
                    src: "https://commons.wikimedia.org/wiki/Special:FilePath/N8n-logo-new.svg",
                    scale: 1.7,
                  },
                  { src: "jira", scale: 1.35 },
                  "loom",
                  "make",
                  "miro",
                  "notion",
                  "optimalworkshop",
                  { src: "qualtrics", scale: 1.6 },
                  { src: "siteimprove", scale: 1.15 },
                  "zendesk",
                ]}
                speedSeconds={42}
                size={isMobile ? 112 : 108}
              />
            </div>
          </div>
        </div>

        {/* NN/g Certification Card */}
        <div className="relative z-10 mx-auto max-w-[1500px] px-0 sm:px-6 mt-0">
          <div
            className="relative overflow-hidden mx-auto mb-0 w-full rounded-3xl bg-stone-900/5 p-6 pb-0 sm:p-8 sm:pb-0 md:p-10 md:pb-0 lg:p-12 lg:pb-0"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(39,39,42,0.18) 1px, transparent 0)",
                backgroundSize: "18px 18px",
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-10 md:gap-14 pb-24 sm:pb-16">
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20, rotate: isMobile ? 0 : -5 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: isMobile ? 0 : -15 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute left-[10px] bottom-[-72px] z-0 sm:left-[-10px] sm:bottom-[-130px] lg:left-[-30px] lg:bottom-[-170px]"
                style={{
                  WebkitMaskImage: isMobile
                    ? "linear-gradient(to bottom, transparent 24%, rgba(0,0,0,0.96) 82%, black 100%)"
                    : "linear-gradient(to bottom, transparent 5%, black 100%)",
                  maskImage: isMobile
                    ? "linear-gradient(to bottom, transparent 24%, rgba(0,0,0,0.96) 82%, black 100%)"
                    : "linear-gradient(to bottom, transparent 5%, black 100%)",
                }}
              >
                <img
                  src="https://media.nngroup.com/nng-uxc-badge.png"
                  alt="NN/g UX Certification Badge"
                  className="h-[250px] sm:h-[400px] md:h-[550px] lg:h-[700px] w-auto drop-shadow-2xl opacity-100 grayscale"
                />
              </motion.div>

              <div className="relative z-10 w-full flex flex-col">
                {/* EYEBROW BLOCK AT THE TOP */}
                <div className="w-full relative mt-4 mb-6">
                  <div
                    className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none`}
                  >
                    <div className="w-2 h-2 bg-(--highlight)" />
                    CERTIFICATION
                  </div>
                  <div
                    className="w-full border-t-[3px] border-dotted border-zinc-900/10"
                  />
                </div>

                {/* HEADINGS */}
                <div className="mb-4 sm:mb-8">
                  <h4
                    className={`
                    ${playfair.className}
                    text-left text-4xl font-medium text-zinc-900 leading-[1.05] mb-1 sm:text-center sm:text-4xl sm:leading-tight sm:mb-4 lg:text-6xl
                  `}
                  >
                    Certified in UX research through
                  </h4>
                  <p
                    className={`
                    ${dmSans.className}
                    text-left mt-0 mb-0 text-4xl sm:text-5xl lg:text-6xl font-normal text-zinc-800 italic leading-[1.05]
                  `}
                  >
                    Nielsen Norman Group
                  </p>
                </div>

                {/* BOTTOM SECTION - Paragraph on Right */}
                <div className="flex justify-end pt-0 pr-0 sm:pr-20 lg:pr-32">
                  <div className="w-full max-w-none sm:max-w-md">
                    <p
                      className={`
                      ${dmSans.className}
                      text-left text-lg sm:text-xl leading-[1.5] text-zinc-800
                      `}
                    >
                      I completed{" "}
                      <ScrollHighlightText
                        text="30+ hours of advanced UX training"
                        className="whitespace-nowrap"
                      />
                      {", including a focused research specialty track."}
                      <br /><br />
                      The training emphasized connecting research rigor to real product decisions, reinforcing how analytics, qualitative insight, and operational structure work together to support scalable UX.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Excellence Recognition Card - REVERSED */}
        <div className="relative z-10 left-1/2 right-1/2 -mx-[50vw] mt-28 w-screen px-4 sm:static sm:left-auto sm:right-auto sm:mx-auto sm:w-auto sm:max-w-[1500px] sm:px-6">
          <div
            className="relative overflow-visible mx-auto mb-6 w-full p-0"
          >
            <div className="flex flex-col items-center gap-10 pb-4 sm:pb-16 md:gap-14">
              <div className="relative z-10 w-full flex flex-col">
                {/* EYEBROW BLOCK AT THE TOP - Mirrored to Right */}
                <div className="w-full relative mt-4 mb-6">
                  <div
                    className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none`}
                  >
                    <div className="w-2 h-2 bg-(--highlight)" />
                    RECOGNITION & AWARDS
                  </div>
                  <div
                    className="w-full border-t-[3px] border-dotted border-zinc-900/10"
                  />
                </div>

                {/* HEADINGS - Back to Right Aligned */}
                <div className="mb-8">
                  <h4
                    className={`
                    ${playfair.className}
                    not-italic text-left text-4xl font-medium text-zinc-900 leading-[1.05] mb-1 sm:text-right sm:text-4xl sm:leading-tight sm:mb-4 lg:text-6xl
                  `}
                  >
                    Recognized for excellence by
                  </h4>
                  <p
                    className={`
                    ${dmSans.className}
                    not-italic text-left text-4xl font-normal text-zinc-800 leading-[1.05] sm:text-right sm:text-4xl sm:leading-tight lg:text-6xl
                  `}
                  >
                    national and institutional award committees
                  </p>
                </div>

                <div className="flex flex-col items-start gap-0 pt-0 sm:gap-8 lg:flex-row lg:justify-between lg:gap-12">
                  {/* LEFT SIDE: CONSOLIDATED PARAGRAPH (Aligned with Eyebrow) */}
                  <div className="order-2 -mt-32 flex w-full flex-col pl-0 sm:mt-0 sm:pl-20 lg:pl-32 lg:order-1">
                    <div className="w-full max-w-none sm:max-w-md">
                      <p className={`${dmSans.className} text-lg sm:text-xl leading-[1.5] text-zinc-800`}>
                        Work I contributed to has received national recognition for{" "}
                        <ScrollHighlightText text="excellence in digital experience and design" />
                        {". My work has included leading information architecture, conducting user interviews, shaping user tested navigation, and serving as Lead UX Designer on the redesign of a large scale public health archive, improving accessibility, search performance, and usability across millions of documents."}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT SIDE: LOGOS SIDE-BY-SIDE ON THE EDGE */}
                  <div className="order-1 flex flex-row items-start gap-8 sm:gap-12 lg:order-2">
                    <a
                      href="https://www.case.org/awards/circle-excellence/2022/ucsf-magazine-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-105"
                    >
                      <img
                        src="/case.png"
                        alt="CASE Gold Circle of Excellence Award Announcement"
                        className="h-72 sm:h-80 w-auto object-contain object-top"
                      />
                    </a>
                    <a
                      href="https://uctechnews.ucop.edu/news-the-industry-documents-library-team-wins-the-silver-design-award-at-the-2025-uc-tech-awards/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-105"
                    >
                      <img
                        src="/uc-tech.png"
                        alt="UC Tech Silver Design Award Announcement"
                        className="h-72 sm:h-80 w-auto object-contain object-top"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
