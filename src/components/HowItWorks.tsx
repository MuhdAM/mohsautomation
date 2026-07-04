import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery Call", desc: "We learn your business, pain points, and goals. No jargon — just a clear conversation about what you actually need." },
  { num: "02", title: "Custom Blueprint", desc: "We map out your automation or website plan with tools, timelines, and expected ROI — before a single line of code is written." },
  { num: "03", title: "Build & Iterate", desc: "We build fast, share early previews, and refine based on your feedback. You're never left in the dark." },
  { num: "04", title: "Launch & Support", desc: "We deploy, train your team, and stay on hand for ongoing improvements. Your success is our long-term goal." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="max-w-[1200px] mx-auto px-[5vw] py-20">
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <span className="text-xs font-bold text-primary uppercase tracking-[0.1em]">The Process</span>
      <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight leading-tight mt-4 mb-4">
        Simple. Fast. Effective.
      </h2>
      <p className="text-muted-foreground text-lg max-w-[550px] font-light mb-12">
        We don't waste your time. Here's how we go from first conversation to live system.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {steps.map((s) => (
        <div key={s.num} className="pl-6 border-l-2 border-border hover:border-primary transition-colors group">
          <div className="font-display text-5xl font-extrabold text-primary/10 group-hover:text-primary/20 transition-colors leading-none mb-2">{s.num}</div>
          <h3 className="font-display text-base font-bold mb-2">{s.title}</h3>
          <p className="text-muted-foreground text-sm">{s.desc}</p>
        </div>
      ))}
    </motion.div>
  </section>
);

export default HowItWorks;
