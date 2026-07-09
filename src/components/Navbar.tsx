import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-5 bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      <Link to="/" className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2" aria-label="Moh's Automation — Home">
        {/* Optional Logo Icon placeholder */}
        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-lg">
          <span className="text-white text-sm font-black">M</span>
        </div>
        Moh's <span className="text-primary font-light">Automation</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link to="/demos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Demos</Link>
        <a href="/#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
        <a href="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Process</a>
        <a href="/#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        <a href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
      </div>

      <a href="/#contact" className="hidden md:inline-flex items-center justify-center bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(18,113,91,0.4)] transition-all duration-300">
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
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-[#101013]/95 backdrop-blur-xl border-b border-black/5 dark:border-white/5 flex flex-col items-center gap-4 py-8 md:hidden shadow-2xl"
          >
            {[
              { href: "/demos", label: "Demos" },
              { href: "/#services", label: "Services" },
              { href: "/#how-it-works", label: "Process" },
              { href: "/#faq", label: "FAQ" },
              { href: "/#contact", label: "Contact" },
            ].map((link) => 
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-lg font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-lg font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-primary text-white px-8 py-3 rounded-full text-base font-semibold shadow-[0_0_20px_rgba(18,113,91,0.3)]"
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
