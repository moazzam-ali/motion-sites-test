import { motion } from "motion/react";
import { Zap, Palette, BarChart3, Shield, type LucideIcon } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
}

const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Days, Not Months",
    body: "Concept to launch at a pace that redefines fast.",
  },
  {
    icon: Palette,
    title: "Obsessively Crafted",
    body: "Every detail considered. Every element refined.",
  },
  {
    icon: BarChart3,
    title: "Built to Convert",
    body: "Layouts informed by data. Results you can measure.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    body: "SSL, DDoS mitigation, compliance. All included.",
  },
];

export function FeaturesGrid() {
  return (
    <section id="work" className="relative bg-black py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionBadge>Why Us</SectionBadge>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading italic text-white text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-2px] max-w-3xl"
          >
            The difference is everything.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="liquid-glass rounded-2xl p-6 flex flex-col gap-4 min-h-[200px]"
              >
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-heading italic text-white text-2xl leading-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-white/65 text-sm font-light leading-relaxed">
                    {feature.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
