const Footer = () => (
  <footer className="border-t border-border px-[5vw] py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
    <div className="font-display font-extrabold text-base">
      Moh's <span className="text-primary">Automation</span>
    </div>
    <div className="flex gap-6">
      <a href="#services" className="hover:text-foreground transition-colors">Services</a>
      <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
      <a href="#waitlist" className="hover:text-foreground transition-colors">Waitlist</a>
      <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
    </div>
    <div>© {new Date().getFullYear()} Moh's Automation. All rights reserved.</div>
  </footer>
);

export default Footer;
