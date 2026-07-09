const Footer = () => (
  <footer className="border-t border-white/5 bg-[#101013] px-[5vw] py-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
      <div className="font-display font-bold text-lg text-white flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
          <span className="text-white text-[10px] font-black">M</span>
        </div>
        Moh's <span className="text-primary font-light">Automation</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 font-medium">
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
      <div className="text-center md:text-right">
        © {new Date().getFullYear()} Moh's Automation.<br className="md:hidden" /> All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
