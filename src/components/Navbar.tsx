import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const DEMO_CATEGORIES = [
  { label: "All Demos", slug: "All Demos" },
  { label: "AI Voice Receptionists", slug: "AI Voice Receptionists" },
  { label: "Zero-Commission Ordering Platforms", slug: "Zero-Commission Ordering Platforms" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [mobileDemoOpen, setMobileDemoOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass =
    "relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-primary after:via-primary/60 after:to-transparent after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/60 dark:bg-background/50 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 dark:border-white/10 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.15)]"
          : "py-5 bg-white/30 dark:bg-background/30 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <Link
        to="/"
        className="group font-display text-xl md:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2"
        aria-label="Moh's Automation — Home"
      >
        <div className="relative w-8 h-8 rounded-md bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
          <span className="text-white text-sm font-black">M</span>
          <span className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-primary/40 animate-pulse-glow" />
        </div>
        Moh's <span className="text-primary font-light">Automation</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {/* Demos dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDemoOpen(true)}
          onMouseLeave={() => setDemoOpen(false)}
        >
          <Link
            to="/demos"
            className={`${navLinkClass} inline-flex items-center gap-1`}
          >
            Demos
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${demoOpen ? "rotate-180" : ""}`}
            />
          </Link>
          <AnimatePresence>
            {demoOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.18 }}
                className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72"
              >
                <div className="rounded-2xl bg-white/80 dark:bg-background/80 backdrop-blur-xl backdrop-saturate-150 border border-white/40 dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-2 overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-primary/20 animate-pulse-glow" />
                  {DEMO_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/demos?category=${encodeURIComponent(cat.slug)}`}
                      onClick={() => setDemoOpen(false)}
                      className="relative block px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a href="/#services" className={navLinkClass}>Services</a>
        <a href="/#how-it-works" className={navLinkClass}>Process</a>
        <a href="/#faq" className={navLinkClass}>FAQ</a>
        <a href="/#contact" className={navLinkClass}>Contact</a>
      </div>

      <a
        href="/#contact"
        className="hidden md:inline-flex relative items-center justify-center bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(18,113,91,0.35)] hover:shadow-[0_0_32px_rgba(18,113,91,0.65)] hover:-translate-y-0.5 transition-all duration-300 animate-pulse-glow"
      >
        Get Automated
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-foreground p-2"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white/85 dark:bg-[#101013]/85 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 dark:border-white/10 flex flex-col items-center gap-3 py-8 md:hidden shadow-2xl"
          >
            <div className="w-full max-w-xs">
              <button
                onClick={() => setMobileDemoOpen(!mobileDemoOpen)}
                className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-lg font-medium py-2"
                aria-expanded={mobileDemoOpen}
              >
                Demos
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${mobileDemoOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {mobileDemoOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden flex flex-col items-center gap-1 pt-1 pb-2"
                  >
                    {DEMO_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/demos?category=${encodeURIComponent(cat.slug)}`}
                        onClick={() => {
                          setOpen(false);
                          setMobileDemoOpen(false);
                        }}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 text-center"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {[
              { href: "/#services", label: "Services" },
              { href: "/#how-it-works", label: "Process" },
              { href: "/#faq", label: "FAQ" },
              { href: "/#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-primary text-white px-8 py-3 rounded-full text-base font-semibold shadow-[0_0_20px_rgba(18,113,91,0.4)] animate-pulse-glow"
            >
              Get Automated
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
