import { motion } from "motion/react";

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/75 inline-block uppercase tracking-[0.15em]"
    >
      {children}
    </motion.span>
  );
}
