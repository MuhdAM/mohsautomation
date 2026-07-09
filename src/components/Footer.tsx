import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#101013] text-white">
    {/* Upper CTA Section */}
    <div className="border-t border-white/5 pt-24 pb-16 px-[5vw]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-6">
            The Future <br/>
            Belongs to Those <br/>
            Who Automate <br/>
            Today
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Speak to us today to get started
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-bold shadow-[0_0_20px_rgba(18,113,91,0.3)] hover:bg-primary/90 transition-colors"
          >
            Get started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-[#151518]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50"></div>
          <img 
            src="/ui_mockup.png" 
            alt="AI Automation Dashboard" 
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </div>

    {/* Lower Footer Grid */}
    <div className="border-t border-white/5 py-16 px-[5vw] bg-[#151518]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="flex flex-col gap-6 md:col-span-1">
          <div className="font-display font-bold text-xl text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
              <span className="text-white text-[12px] font-black">M</span>
            </div>
            Moh's <span className="text-primary font-light">Automation</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed pr-4">
            A Leading AI Automation Agency focusing on bespoke AI for businesses of all sizes.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm tracking-wider uppercase text-white/50 mb-2">Product</h4>
          <a href="/#services" className="text-muted-foreground hover:text-white transition-colors text-sm font-medium">AI Automation</a>
          <a href="/#services" className="text-muted-foreground hover:text-white transition-colors text-sm font-medium">Systems</a>
          <a href="/#services" className="text-muted-foreground hover:text-white transition-colors text-sm font-medium">Packages</a>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-bold text-white mb-2">Company</span>
          <a href="/#why-us" className="text-muted-foreground hover:text-white transition-colors text-sm font-medium">About us</a>
          <a href="/#contact" className="text-muted-foreground hover:text-white transition-colors text-sm font-medium">Contact</a>
          <a href="tel:09155733195" className="text-muted-foreground hover:text-white transition-colors text-sm font-medium">091 557 33195</a>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-bold text-white mb-2">Resources</span>
          <Link to="/demos" className="text-muted-foreground hover:text-white transition-colors text-sm font-medium">Demos</Link>
          <a href="/#faq" className="text-muted-foreground hover:text-white transition-colors text-sm font-medium">Help center</a>
          <a href="/#contact" className="text-muted-foreground hover:text-white transition-colors text-sm font-medium">Support</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
