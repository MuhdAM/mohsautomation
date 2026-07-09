import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "We specialize in both business and healthcare — rare expertise in a niche space",
  "Every solution is custom-built, not templated or cookie-cutter",
  "Transparent pricing with no hidden fees or surprise invoices",
  "Ongoing support — we don't disappear after delivery",
  "Fast turnaround — most projects live within 2–4 weeks",
  "Nigeria-based, serving global clients at competitive rates",
];

const metrics = [
  { num: "2–4", label: "Weeks average delivery" },
  { num: "40%", label: "Average cost reduction" },
  { num: "100%", label: "Custom-built solutions" },
  { num: "24/7", label: "Automation runs non-stop" },
];

const WhyUs = () => (
  <section id="why-us" className="relative bg-white dark:bg-[#101013] border-t border-black/5 dark:border-white/5 transition-colors duration-300" aria-labelledby="whyus-heading">
    <div className="max-w-[1200px] mx-auto px-[5vw] py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Why Moh's Automation</span>
          <h2 id="whyus-heading" className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mt-4 mb-10 text-foreground">
            Built Different.<br />Engineered for Scale.
          </h2>
          <ul className="flex flex-col gap-6">
            {reasons.map((r) => (
              <li key={r} className="flex gap-4 items-start text-muted-foreground text-[15px] leading-relaxed">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 border border-primary/20">
                  <Check size={14} className="text-primary" strokeWidth={2.5} />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-xl">
              <img src="/ai_integration.png" alt="AI Integration Neural Network" className="w-full h-[250px] object-cover transform hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-5"
          >
            {metrics.map((m) => (
              <div key={m.label} className="bg-gray-50 dark:bg-[#151518] border border-black/5 dark:border-white/5 rounded-2xl p-8 hover:border-primary/40 transition-colors duration-300 shadow-lg">
                <div className="font-display text-[2.5rem] font-bold leading-none text-foreground mb-3">
                  {m.num}
                </div>
                <div className="text-primary text-xs font-semibold uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
