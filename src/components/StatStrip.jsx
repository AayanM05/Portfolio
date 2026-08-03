import { motion } from "framer-motion";

export default function StatStrip({ stats, border = true }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 ${border ? "border-t border-line dark:border-void-line pt-10" : "pt-4"}`}>
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <p className="font-display text-3xl md:text-4xl">{s.value}</p>
          <p className="tag-mono text-ink-soft dark:text-void-soft mt-2">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
