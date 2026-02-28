"use client";

import { motion } from "motion/react";
import TechMarquee from "./TechMarquee";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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

          {/* NN/g Certification */}
          <div className="mx-auto mb-20 max-w-4xl">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex justify-center md:justify-start md:w-auto"
              >
                <img
                  src="https://media.nngroup.com/nng-uxc-badge.png"
                  alt="NN/g UX Certification Badge"
                  className="h-36 sm:h-44 w-auto"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
                className={`
                  ${dmSans.className}
                  text-xl sm:text-2xl leading-relaxed text-zinc-600
                  text-left md:flex-1
                `}
              >
                I&apos;m NN/g certified with a{" "}
                <span className="font-semibold">UX Research specialty</span>. My
                work focuses on grounding decisions in real user needs through
                interviews, usability testing, content analysis, and
                evidence-driven design.
              </motion.p>
            </div>
          </div>

          {/* SKILL CARDS */}
          <div className="mx-auto mt-10 mb-0 max-w-6xl">
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

              <h3
                className={`
                  ${playfair.className}
                  mt-48 mb-32 text-center text-4xl sm:text-5xl tracking-tight text-[var(--color-zinc-900)]
                `}
              >
                Research, design, and delivery powered by
              </h3>
            </div>
          </div>

          {/* MARQUEE — Tools */}
          <div className="mt-0 mb-12">
            <div
              className="relative left-1/2 right-1/2 -mx-[50vw] mt-0 w-screen border-y"
              style={hrLineStyle}
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
      </div>
    </section>
  );
}

export default Skills;
