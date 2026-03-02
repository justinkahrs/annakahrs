"use client";

import { motion } from "motion/react";
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
    ],
  },
  {
    title: "Relevant Tools",
    items: ["Figma", "ChatGPT", "Adobe CC", "Zoom", "CSS", "Qualtrics"],
  },
];

function Skills() {
  const skillCards = SKILL_SECTIONS.filter(
    (section) => section.title !== "Relevant Tools",
  );
  const hrLineStyle = { borderColor: "rgba(0, 0, 0, 0.05)" };

  return (
    <section className="scroll-mt-28">
      <style>
        {`
          @keyframes subtle-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animated-gradient-card {
            background: linear-gradient(-45deg, #bbf7d0, #fef08a, #86efac, #fde68a, #4ade80, #fcd34d);
            background-size: 400% 400%;
            animation: subtle-gradient 15s ease infinite;
          }
        `}
      </style>
      <div
        id="skills"
        className="
          relative right-1/2 left-1/2 -mx-[50vw]
          w-screen bg-[#f4f3ec]
          px-6 pt-32 pb-0 sm:px-12 sm:pt-40 sm:pb-0
          overflow-hidden
        "
      >
        {/* MAIN CONTENT */}
        <div className="relative z-10 mx-auto max-w-[1500px] px-6">
          {/* EYEBROW BLOCK */}
          <div
            className={`${dmSans.className} flex items-center gap-2 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-zinc-600/60 pointer-events-none select-none pl-10 sm:pl-20 lg:pl-32 mb-6`}
          >
            <div className="w-2 h-2 bg-[#ff4500]" />
            FOCUS
          </div>

          {/* NEW STRATEGIC STATEMENT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`
              ${dmSans.className}
              mb-24 text-4xl sm:text-5xl lg:text-5xl text-zinc-900 leading-[1.2]
              pl-10 sm:pl-20 lg:pl-32 max-w-5xl
            `}
          >
            <span className="block mb-8 font-medium">
              When workflows sprawl, navigation tangles, and platforms quietly compete with themselves, something feels <span className="italic">off</span>. That’s where I start paying attention.
            </span>
            <span className="block text-zinc-700 font-normal">
              I’m a UX designer and systems-focused thinker who listens closely, studies patterns, and helps teams untangle complexity. My work is about turning friction into clarity and helping digital spaces feel simpler, steadier, and easier to navigate.
            </span>
          </motion.p>
        </div>

        {/* SKILL CARDS */}
        <div className="mx-auto mt-0 mb-20 max-w-[1500px] px-6">
          <div className="animated-gradient-card rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-20 flex flex-col items-end gap-12">
            {skillCards.map((section) => (
              <article
                key={section.title}
                className="bg-[#f4f3ec]/30 backdrop-blur-sm flex min-h-[320px] w-full max-w-4xl flex-col rounded-3xl px-7 py-8 sm:px-10 sm:py-12 border border-white/20"
              >
                <div className="w-full relative mb-6">
                  <h3
                    className={`
                      ${dmSans.className}
                      absolute left-0 bottom-[12px] flex items-center gap-2 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-zinc-600/60 pointer-events-none select-none
                    `}
                  >
                    <div className="w-2 h-2 bg-[#ff4500]" />
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
                        text-2xl sm:text-3xl leading-relaxed text-zinc-700
                      `}
                  >
                    {section.items.join(" • ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* TOOL SECTION HEADING */}
        <div className="relative z-10 mx-auto max-w-[1500px] px-6 mt-48 mb-16">
          <div className="w-full relative mb-6">
            <div
              className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-zinc-600/60 pointer-events-none select-none`}
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
                        text-left text-lg sm:text-xl leading-relaxed text-zinc-800
                      `}
                >
                  A curated set of research, design, prototyping, and collaboration tools that support evidence-driven decisions and scalable digital systems.
                </p>
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
        <div className="relative z-10 mx-auto max-w-[1500px] px-6 mt-32">
          <div
            className="relative overflow-hidden mx-auto mb-6 w-full rounded-3xl bg-stone-900/5 p-6 pb-0 sm:p-8 sm:pb-0 md:p-10 md:pb-0 lg:p-12 lg:pb-0"
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="relative z-10 w-full flex flex-col"
              >
                {/* EYEBROW BLOCK AT THE TOP */}
                <div className="w-full relative mt-4 mb-6">
                  <div
                    className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-zinc-600/60 pointer-events-none select-none`}
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
                    I earned UX research certification                 </h4>
                  <p
                    className={`
                    ${dmSans.className}
                    text-left mb-4 text-4xl sm:text-5xl lg:text-6xl font-normal text-zinc-800 italic
                  `}
                  >
                    through Nielsen Norman Group
                  </p>
                </div>

                {/* BOTTOM SECTION - Paragraph on Right */}
                <div className="flex justify-end pt-0 pr-10 sm:pr-20 lg:pr-32">
                  <div className="max-w-md">
                    <p
                      className={`
                      ${dmSans.className}
                      text-left text-lg sm:text-xl leading-relaxed text-zinc-800
                    `}
                    >
                      I completed 30+ hours of advanced UX training, including a focused research specialty track and passing all associated exams. This coursework strengthened and formalized my research practice, expanding both methodological depth and strategic thinking.
                      <br /><br />
                      The training emphasized connecting research rigor to real product decisions, reinforcing how analytics, qualitative insight, and operational structure work together to support scalable UX.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
