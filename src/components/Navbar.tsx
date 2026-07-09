import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-4 bg-background/85 backdrop-blur-xl border-b border-border">
      <Link to="/" className="font-display text-xl font-extrabold tracking-tight" aria-label="Moh's Automation — Home">
        Moh's <span className="text-primary">Automation</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link to="/demos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Demos</Link>
        <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
        <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process</a>
        <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
      </div>

      <a href="#waitlist" className="hidden md:inline-flex bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-85 transition-opacity">
        Join Waitlist
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
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border flex flex-col items-center gap-4 py-6 md:hidden"
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
                  href={link.href === "/#services" ? "#services" : link.href === "/#how-it-works" ? "#how-it-works" : link.href === "/#faq" ? "#faq" : "#contact"} // Keep hash if on same page, but this is simpler
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-base"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-base"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold"
            >
              Join Waitlist
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
