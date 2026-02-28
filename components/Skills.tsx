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
    ],
  },
  {
    title: "Frameworks & Methods",
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

  return (
    <section className="scroll-mt-28">
      <div
        id="skills"
        className="
          relative right-1/2 left-1/2 -mx-[50vw]
          w-screen bg-white
          px-6 pt-32 pb-0 sm:px-12 sm:pt-40 sm:pb-0
          overflow-hidden
        "
      >
        {/* SUBTLE BOTTOM GRADIENT */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(
                circle at 0% 100%,
                rgba(26, 8, 164, 0.24),
                transparent 60%
              )
            `,
          }}
        />

        {/* MAIN CONTENT */}
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* HEADER BLOCK */}
          <div className="mb-20 flex flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className={`
                ${playfair.className}
                mt-3 text-6xl sm:text-8xl font-semibold tracking-tight
                text-[var(--highlight)]
              `}
            >
              Skills
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className={`
                ${dmSans.className}
                mt-4 text-lg sm:text-2xl uppercase tracking-[0.24em]
                text-zinc-500
              `}
            >
              &amp; Tools
            </motion.h3>
          </div>

          {/* NN/g Certification */}
          <div className="mx-auto mb-20 max-w-4xl">
            <div className="flex flex-col items-center text-center gap-6">
              <img
                src="https://media.nngroup.com/nng-uxc-badge.png"
                alt="NN/g UX Certification Badge"
                className="h-28 sm:h-32 w-auto"
              />
              <p
                className={`
                  ${dmSans.className}
                  text-base sm:text-lg leading-relaxed text-zinc-600 max-w-xl
                `}
              >
                I&apos;m NN/g certified with a{" "}
                <span className="font-semibold">UX Research specialty</span>. My
                work focuses on grounding decisions in real user needs through
                interviews, usability testing, content analysis, and
                evidence-driven design.
              </p>
            </div>
          </div>

          {/* SKILL CARDS */}
          <div className="mx-auto mt-10 mb-40 max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skillCards.map((section) => (
                <article
                  key={section.title}
                  className="flex min-h-[320px] flex-col border border-zinc-300 bg-transparent px-7 py-8 sm:px-8 sm:py-9"
                >
                  <h3
                    className={`
                      ${dmSans.className}
                      text-3xl font-semibold tracking-tight text-zinc-900
                    `}
                  >
                    {section.title}
                  </h3>

                  <div className="mt-7 border-t border-dotted border-zinc-300" />

                  <div className="mt-auto pt-16">
                    <p
                      className={`
                        ${dmSans.className}
                        text-lg leading-relaxed text-zinc-700
                      `}
                    >
                      {section.items.join(" • ")}
                    </p>
                  </div>
                </article>
              ))}
              </div>
            </div>
          </div>

          {/* MARQUEE — Tools */}
          <div className="mt-12">
            <div className="relative left-1/2 right-1/2 -mx-[50vw] mt-6 w-screen border-y border-[var(--highlight)]/45">
              <div className="relative z-10">
                <TechMarquee
                  logos={[
                    "adobe",
                    "chat-gpt",
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
