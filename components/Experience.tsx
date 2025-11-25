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
      blurb: null,
      link: "https://www.ucsf.edu",
      location: "San Francisco, CA (Remote)",
      details: [
        "Supported the Library’s digital and instructional teams by conducting user research to uncover needs of students, faculty, and researchers.",
        "Created wireframes, interface concepts, and visual design assets used in web content, presentations, and instructional materials.",
        "Helped clarify user needs and pain points through interviews, observations, and stakeholder conversations, informing improvements to library services and digital content.",
        "Contributed to the broader service design efforts by providing user-centered evidence that shaped team conversations and priorities.",
      ],
    },
    {
      role: "Information Architect UX Intern",
      company: "IU Studios – University Communications and Marketing",
      period: "August 2017 - March 2018",
      blurb: null,
      link: "https://iu.edu",
      location: "Bloomington, IN",
      details: [
        "Worked on information architecture for large university sites, shaping navigation, page flows, and content structure.",
        "Supported workshops, stakeholder sessions, and user research that informed project direction and identified usability needs.",
        "Built and refined site content using Cascade CMS, turning UX and IA decisions into production-ready pages.",
      ],
    },
  ];

  return (
    <section className="w-full">
      <div
        id="experience"
        className="relative right-1/2 left-1/2 -mx-[50vw] w-screen bg-white/5
          border-y border-white/10 py-32 sm:py-40"
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-12">
          {/* HEADER — Professional ABOVE Experience */}
          <div className="flex flex-col items-center text-center w-full">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className={` ${dmSans.className} mt-0 text-xs sm:text-sm uppercase
                tracking-[0.24em] text-[var(--foreground)]/70 `}
            >
              Professional
            </motion.h3>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className={` ${playfair.className} mt-3 text-5xl sm:text-6xl
                font-semibold tracking-tight text-[var(--highlight)] `}
            >
              Experience
            </motion.h2>
          </div>

          {/* DOWNLOAD BUTTON */}
          <div className="mt-10 flex justify-center">
            <a
              href="/Anna_Kahrs_resume.pdf"
              download
              className={`${dmSans.className} inline-flex items-center
                justify-center gap-3 whitespace-nowrap rounded-full
                bg-[var(--primary)] px-8 py-3 text-sm font-semibold uppercase
                tracking-wide text-white
                hover:bg-[var(--primary-hover)]
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[var(--primary)]/40
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[var(--background)] cursor-pointer`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 shrink-0"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>

              <span>Download Resume (PDF)</span>
            </a>
          </div>

          {/* TIMELINE */}
          <div className="relative mt-16 ml-6 mb-40">
            {/* vertical spine */}
            <div
              className="pointer-events-none absolute left-[12px] top-0 bottom-0
                w-[2px] bg-[var(--foreground)]/25"
            />

            <ul className="space-y-16">
              {jobs.map((job, i) => (
                <li key={i} className="relative">
                  {/* circle marker */}
                  <div
                    className="absolute left-0 top-0 flex h-6 w-6 items-center
                      justify-center rounded-full bg-[var(--highlight)]
                      text-white shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                      />
                    </svg>
                  </div>

                  {/* content */}
                  <div className="ml-10">
                    <p
                      className={`${dmSans.className} text-xs sm:text-sm
                      text-[var(--foreground)]/70`}
                    >
                      {job.period}
                    </p>

                    <h3
                      className={` ${playfair.className} mt-1 text-xl
                      sm:text-2xl font-semibold text-white `}
                    >
                      {job.role}
                    </h3>

                    <p
                      className={` ${dmSans.className} mt-1 text-sm sm:text-base
                      text-zinc-200 `}
                    >
                      <span className="text-zinc-200">at </span>
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium
                          text-[var(--highlight)] hover:underline"
                      >
                        {job.company}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-4 w-4 opacity-100"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                    </p>

                    <p
                      className={` ${dmSans.className} mt-1 text-xs sm:text-sm
                      uppercase tracking-[0.14em] text-zinc-200 `}
                    >
                      {job.location}
                    </p>

                    {/* optional paragraph blurb */}
                    {job.blurb && (
                      <p
                        className={` ${dmSans.className} mt-4 text-sm
                        sm:text-base leading-relaxed text-zinc-200 `}
                      >
                        {job.blurb}
                      </p>
                    )}

                    {/* optional bullet list */}
                    {job.details && (
                      <ul
                        className={` ${dmSans.className} mt-4 ml-4 list-disc
                        space-y-2 text-sm sm:text-base text-zinc-200 `}
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
