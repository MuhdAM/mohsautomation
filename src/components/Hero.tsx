import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TYPING_TEXT = "Plan. Build. Deploy.";

const TypingText = () => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let i = 0;

    const tick = () => {
      if (i <= TYPING_TEXT.length) {
        setDisplayed(TYPING_TEXT.slice(0, i));
        i++;
        timeout = setTimeout(tick, 90);
      } else {
        // Pause 3s then restart
        timeout = setTimeout(() => {
          i = 0;
          setDisplayed("");
          tick();
        }, 3000);
      }
    };

    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {displayed}
      <span className="inline-block w-[0.08em] h-[0.9em] align-middle ml-1 bg-current animate-pulse" />
    </>
  );
};


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const Hero = () => (
  <section
    aria-labelledby="hero-heading"
    className="dark relative min-h-[90vh] flex flex-col items-center justify-center text-center px-[5vw] pt-28 md:pt-36 pb-20 overflow-hidden bg-[#050C0F] transition-colors duration-300"
  >
    {/* Custom Wavy Background Image */}
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-100 transition-opacity duration-300"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      {/* Bottom fade to blend into the next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F4F1EA] dark:to-[#09151A]" />
    </div>

    {/* Floating Avatars and Decor */}
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-10">
      {/* Avatar 1 (Left) */}
      <motion.div
        animate={{
          y: [0, -70, 40, -55, 25, -30, 0],
          x: [0, 40, -20, 55, -35, 30, 0],
          rotate: [0, 14, -10, 18, -6, 12, 0],
          scale: [1, 1.14, 0.94, 1.1, 1.03, 1.08, 1],
        }}
        transition={{
          y: { duration: 7.2, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 9.1, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 6.4, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-[15%] left-[3%] md:left-[8%]"
      >
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="relative">
          <svg className="absolute -top-5 -right-3 w-5 h-5 text-blue-500 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.5 2L19 12l-6.5 2 3.5 7.5-3 1.5L9.5 15 4 19V2z"/>
          </svg>
          <img src="/avatar_1.png" alt="" className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-white dark:border-[#151518] shadow-2xl object-cover" />
        </motion.div>
      </motion.div>

      {/* Avatar 2 (Right) */}
      <motion.div
        animate={{
          y: [0, 60, -45, 35, -65, 20, 0],
          x: [0, -45, 30, -60, 40, -25, 0],
          rotate: [0, -16, 12, -20, 8, -14, 0],
          scale: [1, 1.12, 0.96, 1.08, 1.04, 1.06, 1],
        }}
        transition={{
          y: { duration: 8.4, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 6.9, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 7.6, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 5.3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[20%] right-[3%] md:right-[8%]"
      >
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="relative">
          <svg className="absolute -top-5 -left-3 w-5 h-5 text-red-500 drop-shadow-md transform -scale-x-100 rotate-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.5 2L19 12l-6.5 2 3.5 7.5-3 1.5L9.5 15 4 19V2z"/>
          </svg>
          <img src="/avatar_2.png" alt="" className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white dark:border-[#151518] shadow-2xl object-cover" />
        </motion.div>
      </motion.div>
      
      {/* Decorative dots */}
      <span className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_15px_rgba(18,113,91,0.5)]" />
      <span className="absolute bottom-1/3 right-[15%] w-3 h-3 rounded-full bg-primary/30 shadow-[0_0_20px_rgba(18,113,91,0.4)]" />
    </div>

    <div className="relative z-10 flex flex-col items-center">
      <motion.div
        {...fadeUp(0)}
        className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] mb-8 text-foreground"
      >
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(18,113,91,0.8)]" />
        Done For You AI Setup
      </motion.div>

      <motion.h1
        {...fadeUp(0.1)}
        id="hero-heading"
        className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.15] tracking-tight max-w-[1000px] text-foreground"
      >
        Done-for-you AI <br className="hidden md:block" />
        <span className="inline-block bg-[#99F6E4] text-[#042F2E] px-4 py-1 mt-2 rounded-xl transform -rotate-1 shadow-lg dark:shadow-[0_0_20px_rgba(153,246,228,0.2)] min-w-[10ch]">
          <TypingText />
        </span><br />
        In just 90 Days
      </motion.h1>

      <motion.p {...fadeUp(0.2)} className="mt-8 text-foreground text-[clamp(1.1rem,2vw,1.3rem)] max-w-[700px] font-bold underline underline-offset-4 decoration-primary/50">
        AI fully integrated into business within 90 days.
      </motion.p>

      <motion.div {...fadeUp(0.3)} className="flex flex-col items-center gap-4 mt-12">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-bold shadow-[0_0_25px_rgba(18,113,91,0.3)] hover:bg-primary/90 hover:shadow-[0_0_35px_rgba(18,113,91,0.5)] hover:-translate-y-1 transition-all duration-300"
        >
          Book a Call
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <span className="text-xs text-muted-foreground font-medium">Money back guarantee*</span>
      </motion.div>
    </div>
  </section>
);

export default Hero;
