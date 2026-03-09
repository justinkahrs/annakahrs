"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import TechMarquee from "./TechMarquee";
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

function Skills() {
  const skillCards = SKILL_SECTIONS.filter(
    (section) => section.title !== "Relevant Tools",
  );
  const hrLineStyle = { borderColor: "rgba(0, 0, 0, 0.05)" };

  const statementRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ["start 0.55", "start 0.1"],
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
          w-screen bg-[#f1edff]
          px-6 pt-28 pb-24 sm:px-12 sm:pt-44 sm:pb-28
          overflow-hidden
        "
      >
        {/* MAIN CONTENT */}
        <div className="relative z-10 mx-auto max-w-[1500px] px-6">
          {/* EYEBROW BLOCK */}
          <div
            className={`${dmSans.className} flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none pl-10 sm:pl-20 lg:pl-32 mb-6`}
          >
            <div className="w-2 h-2 bg-[#ff4500]" />
            FOCUS
          </div>

          {/* NEW STRATEGIC STATEMENT */}
          <div
            ref={statementRef}
            className={`
              ${dmSans.className}
              mb-28 sm:mb-44 text-4xl sm:text-5xl lg:text-5xl text-zinc-900 leading-[1.2]
              pl-10 sm:pl-20 lg:pl-32 max-w-5xl
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

        {/* SKILL CARDS */}
        <div className="mx-auto mt-0 mb-28 max-w-[1500px] px-6">
          <div className="relative rounded-3xl overflow-hidden p-2 sm:p-4 lg:p-6 flex flex-col items-end gap-4 sm:gap-8 bg-[#ebe3f7]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(95%_62%_at_18%_8%,rgba(184,255,232,0.22),rgba(184,255,232,0.06)_42%,transparent_66%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(88%_56%_at_84%_96%,rgba(255,97,66,0.20),rgba(255,97,66,0.07)_36%,rgba(170,145,245,0.14)_58%,rgba(235,227,247,0.96)_82%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(128deg,rgba(181,156,255,0.20)_0%,transparent_26%,transparent_72%,rgba(176,255,229,0.16)_100%)]" />
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
            <div className="absolute top-2 left-4 sm:top-4 sm:left-6 lg:top-5 lg:left-7 z-0 pointer-events-none">
              <h2
                className={`
                  ${dmSans.className}
                  text-2xl sm:text-4xl lg:text-6xl text-zinc-900 leading-none tracking-tighter
                `}
              >
                Where insight
              </h2>
            </div>

            {skillCards.map((section) => (
              <article
                key={section.title}
                className="bg-[#f1edff]/30 backdrop-blur-sm flex min-h-[320px] w-full md:w-2/3 lg:w-1/2 flex-col rounded-3xl px-7 py-8 sm:px-10 sm:py-12 border border-white/20 relative z-10"
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
            <div className="absolute bottom-2 left-4 sm:bottom-4 sm:left-6 lg:bottom-5 lg:left-7 z-0 pointer-events-none">
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
        <div className="relative z-10 mx-auto max-w-[1500px] px-6 mt-28 mb-8">
          <div className="w-full relative mb-6">
            <div
              className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none`}
            >
              <div className="w-2 h-2 bg-[#ff4500]" />
              TECHNOLOGY
            </div>
            <div
              className="w-full border-t-[3px] border-dotted border-zinc-900/10"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4 mb-8">
            <div className="flex flex-col pl-10 sm:pl-20 lg:pl-32">
              <h4
                className={`
                      ${playfair.className}
                      text-left text-2xl sm:text-4xl lg:text-6xl font-medium text-zinc-900 leading-tight mb-4
                    `}
              >
                Powered by
              </h4>
              <div className="max-w-md">
                <p
                  className={`
                        ${dmSans.className}
                        text-left text-lg sm:text-xl leading-[1.5] text-zinc-800
                      `}
                >
                  A curated set of research, design, prototyping, and collaboration tools that support evidence-driven decisions and scalable digital systems.
                </p>

                <div
                  className={`${dmSans.className} mt-12 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none`}
                >
                  SELECTED TOOLS
                </div>
              </div>
            </div>
            <p
              className={`
                    ${dmSans.className}
                    text-left text-4xl sm:text-5xl lg:text-6xl font-normal text-zinc-800 italic mt-8 sm:mt-0
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
                size={108}
              />
            </div>
          </div>
        </div>

        {/* NN/g Certification Card */}
        <div className="relative z-10 mx-auto max-w-[1500px] px-6 mt-0">
          <div
            className="relative overflow-hidden mx-auto mb-0 w-full rounded-3xl bg-stone-900/5 p-6 pb-0 sm:p-8 sm:pb-0 md:p-10 md:pb-0 lg:p-12 lg:pb-0"
          >
            <div className="flex flex-col items-center gap-10 md:gap-14 pb-16">
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: -15 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute left-[10px] bottom-[-90px] z-0 sm:left-[-10px] sm:bottom-[-130px] lg:left-[-30px] lg:bottom-[-170px]"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 5%, black 100%)",
                  maskImage:
                    "linear-gradient(to bottom, transparent 5%, black 100%)",
                }}
              >
                <img
                  src="https://media.nngroup.com/nng-uxc-badge.png"
                  alt="NN/g UX Certification Badge"
                  className="h-[250px] sm:h-[400px] md:h-[550px] lg:h-[700px] w-auto drop-shadow-2xl opacity-100"
                />
              </motion.div>

              <div className="relative z-10 w-full flex flex-col">
                {/* EYEBROW BLOCK AT THE TOP */}
                <div className="w-full relative mt-4 mb-6">
                  <div
                    className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none`}
                  >
                    <div className="w-2 h-2 bg-[#ff4500]" />
                    CERTIFICATION
                  </div>
                  <div
                    className="w-full border-t-[3px] border-dotted border-zinc-900/10"
                  />
                </div>

                {/* HEADINGS */}
                <div className="mb-8">
                  <h4
                    className={`
                    ${playfair.className}
                    text-center text-2xl sm:text-4xl lg:text-6xl font-medium text-zinc-900 leading-tight mb-4
                  `}
                  >
                    Certified in UX research through
                  </h4>
                  <p
                    className={`
                    ${dmSans.className}
                    text-left mb-4 text-4xl sm:text-5xl lg:text-6xl font-normal text-zinc-800 italic
                  `}
                  >
                    Nielsen Norman Group
                  </p>
                </div>

                {/* BOTTOM SECTION - Paragraph on Right */}
                <div className="flex justify-end pt-0 pr-10 sm:pr-20 lg:pr-32">
                  <div className="max-w-md">
                    <p
                      className={`
                      ${dmSans.className}
                      text-left text-lg sm:text-xl leading-[1.5] text-zinc-800
                    `}
                    >
                      I completed 30+ hours of advanced UX training, including a focused research specialty track.
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
        <div className="relative z-10 mx-auto max-w-[1500px] px-6 mt-28">
          <div
            className="relative overflow-visible mx-auto mb-6 w-full p-0"
          >
            <div className="flex flex-col items-center gap-10 md:gap-14 pb-16">
              <div className="relative z-10 w-full flex flex-col">
                {/* EYEBROW BLOCK AT THE TOP - Mirrored to Right */}
                <div className="w-full relative mt-4 mb-6">
                  <div
                    className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none`}
                  >
                    <div className="w-2 h-2 bg-[#ff4500]" />
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
                    not-italic text-right text-2xl sm:text-4xl lg:text-6xl font-medium text-zinc-900 leading-tight mb-4
                  `}
                  >
                    Recognized for excellence by
                  </h4>
                  <p
                    className={`
                    ${dmSans.className}
                    not-italic text-right text-2xl sm:text-4xl lg:text-6xl font-normal text-zinc-800 leading-tight
                  `}
                  >
                    national and institutional award committees
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pt-0">
                  {/* LEFT SIDE: CONSOLIDATED PARAGRAPH (Aligned with Eyebrow) */}
                  <div className="flex flex-col pl-10 sm:pl-20 lg:pl-32 w-full order-2 lg:order-1">
                    <div className="max-w-md">
                      <p className={`${dmSans.className} text-lg sm:text-xl leading-[1.5] text-zinc-800`}>
                        Work I contributed to has received national recognition for excellence in digital experience and design. My work has included leading information architecture, conducting user interviews, shaping user tested navigation, and serving as Lead UX Designer on the redesign of a large scale public health archive, improving accessibility, search performance, and usability across millions of documents.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT SIDE: LOGOS SIDE-BY-SIDE ON THE EDGE */}
                  <div className="flex flex-row gap-8 sm:gap-12 items-start order-1 lg:order-2">
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
                      href="#"
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
