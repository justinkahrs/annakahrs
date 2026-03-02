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
  const hrLineStyle = { borderColor: "rgba(0, 0, 0, 0.1)" };

  return (
    <section className="scroll-mt-28">
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
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* HEADER BLOCK */}
          <div className="mb-20 flex flex-col items-start text-left">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className={`
                ${playfair.className}
                mt-3 text-7xl sm:text-9xl font-semibold tracking-tight leading-[0.9]
                text-[var(--color-zinc-900)]
              `}
            >
              Craft
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className={`
                ${playfair.className}
                mt-1 text-2xl sm:text-4xl tracking-[0.04em] leading-none
                text-[var(--color-zinc-900)]
              `}
            >
              &amp; Stack
            </motion.h3>
          </div>
        </div>

        {/* SKILL CARDS */}
        <div className="mx-auto mt-0 mb-20 max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skillCards.map((section) => (
              <article
                key={section.title}
                className="flex min-h-[320px] flex-col rounded-2xl border bg-transparent px-7 py-8 sm:px-8 sm:py-9"
                style={hrLineStyle}
              >
                <h3
                  className={`
                        ${dmSans.className}
                      text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-zinc-900)]
                      `}
                >
                  {section.title}
                </h3>

                <div
                  className="mt-12 border-t-[3px] border-dotted"
                  style={hrLineStyle}
                />

                <div className="mt-auto pt-24">
                  <p
                    className={`
                        ${dmSans.className}
                        text-xl sm:text-2xl leading-relaxed text-zinc-700
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
              className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600/60 pointer-events-none select-none`}
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
                        text-left text-base sm:text-lg leading-relaxed text-zinc-800
                      `}
                >
                  A curated set of research, design, prototyping, and collaboration tools that support evidence-driven decisions and scalable digital systems.
                </p>
              </div>
            </div>
            <p
              className={`
                    ${dmSans.className}
                    text-left text-3xl sm:text-4xl lg:text-5xl font-normal text-zinc-800 italic mt-8 sm:mt-0
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
            className="relative overflow-hidden mx-auto mb-6 w-full rounded-3xl bg-stone-900/[0.05] p-6 pb-0 sm:p-8 sm:pb-0 md:p-10 md:pb-0 lg:p-12 lg:pb-0"
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
                    className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600/60 pointer-events-none select-none`}
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
                    text-left mb-4 text-3xl sm:text-4xl lg:text-5xl font-normal text-zinc-800 italic
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
                      text-left text-base sm:text-lg leading-relaxed text-zinc-800
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
