"use client";

import { motion } from "motion/react";
import ContactForm from "./ContactForm";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function Contact() {
  return (
    <section id="contact" className="scroll-mt-[60px] w-full bg-[var(--background)] pb-40">
      <div className="relative mx-auto w-full max-w-[1920px] px-6">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-20">
          <div className="mx-auto max-w-4xl">
            {/* HEADINGS */}
            <div className="mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className={`
                  ${dmSans.className}
                  text-center text-4xl sm:text-5xl lg:text-6xl font-normal
                  tracking-tight leading-tight text-zinc-800
                `}
              >
                Enough about me
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className={`
                  ${playfair.className}
                  mt-2 text-center text-4xl sm:text-5xl lg:text-6xl font-semibold
                  tracking-tight text-zinc-900
                `}
              >
                Let&apos;s talk about you
              </motion.h3>
            </div>

            {/* FORM */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
