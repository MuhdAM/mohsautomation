import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const Hero = () => (
  <section
    aria-labelledby="hero-heading"
    className="relative min-h-screen flex flex-col items-center justify-center text-center px-[5vw] pt-28 md:pt-36 pb-20 overflow-hidden bg-[#101013]"
  >
    {/* Floating decorative dots — enterprise minimalist */}
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <span className="absolute top-24 left-[10%] w-2 h-2 rounded-full bg-primary/40 float-gentle shadow-[0_0_15px_rgba(18,113,91,0.5)]" />
      <span className="absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-primary/30 drift-left shadow-[0_0_20px_rgba(18,113,91,0.4)]" />
      <span className="absolute bottom-1/3 left-[20%] w-2.5 h-2.5 rounded-full bg-white/10 drift-right" />
      <span className="absolute top-1/2 right-[8%] w-1.5 h-1.5 rounded-full bg-primary/60 float-gentle" style={{ animationDelay: "-2s" }} />
      <span className="absolute bottom-24 right-[25%] w-2 h-2 rounded-full bg-white/5 drift-right" style={{ animationDelay: "-4s" }} />
    </div>

    <motion.div
      {...fadeUp(0)}
      className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] mb-8 text-white/80"
    >
      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(18,113,91,0.8)]" />
      Pioneering AI Integration
    </motion.div>

    <motion.h1
      {...fadeUp(0.1)}
      id="hero-heading"
      className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.1] tracking-tight max-w-[1000px] text-white"
    >
      We Build Custom <span className="text-primary font-extrabold italic">AI Systems</span><br />
      For Enterprise Growth.
    </motion.h1>

    <motion.p {...fadeUp(0.2)} className="mt-8 text-muted-foreground text-[clamp(1.1rem,2vw,1.3rem)] max-w-[700px] font-normal leading-relaxed">
      Transform your operations with bespoke AI agents, intelligent workflow automations, and high-performance digital infrastructure.
    </motion.p>

    <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-5 justify-center mt-12">
      <a
        href="#contact"
        className="bg-primary text-white px-8 py-4 rounded-full text-base font-bold shadow-[0_0_25px_rgba(18,113,91,0.4)] hover:bg-primary/90 hover:shadow-[0_0_35px_rgba(18,113,91,0.6)] hover:-translate-y-1 transition-all duration-300"
      >
        Get Automated
      </a>
      <a
        href="/demos"
        className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-colors"
      >
        View Live Demos
      </a>
    </motion.div>

    <motion.div {...fadeUp(0.4)} className="grid grid-cols-2 md:flex flex-wrap gap-4 md:gap-8 justify-center mt-20 w-full max-w-4xl">
      {[
        { num: "80", suffix: "%", label: "Tasks Automated" },
        { num: "3", suffix: "×", label: "Faster Operations" },
        { num: "24", suffix: "/7", label: "AI Always Working" },
        { num: "100", suffix: "+", label: "Hours Saved/Mo" },
      ].map((s) => (
        <div key={s.label} className="bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 text-center flex-1 min-w-[140px] hover:bg-white/[0.04] transition-colors">
          <div className="font-display text-4xl font-bold text-white mb-2">
            {s.num}
            <span className="text-primary">{s.suffix}</span>
          </div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{s.label}</div>
        </div>
      ))}
    </motion.div>
  </section>
);

export default Hero;
