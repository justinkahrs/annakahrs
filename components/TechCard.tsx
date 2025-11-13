import { motion } from "motion/react";
function TechCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="text-gray-300"
    >
      <div
        className={`border-2 border-white/10 rounded-2xl bg-white/10 p-4
          backdrop-blur-sm`}
      >
        <div className="text-xl uppercase font-extrabold">{title}</div>
        <ul className="mt-5.5 space-y-1 py-2">
          {items.map((it) => (
            <li key={it} className="flex items-center gap-2 text-[20px]">
              <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
              {it}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
export default TechCard;
