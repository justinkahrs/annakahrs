"use client";

import { useEffect, useState } from "react";
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const value = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(value);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                mt-3 text-5xl sm:text-6xl font-semibold tracking-tight
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
                mt-4 text-xs sm:text-sm uppercase tracking-[0.24em]
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
                <span className="font-semibold">UX Research specialty</span>.
                My work focuses on grounding decisions in real user needs
                through interviews, usability testing, content analysis, and
                evidence-driven design.
              </p>
            </div>
          </div>

          {/* SKILLS GRID */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {SKILL_SECTIONS.map((section) => (
                <div
                  key={section.title}
                  className={`
                    relative flex h-full flex-col items-center text-center
                    rounded-[2rem] bg-white
                    border-1 border-[var(--highlight)]/80
                    px-6 py-7 sm:px-7 sm:py-8
                    shadow-sm
                  `}
                >
                  <h3
                    className={`
                      ${playfair.className}
                      text-lg sm:text-xl font-semibold tracking-tight
                      text-[var(--highlight)]
                    `}
                  >
                    {section.title}
                  </h3>

                  <div className="mt-3 h-[2px] w-10 bg-[var(--highlight)]/60" />

                  <ul
                    className={`
                      ${dmSans.className}
                      mt-4 flex flex-col items-center gap-2.5
                      text-sm sm:text-base text-[var(--primary)]/85
                    `}
                  >
                    {section.items.map((item) => (
                      <li key={item} className="leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* MARQUEE — Tools */}
          <div className="mx-auto mt-6 mb-40 max-w-4xl">
            <div
              className={`
                relative overflow-hidden rounded-[2rem]
                bg-white
                border-1 border-[var(--highlight)]/80
                px-6 py-10 shadow-sm
              `}
            >
              <div className="relative flex flex-col items-center text-center">
                <h3
                  className={`
                    ${playfair.className}
                    text-lg sm:text-xl font-semibold tracking-tight
                    text-[var(--highlight)]
                  `}
                >
                  Tools I Use
                </h3>
                <div className="mt-3 h-[2px] w-10 bg-[var(--highlight)]/60" />

                <div className="mt-6 w-full">
                  <TechMarquee
                    logos={[
                      "adobe",
                      "canva",
                      "chat-gpt",
                      "figma",
                      "github",
                      "jira",
                      "loom",
                      "miro",
                      "optimalworkshop",
                      "qualtrics",
                      "siteimprove",
                      "slack",
                      "zendesk",
                      "zoom",
                    ]}
                    speedSeconds={18}
                    size={80}
                  />
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