import handleScroll from "@/utils/handleScroll";
import { motion } from "motion/react";
import { Gloock } from "next/font/google";
const gloock = Gloock({ subsets: ["latin"], weight: "400" });

function Home() {
  return (
    <section id="home" className="scroll-mt-28">
      <div className="flex justify-center pt-18">
        <div className="p-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`text-4xl font-semibold tracking-tight text-balance
              sm:text-5xl`}
          >
            Hi, I’m{" "}
            <motion.span
              className={`relative ${gloock.className} text-green-300`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              Justin Kahrs
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="mt-4 text-4xl tracking-tight text-gray-300"
          >
            I'm a senior software engineer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <button
              className="w-50 bg-zinc-900 px-4 py-3 text-sm font-medium
                text-white transition hover:bg-zinc-800 cursor-pointer"
              onClick={() => handleScroll("#experience")}
              type="button"
            >
              View Experience
            </button>
            <button
              // type="button"
              onClick={() => handleScroll("#contact")}
              className="w-50 border border-zinc-300 bg-transparent px-4 py-3
                text-sm font-bold text-white backdrop-blur-3xl transition
                hover:bg-zinc-800 cursor-pointer"
            >
              CONTACT
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Home;
