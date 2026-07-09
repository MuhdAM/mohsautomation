import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const Hero = () => (
  <section
    aria-labelledby="hero-heading"
    className="relative min-h-screen flex flex-col items-center justify-center text-center px-[5vw] pt-24 md:pt-32 pb-16 overflow-hidden"
  >
    {/* Floating decorative dots — reference-inspired */}
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <span className="absolute top-24 left-[8%] w-3 h-3 rounded-full bg-[hsl(var(--accent-blue))] float-gentle opacity-70 shadow-[0_0_20px_hsl(var(--accent-blue)/0.7)]" />
      <span className="absolute top-40 right-[12%] w-4 h-4 rounded-full bg-[hsl(var(--accent-emerald))] drift-left opacity-60 shadow-[0_0_22px_hsl(var(--accent-emerald)/0.7)]" />
      <span className="absolute bottom-40 left-[18%] w-3.5 h-3.5 rounded-full bg-[hsl(var(--accent-purple))] drift-right opacity-70 shadow-[0_0_22px_hsl(var(--accent-purple)/0.7)]" />
      <span className="absolute top-1/2 right-[6%] w-2 h-2 rounded-full bg-primary float-gentle opacity-80 shadow-[0_0_18px_hsl(var(--primary)/0.8)]" style={{ animationDelay: "-2s" }} />
      <span className="absolute bottom-24 right-[22%] w-2.5 h-2.5 rounded-full bg-[hsl(var(--accent-blue))] drift-right opacity-60" style={{ animationDelay: "-4s" }} />
    </div>

    <motion.div
      {...fadeUp(0)}
      className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8 text-primary"
    >
      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot" />
      Now Accepting Early Access
    </motion.div>

    <motion.h1
      {...fadeUp(0.1)}
      id="hero-heading"
      className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[1.05] tracking-tighter max-w-[900px]"
    >
      AI Automation &amp; Websites<br />Built for <span className="font-bagel text-gradient-tri">Real Results</span>
    </motion.h1>

    <motion.p {...fadeUp(0.2)} className="mt-6 text-muted-foreground text-[clamp(1rem,2vw,1.2rem)] max-w-[620px] font-light">
      We help businesses and hospitals cut costs, eliminate repetitive work, and grow faster — with custom AI automations and high-converting web experiences.
    </motion.p>

    <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 justify-center mt-10">
      <a
        href="#waitlist"
        className="bg-gradient-tri text-white px-8 py-3.5 rounded-full text-base font-semibold pulse-glow hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
      >
        Join the Waitlist →
      </a>
      <a
        href="#services"
        className="glass-card glass-card-hover text-foreground px-8 py-3.5 rounded-full text-base font-medium"
      >
        See What We Build
      </a>
    </motion.div>

    <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-6 justify-center mt-16">
      {[
        { num: "80", suffix: "%", label: "Tasks Automated", color: "hsl(var(--accent-blue))" },
        { num: "3", suffix: "×", label: "Faster Operations", color: "hsl(var(--accent-emerald))" },
        { num: "24", suffix: "/7", label: "AI Always Working", color: "hsl(var(--accent-purple))" },
      ].map((s) => (
        <div key={s.label} className="glass-card glass-card-hover rounded-2xl px-6 py-4 text-center min-w-[130px]">
          <div className="font-bagel text-3xl leading-none">
            {s.num}
            <span style={{ color: s.color }}>{s.suffix}</span>
          </div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1.5">{s.label}</div>
        </div>
      ))}
    </motion.div>
  </section>
);

export default Hero;
