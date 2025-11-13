import { motion } from "motion/react";
import ContactForm from "./ContactForm";
import { Gloock } from "next/font/google";
const gloock = Gloock({ subsets: ["latin"], weight: "400" });
function Contact() {
  return (
    <section id="contact" className="scroll-mt-28">
      <div
        className="border-2 border-white/10 mt-11 rounded-4xl bg-white/5 p-8
          py-40 backdrop-blur-3xl sm:p-16"
      >
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className={`${gloock.className} text-center text-5xl font-semibold
              tracking-wider text-green-300 uppercase`}
          >
            Contact
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-center text-4xl tracking-tight text-gray-300
              uppercase italic"
          >
            & Collaborate
          </motion.h2>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
export default Contact;
