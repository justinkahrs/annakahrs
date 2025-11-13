import { motion } from "motion/react";
import TechCard from "./TechCard";
import { Gloock } from "next/font/google";
import TechMarquee from "./TechMarquee";
const gloock = Gloock({ subsets: ["latin"], weight: "400" });
const SKILL_SECTIONS = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind/Material", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Python", "Django", "Rust", "PostgreSQL"],
  },
  {
    title: "Business",
    items: ["Stripe/Braintree", "LLM integrations", "Make/Zapier", "PandaDocs"],
  },
  {
    title: "Testing & UX",
    items: [
      "Cypress/Jest",
      "Github Actions",
      "Internationalization",
      "Accessibility",
    ],
  },
];
function Skills() {
  return (
    <section className="scroll-mt-28">
      <div id="skills" className="p-8 py-40 pb-11">
        <div
          className="flex flex-col gap-4 sm:flex-row sm:items-start
            sm:justify-between"
        >
          <div className="flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 10, x: -40 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              className={`${gloock.className} text-left text-5xl font-semibold
                tracking-wider text-green-300 uppercase`}
            >
              Skills
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 10, x: 40 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              className="text-left text-4xl tracking-tight text-gray-300
                uppercase italic"
            >
              &amp; Technology
            </motion.h2>
          </div>
          <div className="sm:max-w-sm sm:text-left">
            <p className="text-2xl text-white">
              I design for humans and code for scale. My services are accessible
              and dependable because I give a{" "}
              <span
                className="group relative inline-block cursor-pointer
                  select-none"
                tabIndex={0}
              >
                <span className="relative z-10">💩</span>
                <span
                  className="absolute inset-0 z-20 rounded-sm bg-white/20
                    backdrop-blur-sm transition-opacity duration-200
                    group-hover:opacity-0 group-focus:opacity-0"
                />
              </span>
            </p>
          </div>
        </div>
        <TechMarquee />
        <div className="mt-20 grid grid-cols-1 gap-x-24 gap-y-12 sm:grid-cols-2">
          {SKILL_SECTIONS.map((section) => (
            <TechCard
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
