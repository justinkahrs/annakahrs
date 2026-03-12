"use client";

import { motion } from "motion/react";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Quote from "./Quote";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function Experience() {
  const jobs = [
    {
      role: "Lead UX Designer",
      company: "University of California, San Francisco (UCSF)",
      period: "December 2023 - Present",
      link: "https://www.ucsf.edu",
      location: "San Francisco, CA (Remote)",
      description: "Top-ranked public health sciences university specializing in biomedical research, education, and clinical care.",
      details: [
        "Lead design system–level work for the enterprise Drupal platform, defining reusable patterns and standards across multiple sites.",
        "Guide information architecture strategy through content audits, user needs analysis, and collaborative working sessions with clients.",
        "Plan and run usability tests, card sorting studies, and user interviews that reveal patterns and inform design choices.",
        "Design low and mid-fidelity wireframes and iterate based on qualitative and quantitative feedback.",
      ],
    },
    {
      role: "Service Designer",
      company: "University of California, San Francisco (UCSF)",
      period: "October 2018 - December 2023",
      link: "https://www.ucsf.edu",
      location: "San Francisco, CA (Remote)",
      details: [
        "Supported digital and instructional teams by conducting user research to uncover needs of students and faculty.",
        "Created wireframes, interface concepts, and visual design assets for web and instructional materials.",
        "Help clarify user needs and pain points through interviews and observations, informing service improvements.",
        "Provided user-centered evidence that shaped team conversations and strategic priorities.",
      ],
    },
    {
      role: "Information Architect UX Intern",
      company: "IU Studios – University Communications and Marketing",
      period: "August 2017 - March 2018",
      link: "https://iu.edu",
      location: "Bloomington, IN",
      description: "Media production studio supporting Indiana University’s teaching, research, and communications through video and digital storytelling.",
      details: [
        "Worked on information architecture for large university sites, shaping navigation and content structure.",
        "Supported workshops, stakeholder sessions, and user research that informed project direction.",
        "Built and refined site content using Cascade CMS, turning UX and IA decisions into production-ready pages.",
      ],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-[60px] w-full bg-[var(--background)] pb-40">
      <div className="relative mx-auto w-full max-w-[1500px] px-4 sm:px-6">
        {/* MAIN EXPERIENCE CARD */}
        <div className="relative -mt-6 mx-auto mb-0 w-full overflow-hidden rounded-3xl bg-stone-900/5 p-6 pb-0 sm:mt-0 sm:p-8 sm:pb-16 md:p-10 md:pb-20 lg:p-12 lg:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(39,39,42,0.18) 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
          />

          <div className="relative z-10 pb-24 sm:pb-16">
            {/* HEADER */}
            <div className="mb-24 flex flex-col w-full">
              {/* TOP EYEBROW - MATCHES SKILLS.TSX */}
              <div className="w-full relative mt-4 mb-6">
                <div
                  className={`${dmSans.className} absolute left-0 bottom-[12px] flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none`}
                >
                  <div className="w-2 h-2 bg-(--highlight)" />
                  EXPERIENCE
                </div>
                <div
                  className="w-full border-t-[3px] border-dotted border-zinc-900/10"
                />
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6 }}
                className={` ${playfair.className}
                  text-left text-4xl font-medium
                  text-zinc-900 leading-[1.05] mb-1 sm:text-4xl sm:leading-tight sm:mb-4 lg:text-6xl`}
              >
                Shaped through years of
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className={` ${dmSans.className}
                  text-left text-4xl font-normal
                  sm:text-center sm:text-5xl lg:text-6xl
                  tracking-tight leading-[1.05] text-zinc-800 italic sm:leading-tight `}
              >
                research, design, and practice
              </motion.h3>
            </div>

            {/* JOBS LIST */}
            <div className="space-y-24 sm:space-y-32">
              {jobs.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative"
                >
                  {/* CONTENT GRID */}
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
                    {/* LEFT: Role & Location */}
                    <div className="w-full lg:max-w-md shrink-0">
                      <div className={`${dmSans.className} flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none mb-3`}>
                        {job.period}
                      </div>
                      <h4 className={`${playfair.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-zinc-900 leading-tight mb-2`}>
                        {job.role}
                      </h4>
                      <div className={`${dmSans.className} text-lg sm:text-xl font-medium text-zinc-800 mb-3`}>
                        {job.company}
                      </div>
                      <p className={`${dmSans.className} text-zinc-500 uppercase tracking-[0.15em] text-xs sm:text-sm`}>
                        {job.location}
                      </p>
                      {job.description && (
                        <p className={`${dmSans.className} mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed lg:max-w-sm`}>
                          {job.description}
                        </p>
                      )}
                    </div>

                    {/* RIGHT: Details (Wider, no card color) */}
                    <div className="relative w-full grow">
                      <div className="px-0 py-6 sm:px-10">
                        <ul className={`${dmSans.className} space-y-4`}>
                          {job.details.map((detail, idx) => (
                            <li key={idx} className="flex gap-4 text-lg sm:text-xl leading-relaxed text-zinc-700">
                              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900/10" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Quote />
    </section>
  );
}

export default Experience;
