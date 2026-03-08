"use client";

import { motion } from "motion/react";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const testimonials = [
  {
    quote:
      "Thank you for getting the PAWS wireframes and requirements so clear. It removed so much confusion and helped the team be more strategically focused.",
    name: "– UX/UI Developer",
    // role: "Platform for Academic Websites Component Design",
  },
  {
    quote:
      "I appreciate your well thought out interface designs and attention to detail. It shows that you have a lot of empathy for the people who use our products and you create a positive environment for teammates.",
    name: "– UX/UI Development Lead",
    // role: "Collaboration",
  },
  {
    quote:
      "Thank you for your work on supplychain.ucsf.edu and finance.ucsf.edu. These are some of the most used and essential sites at UCSF, and you played a key part in making that happen.",
    name: "– Web Services Manager",
    // role: "Information Architecture",
  },
  {
    quote:
      "I want to recognize all the work you have been putting into information architecture. It is a difficult skill and I am so happy to have you on our team.",
    name: "– UX/UI Development Lead",
    // role: "Information Architecture and Content",
  },
  {
    quote:
      "Thank you for all your efforts on the Researcher Journey project. Your insight, experience, diligence, and hard work were invaluable to our success.",
    name: "– Systems Analyst",
    // role: "User Journey Project",
  },
];

function About() {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section id="about" className="scroll-mt-[60px] w-full bg-[#f1edff] pb-40">
      <div className="relative mx-auto w-full max-w-[1500px] px-6">
        <div className="relative overflow-hidden rounded-3xl bg-stone-900/5 p-8 sm:p-12 lg:p-20">
          <div>
            {/* TOP: HEADING */}
            <div className="mb-8 flex w-full flex-col">
              <div className="relative mb-6 mt-4 w-full">
                <div
                  className={`${dmSans.className} pointer-events-none absolute bottom-[12px] left-0 flex select-none items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-zinc-600/60 sm:text-sm`}
                >
                  <div className="h-2 w-2 bg-[#ff4500]" />
                  ABOUT
                </div>
                <div className="w-full border-t-[3px] border-dotted border-zinc-900/10" />
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className={` ${playfair.className} mt-1 text-4xl sm:text-5xl
                md:text-6xl font-semibold tracking-tight
                text-zinc-900 `}
              >
                This is the part where I talk about myself
              </motion.h2>
            </div>

            {/* BODY COPY */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-16 space-y-6"
            >
              <p
                className={` ${dmSans.className} text-base sm:text-lg
                leading-relaxed text-zinc-600 `}
              >
                I have always been drawn to the things most people never notice:
                the logic under the surface, the patterns that quietly guide you,
                the hidden decisions that make something feel “right” without
                announcing themselves. In another life, that meant memorizing
                art movement timelines and happily losing afternoons in dusty
                archives. Now it means designing digital experiences that do not make you
                think twice.
              </p>

              <p
                className={` ${dmSans.className} text-base sm:text-lg
                leading-relaxed text-zinc-600 `}
              >
                I care about the details a lot. The sort of lot you
                only notice when something feels unusually smooth. I like taking
                complex systems and giving them a shape people can actually move
                through and companies can scale. I like when a journey feels intuitive because every layer
                is in conversation with the next.
              </p>
            </motion.div>

            {/* TWO-COLUMN DETAILS - centered like Skills */}
            <div className="mt-24 flex justify-center">
              <div
                className="grid grid-cols-1 gap-12 sm:grid-cols-2 max-w-3xl
                sm:max-w-4xl text-center"
              >
                {/* HOT TAKES */}
                <div className="flex flex-col items-center">
                  <h4
                    className={` ${playfair.className} text-xl sm:text-2xl
                    font-semibold text-zinc-900 `}
                  >
                    UX opinions I will defend, politely:
                  </h4>
                  <div className="mt-3 h-[2px] w-10 bg-zinc-900/20" />
                  <ul
                    className={` ${dmSans.className} mt-4 space-y-3 text-sm
                    sm:text-base text-zinc-600 `}
                  >
                    <li>Clear is better than clever</li>
                    <li>“Learn more” is lazy</li>
                    <li>Content is design</li>
                    <li>Users hate scrolling = myth</li>
                    <li>It is not about how many clicks</li>
                    <li>UX is not graphic design</li>
                  </ul>
                </div>

                {/* ENJOY LIST */}
                <div className="flex flex-col items-center">
                  <h4
                    className={` ${playfair.className} text-xl sm:text-2xl
                    font-semibold text-zinc-900 `}
                  >
                    Things I enjoy:
                  </h4>
                  <div className="mt-3 h-[2px] w-10 bg-zinc-900/20" />
                  <ul
                    className={` ${dmSans.className} mt-4 space-y-3 text-sm
                    sm:text-base text-zinc-600 `}
                  >
                    <li>A thoughtful Jira ritual</li>
                    <li>Digging in my garden</li>
                    <li>Well written documentation</li>
                    <li>Finding the perfect emoji</li>
                    <li>Categorizing things</li>
                    <li>Knitting, crocheting, and sewing</li>
                    <li>Hunting down thrift store gold</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        <section className="mt-10 overflow-hidden">
          <div className="mb-5 text-left">
            <h3
              className={` ${dmSans.className} text-xs sm:text-sm uppercase
              tracking-[0.24em] text-zinc-500 `}
            >
              VOICES ABOUT MY WORK
            </h3>
          </div>

          <motion.div
            className="flex w-max items-start gap-4 will-change-transform"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 36,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {marqueeItems.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className={`max-w-[26rem] shrink-0 border border-zinc-900/5
                bg-[#f1edff] p-5 ${
                  index % 3 === 0
                    ? "mt-0"
                    : index % 3 === 1
                      ? "mt-6"
                      : "mt-12"
                }`}
              >
                <p
                  className={` ${dmSans.className} text-sm leading-relaxed
                  text-zinc-800 `}
                >
                  “{item.quote}”
                </p>
              </article>
            ))}
          </motion.div>
        </section>
      </div>
    </section>
  );
}

export default About;
