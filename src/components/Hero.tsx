import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const Hero = () => (
  <section aria-labelledby="hero-heading" className="relative min-h-screen flex flex-col items-center justify-center text-center px-[5vw] pt-24 md:pt-32 pb-16">
    {/* Glow background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,hsl(166_100%_39%/0.12)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_60%,hsl(216_100%_50%/0.08)_0%,transparent_60%)]" />
    </div>

    <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8">
      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot" />
      Now Accepting Early Access
    </motion.div>

    <motion.h1 {...fadeUp(0.1)} id="hero-heading" className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[1.05] tracking-tighter max-w-[900px]">
      AI Automation &amp; Websites<br />Built for <span className="text-gradient">Real Results</span>
    </motion.h1>

    <motion.p {...fadeUp(0.2)} className="mt-6 text-muted-foreground text-[clamp(1rem,2vw,1.2rem)] max-w-[620px] font-light">
      We help businesses and hospitals cut costs, eliminate repetitive work, and grow faster — with custom AI automations and high-converting web experiences.
    </motion.p>

    <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 justify-center mt-10">
      <a href="#waitlist" className="bg-gradient-primary text-accent-foreground px-8 py-3.5 rounded-full text-base font-semibold glow-primary hover:-translate-y-0.5 glow-primary-hover transition-all">
        Join the Waitlist →
      </a>
      <a href="#services" className="border border-border bg-foreground/[0.03] text-foreground px-8 py-3.5 rounded-full text-base font-medium hover:border-foreground/20 hover:bg-foreground/[0.06] transition-all">
        See What We Build
      </a>
    </motion.div>

    <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-10 justify-center mt-16">
      {[
        { num: "80", suffix: "%", label: "Tasks Automated" },
        { num: "3", suffix: "×", label: "Faster Operations" },
        { num: "24", suffix: "/7", label: "AI Always Working" },
      ].map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-display text-3xl font-extrabold">
            {s.num}<span className="text-primary">{s.suffix}</span>
          </div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{s.label}</div>
        </div>
      ))}
    </motion.div>
  </section>
);

export default Hero;
