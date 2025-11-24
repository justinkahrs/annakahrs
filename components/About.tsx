"use client";

import { useState, useEffect } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔁 auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 12000); // 12 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="scroll-mt-28">
      <div
        id="about"
        className="relative right-1/2 left-1/2 -mx-[50vw] w-screen bg-white
          px-10 py-32 sm:px-14 sm:py-40"
      >
        <div className="mx-auto max-w-3xl">
          {/* TOP: PHOTO + HEADING */}
          <div className="flex flex-col items-center text-center gap-8">
            {/* PHOTO */}
            <div className="h-50 w-50">
              <img
                src="/profile-kahrs.png"
                alt="Portrait of Anna"
                className="h-full w-full object-cover"
              />
            </div>

            {/* HEADING */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className={` ${dmSans.className} mt-0 text-xs sm:text-sm
                  uppercase tracking-[0.24em] text-zinc-500 `}
              >
                ABOUT
              </motion.h3>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className={` ${playfair.className} mt-1 text-4xl sm:text-5xl
                  md:text-6xl font-semibold tracking-tight
                  text-[var(--highlight)] `}
              >
                This is the part where I talk about myself.
              </motion.h2>
            </div>
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
              art-movement timelines and happily losing afternoons in dusty
              archives.
            </p>

            <p
              className={` ${dmSans.className} text-base sm:text-lg
                leading-relaxed text-zinc-600 `}
            >
              Now it means designing digital experiences that do not make you
              think twice. I care about the details a lot. The sort of lot you
              only notice when something feels unusually smooth. I like taking
              complex systems and giving them a shape people can actually move
              through. I like when a journey feels intuitive because every layer
              is in conversation with the next.
            </p>

            <p
              className={` ${dmSans.className} text-base sm:text-lg
                leading-relaxed text-zinc-600 `}
            >
              If something feels polished, it is because I fussed over it until
              it could stand on its own.
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
                    font-semibold text-[var(--highlight)] `}
                >
                  UX opinions I will defend, politely:
                </h4>
                <div className="mt-3 h-[2px] w-10 bg-[var(--highlight)]/60" />
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
                    font-semibold text-[var(--highlight)] `}
                >
                  Things I enjoy:
                </h4>
                <div className="mt-3 h-[2px] w-10 bg-[var(--highlight)]/60" />
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

          {/* VOICES ABOUT MY WORK - CAROUSEL */}
          <section className="mt-24 border-t border-zinc-200 pt-16">
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className={` ${dmSans.className} text-xs sm:text-sm uppercase
                  tracking-[0.24em] text-zinc-500 `}
              >
                WHAT OTHERS SAY
              </motion.h3>

              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className={` ${playfair.className} mt-3 text-3xl sm:text-4xl
                  font-semibold tracking-tight text-[var(--highlight)] `}
              >
                Voices about my work
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={` ${dmSans.className} mx-auto mt-4 max-w-2xl text-sm
                  sm:text-base leading-relaxed text-zinc-600 `}
              >
                A few things collaborators and leaders have shared after working
                together on research, information architecture, and product
                decisions.
              </motion.p>
            </div>

            {/* Carousel body */}
            <div className="mt-10 flex justify-center">
              <motion.article
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-4xl border border-[var(--highlight)]
                  bg-zinc-50 px-6 py-6 sm:px-7 sm:py-7 shadow-sm flex flex-col
                  justify-between"
              >
                <p
                  className={` ${dmSans.className} text-sm sm:text-base
                    leading-relaxed text-zinc-800 `}
                >
                  “{testimonials[activeIndex].quote}”
                </p>

                <div className="mt-5">
                  <p
                    className={` ${playfair.className} text-sm sm:text-base
                      font-semibold text-zinc-900 `}
                  >
                    {testimonials[activeIndex].name}
                  </p>
                </div>
              </motion.article>
            </div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={` h-1.5 w-1.5 rounded-full transition ${
                    index === activeIndex
                      ? "bg-[var(--highlight)]"
                      : "bg-zinc-300"
                  } `}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
