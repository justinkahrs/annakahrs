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
      blurb: null,
      details: [
        "Lead design system–level work for the enterprise Drupal platform, defining reusable patterns and standards across multiple sites.",
        "Guide information architecture strategy through content audits, user needs analysis, and collaborative working sessions with clients, shaping structures that stay aligned across platforms.",
        "Plan and run usability tests, card sorting studies, and user interviews that reveal patterns, validate design choices, and inform IA and content decisions.",
        "Design low and mid-fidelity wireframes and iterate based on qualitative and quantitative feedback while maintaining WCAG 2.1 accessibility requirements.",
      ],
    },
    {
      role: "Service Designer",
      company: "University of California, San Francisco (UCSF)",
      period: "October 2018 - December 2023",
      blurb:
        "Collaborated with stakeholders to define goals, shape service concepts, and align on user needs. Led user research, created workflows and prototypes, facilitated workshops, and partnered with development and content teams to deliver scalable digital services.",
      link: "https://www.ucsf.edu",
      location: "San Francisco, CA (Remote)",
      details: null,
    },
    {
      role: "Information Architect UX Intern",
      company: "IU Studios – University Communications and Marketing",
      period: "August 2017 - March 2018",
      blurb:
        "Supported UX and IA efforts through interviews, analysis, synthesis, wireframes, prototypes, usability testing, and documentation. Helped refine UI assets and interface patterns.",
      link: "https://iu.edu",
      location: "Bloomington, IN",
      details: null,
    },
  ];

  return (
    <section className="w-full">
      <div
        id="experience"
        
        className="
          relative right-1/2 left-1/2 -mx-[50vw]
          w-screen bg-white/5
          border-y border-white/10
          py-32 sm:py-40
        "
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-12">
          {/* HEADER — Professional ABOVE Experience */}
          <div className="flex flex-col items-center text-center w-full">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className={`
                ${dmSans.className}
                mt-0 text-xs sm:text-sm uppercase tracking-[0.24em]
                text-[var(--foreground)]/70
              `}
            >
              Professional
            </motion.h3>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className={`
                ${playfair.className}
                mt-3 text-5xl sm:text-6xl font-semibold tracking-tight
                text-[var(--highlight)]
              `}
            >
              Experience
            </motion.h2>
          </div>

          {/* DOWNLOAD BUTTON */}
          <div className="mt-10 flex justify-center">
            <a
              href="/Anna_Kahrs_resume.pdf"
              download
              className={`
                ${dmSans.className}
                inline-flex items-center justify-center gap-3
                whitespace-nowrap
                rounded-full bg-[var(--primary)] px-8 py-3
                text-sm font-semibold uppercase tracking-wide text-white
                shadow-sm transition
                hover:bg-[var(--primary-hover)] hover:shadow-md
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[var(--primary)]/40
                focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]
                cursor-pointer
              `}
            >
              {/* original resume icon, forced white */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 500"
                className="h-4 w-4 shrink-0"
                fill="white"
                stroke="white"
              >
                <g>
                  <path d="M358.8,272.2v70.3c0,1.4-0.2,2.7-0.5,3.9v0c0,0,0,0,0,0c-1.4,6.9-7.5,12.1-14.7,12.1H56.3c-7.7,0-14.1-5.9-14.9-13.4c-0.2-0.9-0.2-1.7-0.2-2.7v-70.3c0-8.3,6.8-15,15-15c4.1,0,7.9,1.7,10.6,4.4c2.7,2.7,4.4,6.5,4.4,10.6v56.3h257.7v-56.3c0-8.3,6.8-15,15-15c4.1,0,7.9,1.7,10.6,4.4C357.1,264.3,358.8,268.1,358.8,272.2z" />
                  <path d="M286.5,201.8l-73.7,73.7c-0.1,0.2-0.3,0.3-0.4,0.4c-2.7,2.7-6.2,4.4-9.7,4.9c-0.3,0-0.6,0.1-0.9,0.1c-0.6,0.1-1.2,0.1-1.8,0.1h0l-1.7-0.1c-0.3,0-0.6-0.1-0.9-0.1c-3.6-0.5-7-2.2-9.7-4.9c-0.1-0.1-0.3-0.3-0.4-0.4l-73.7-73.7c-3.4-3.4-5.1-7.9-5.1-12.4c0-4.5,1.7-9,5.1-12.4c6.8-6.8,17.9-6.8,24.8,0l44.3,44.3V59c0-9.6,7.9-17.5,17.5-17.5c4.8,0,9.2,2,12.4,5.1c3.2,3.2,5.1,7.5,5.1,12.4v162.3l44.3-44.3c6.8-6.8,17.9-6.8,24.8,0C293.3,183.9,293.3,195,286.5,201.8z" />
                </g>
              </svg>

              <span>Download Resume (PDF)</span>
            </a>
          </div>

          {/* TIMELINE */}
          <div className="relative mt-16 ml-6 mb-40">
            {/* vertical spine */}
            <div className="pointer-events-none absolute left-[12px] top-0 bottom-0 w-[2px] bg-[var(--foreground)]/25" />

            <ul className="space-y-16">
              {jobs.map((job, i) => (
                <li key={i} className="relative">
                  {/* circle marker */}
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--highlight)] text-white shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 5V4a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1h3a2 2 0 0 1 2 2v4h-2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6H3V7a2 2 0 0 1 2-2h3Zm2 0h4V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  {/* content */}
                  <div className="ml-10">
                    <p
                      className={`${dmSans.className} text-xs sm:text-sm text-[var(--foreground)]/70`}
                    >
                      {job.period}
                    </p>

                    <h3
                      className={`
                        ${playfair.className}
                        mt-1 text-xl sm:text-2xl font-semibold
                        text-white
                      `}
                    >
                      {job.role}
                    </h3>

                    <p
                      className={`
                        ${dmSans.className}
                        mt-1 text-sm sm:text-base text-zinc-200
                      `}
                    >
                      <span className="text-zinc-200">at </span>
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[var(--highlight)] hover:underline"
                      >
                        {job.company}
                      </a>
                    </p>

                    <p
                      className={`
                        ${dmSans.className}
                        mt-1 text-xs sm:text-sm uppercase tracking-[0.14em]
                        text-zinc-200
                      `}
                    >
                      {job.location}
                    </p>

                    {/* optional paragraph blurb */}
                    {job.blurb && (
                      <p
                        className={`
                          ${dmSans.className}
                          mt-4 text-sm sm:text-base
                          leading-relaxed text-zinc-200
                        `}
                      >
                        {job.blurb}
                      </p>
                    )}

                    {/* optional bullet list */}
                    {job.details && (
                      <ul
                        className={`
                          ${dmSans.className}
                          mt-4 ml-4 list-disc space-y-2
                          text-sm sm:text-base text-zinc-200
                        `}
                      >
                        {job.details.map((item, index) => (
                          <li key={index} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Quote />
    </section>
  );
}

export default Experience;