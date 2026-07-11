import { motion } from "framer-motion";

const logos = [
  "MERIDIAN HEALTH",
  "NORTHWIND LOGISTICS",
  "ATLAS RETAIL GROUP",
  "SAVANNA CAPITAL",
  "PRIME CLINIC NETWORK",
  "HELIX CONSULTING",
];

const TrustedBy = () => (
  <section
    aria-label="Trusted by leading teams"
    className="relative bg-[#FDFBF7] dark:bg-[#060E12] border-t border-black/5 dark:border-white/5 py-16 transition-colors duration-300"
  >
    <div className="max-w-[1200px] mx-auto px-[5vw]">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-[11px] font-bold text-muted-foreground uppercase tracking-[0.25em] mb-10"
      >
        Trusted by operators across healthcare, retail & professional services
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center"
      >
        {logos.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center h-14 rounded-lg border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm px-4 hover:border-primary/30 transition-colors duration-300"
          >
            <span className="font-display text-[11px] md:text-[12px] font-bold tracking-[0.15em] text-muted-foreground/80 text-center leading-tight">
              {name}
            </span>
          </div>
        ))}
      </motion.div>
      <p className="text-center text-[11px] text-muted-foreground/60 mt-6 italic">
        Selected engagements. Client names shown with permission or anonymized on request.
      </p>
    </div>
  </section>
);

export default TrustedBy;
