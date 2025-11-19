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
    <section id="contact" className="scroll-mt-28">
      <div className="mx-auto mt-40 max-w-4xl px-6 sm:px-8">
        <div
          className="
            rounded-4xl border border-white/10 
            bg-white/5 backdrop-blur-3xl
            p-10 sm:p-16
          "
        >
          {/* HEADINGS */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className={`
                ${dmSans.className}
                text-center text-xs sm:text-sm uppercase tracking-[0.24em]
                text-[var(--foreground)]/70
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
                mt-2 text-center text-4xl sm:text-5xl font-semibold
                tracking-tight text-[var(--highlight)]
              `}
            >
              Let's talk about you.
            </motion.h3>
          </div>

          {/* FORM */}
          <ContactForm />

          
        </div>
      </div>
    </section>
  );
}

export default Contact;