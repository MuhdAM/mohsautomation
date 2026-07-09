import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery Call", desc: "We learn your business, pain points, and goals. No jargon — just a clear conversation about what you actually need." },
  { num: "02", title: "Custom Blueprint", desc: "We map out your automation or website plan with tools, timelines, and expected ROI — before a single line of code is written." },
  { num: "03", title: "Build & Iterate", desc: "We build fast, share early previews, and refine based on your feedback. You're never left in the dark." },
  { num: "04", title: "Launch & Support", desc: "We deploy, train your team, and stay on hand for ongoing improvements. Your success is our long-term goal." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="relative bg-[#F4F1EA] dark:bg-[#16201B] border-t border-black/5 dark:border-white/5 py-24 transition-colors duration-300">
    <div className="max-w-[1200px] mx-auto px-[5vw]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side: Image */}
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
            <img src="/workflow_dashboard.png" alt="Workflow Dashboard UI" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
          </div>
        </motion.div>

        {/* Right side: Content & Steps */}
        <div className="flex flex-col gap-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">The Process</span>
            <h2 className="font-display text-[clamp(2rem,3vw,3rem)] font-bold tracking-tight leading-[1.1] mt-4 mb-4 text-foreground">
              Simple. Agile. Scalable.
            </h2>
            <p className="text-muted-foreground text-lg max-w-[600px] font-normal mb-8">
              We strip away the agency bloat. Here's how we move from strategy to a deployed enterprise system.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {steps.map((s) => (
              <div key={s.num} className="pl-6 border-l-2 border-black/10 dark:border-white/10 hover:border-primary transition-colors duration-300 group">
                <div className="font-display text-[2.5rem] font-black text-black/5 dark:text-white/5 group-hover:text-primary/20 transition-colors duration-300 leading-none mb-3">{s.num}</div>
                <h3 className="font-display text-lg font-bold mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-[14px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
