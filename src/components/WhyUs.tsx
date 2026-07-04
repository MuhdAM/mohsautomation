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
  <section className="bg-elevated" aria-labelledby="whyus-heading">
    <div className="max-w-[1200px] mx-auto px-[5vw] py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs font-bold text-primary uppercase tracking-[0.1em]">Why Moh's Automation</span>
          <h2 id="whyus-heading" className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight leading-tight mt-4 mb-8">
            Built Different.<br />Priced Fairly.
          </h2>
          <ul className="flex flex-col gap-4">
            {reasons.map((r) => (
              <li key={r} className="flex gap-3 items-start text-muted-foreground text-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                  <Check size={12} className="text-primary" />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {metrics.map((m) => (
            <div key={m.label} className="bg-surface border border-border rounded-xl p-6">
              <div className="font-display text-3xl font-extrabold text-primary leading-none">{m.num}</div>
              <div className="text-muted-foreground text-xs mt-2">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyUs;
