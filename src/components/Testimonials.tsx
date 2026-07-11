import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Moh's team rebuilt our patient intake in six weeks. What used to take our front desk two hours a day now runs itself — and the reporting is finally something I can trust.",
    name: "Dr. A. Nwosu",
    role: "Medical Director",
    org: "Multi-site clinic group, Abuja",
  },
  {
    quote:
      "The most refreshing part was how quiet the process was. Weekly demos, working software, no theatre. We were live before other agencies had finished the discovery deck.",
    name: "K. Balogun",
    role: "Head of Operations",
    org: "Retail group, Lagos",
  },
  {
    quote:
      "We treat them as an extension of our team. The automations they built have paid for themselves several times over and continue to run without babysitting.",
    name: "S. Ademola",
    role: "Managing Partner",
    org: "Professional services firm",
  },
];

const Testimonials = () => (
  <section
    aria-labelledby="testimonials-heading"
    className="relative bg-[#FDFBF7] dark:bg-[#060E12] border-t border-black/5 dark:border-white/5 py-24 transition-colors duration-300"
  >
    <div className="max-w-[1200px] mx-auto px-[5vw]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-[720px] mx-auto mb-16"
      >
        <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">
          What Clients Say
        </span>
        <h2
          id="testimonials-heading"
          className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mt-4 text-foreground"
        >
          Trusted where the stakes are real.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col"
          >
            <Quote size={28} className="text-primary/40 mb-5" strokeWidth={2} />
            <blockquote className="text-foreground text-[15px] leading-relaxed font-normal flex-grow">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-black/5 dark:border-white/10">
              <div className="font-display font-bold text-sm text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {t.role} · {t.org}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground/60 mt-8 italic">
        Names abbreviated at client request. Full references available on qualified enquiry.
      </p>
    </div>
  </section>
);

export default Testimonials;
