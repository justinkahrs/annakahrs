import { motion } from "motion/react";
import { Gloock } from "next/font/google";
import Quote from "./Quote";

const gloock = Gloock({ subsets: ["latin"], weight: "400" });

function Experience() {
  const jobs = [
    {
      role: "Lead UX Designer",
      company: "University of California, San Francisco (UCSF)",
      period: "January 2024 - Present",
      blurb:
        "Lead UX for UCSF website migrations to a modern Drupal platform, shaping strategy, structure, and design. Run usability testing and user research, design IA and content structures with stakeholders, explore concepts for internal platforms, and apply WCAG 2.1 accessibility standards.",
      link: "https://www.ucsf.edu",
      location: "San Francisco, CA (Remote)",
    },
    {
      role: "Service Designer",
      company: "University of California, San Francisco (UCSF)",
      period: "October 2018 - December 2023",
      blurb:
        "Collaborated with stakeholders to define goals, shape service concepts, and align on user needs. Led user research, created user flows and prototypes, facilitated workshops, and partnered with developers and content specialists to deliver seamless, scalable digital services.",
      link: "https://www.ucsf.edu",
      location: "San Francisco, CA (Remote)",
    },
    {
      role: "Information Architect UX Intern",
      company: "IU Studios - University Communications and Marketing",
      period: "August 2017 - March 2018",
      blurb:
        "Supported UX and information architecture through interviews, analysis, and insight synthesis. Created wireframes and prototypes, helped plan and run usability testing, contributed to design documentation, and assisted with UI asset creation and interface refinements.",
      link: "https://iu.edu",
      location: "Bloomington, IN",
    },
  ];

  return (
    <section className="w-full scroll-mt-28">
      <div
        id="experience"
        className="relative right-1/2 left-1/2 -mx-[50vw] mb-30 w-screen border
          border-zinc-200/60 bg-white py-40"
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-12">
          <div className="overflow-x-hidden pb-9">
            <motion.h2
              initial={{ opacity: 0, y: 10, x: -40 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              className="text-left text-4xl tracking-tight text-gray-400
                uppercase italic"
            >
              Professional
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 10, x: 40 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              className={`${gloock.className} text-left text-5xl font-semibold
                tracking-wider text-(--background) uppercase`}
            >
              Experience
            </motion.h2>
          </div>
          <a
            className="inline-flex items-center gap-2 p-2 text-sm"
            download
            href="/Anna_Kahrs_resume.pdf"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 500"
              className="mt-1 h-5 w-5"
            >
              <g>
                <path d="M358.8,272.2v70.3c0,1.4-0.2,2.7-0.5,3.9v0c0,0,0,0,0,0c-1.4,6.9-7.5,12.1-14.7,12.1H56.3c-7.7,0-14.1-5.9-14.9-13.4   c-0.2-0.9-0.2-1.7-0.2-2.7v-70.3c0-8.3,6.8-15,15-15c4.1,0,7.9,1.7,10.6,4.4c2.7,2.7,4.4,6.5,4.4,10.6v56.3h257.7v-56.3   c0-8.3,6.8-15,15-15c4.1,0,7.9,1.7,10.6,4.4C357.1,264.3,358.8,268.1,358.8,272.2z" />
                <path d="M286.5,201.8l-73.7,73.7c-0.1,0.2-0.3,0.3-0.4,0.4c-2.7,2.7-6.2,4.4-9.7,4.9c-0.3,0-0.6,0.1-0.9,0.1   c-0.6,0.1-1.2,0.1-1.8,0.1h0l-1.7-0.1c-0.3,0-0.6-0.1-0.9-0.1c-3.6-0.5-7-2.2-9.7-4.9c-0.1-0.1-0.3-0.3-0.4-0.4l-73.7-73.7   c-3.4-3.4-5.1-7.9-5.1-12.4c0-4.5,1.7-9,5.1-12.4c6.8-6.8,17.9-6.8,24.8,0l44.3,44.3V59c0-9.6,7.9-17.5,17.5-17.5   c4.8,0,9.2,2,12.4,5.1c3.2,3.2,5.1,7.5,5.1,12.4v162.3l44.3-44.3c6.8-6.8,17.9-6.8,24.8,0C293.3,183.9,293.3,195,286.5,201.8z" />
              </g>
            </svg>
            <span>Download Resume (PDF)</span>
          </a>

          <ul className="timeline timeline-vertical timeline-compact mt-20">
            {jobs.map((job, i) => (
              <li key={i}>
                <div className="timeline-start pt-1 text-sm text-green-900">
                  {job.period}
                </div>
                <div className="timeline-middle text-green-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 120 150"
                    x="0px"
                    y="0px"
                    className="mt-2 h-5 w-5"
                  >
                    <circle cx="60" cy="60" r="60" fill="currentColor" />
                    <polygon
                      points="32.06 37.95 17.65 52.36 10 60.01 17.65 67.64 32.06 82.05 39.71 74.42 25.3 60.01 39.71 45.6 32.06 37.95"
                      fill="#ffffff"
                    />
                    <polygon
                      points="102.35 52.36 87.94 37.95 80.29 45.6 94.7 60.01 80.29 74.42 87.94 82.05 102.35 67.64 110 60.01 102.35 52.36"
                      fill="#ffffff"
                    />
                    <rect
                      x="27.91"
                      y="54.59"
                      width="64.19"
                      height="10.81"
                      transform="translate(-13.48 102.43) rotate(-75)"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="timeline-end">
                  <h3 className="text-lg leading-snug font-medium">
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {job.role}{" "}
                      <span className="text-1xl text-zinc-500 text-nowrap">
                        — {job.company}
                      </span>
                    </a>
                  </h3>
                  <h4 className="mt-1 text-sm">{job.location}</h4>
                  <div className="mt-4 text-sm text-zinc-600">{job.blurb}</div>
                </div>
                {i !== jobs.length - 1 && (
                  <hr className="border-2 border-(--background)/30" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Quote />
    </section>
  );
}

export default Experience;
