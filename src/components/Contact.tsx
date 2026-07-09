import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="relative bg-[#F4F1EA] dark:bg-[#16201B] border-t border-black/5 dark:border-white/5 transition-colors duration-300" aria-labelledby="contact-heading">
    <div className="max-w-[1200px] mx-auto px-[5vw] py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Get in Touch</span>
          <h2 id="contact-heading" className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mt-4 mb-4 text-foreground">
            Ready to Automate?
          </h2>
          <p className="text-muted-foreground text-lg max-w-[500px]">
            Whether you have a specific project in mind or want to explore what AI can do for your business — our team is ready to assist.
          </p>

          <div className="mt-10 bg-gray-50 dark:bg-[#151518] border border-black/5 dark:border-white/5 rounded-2xl p-8 transition-colors duration-300">
            <h4 className="font-display font-bold text-base mb-4 text-foreground">Availability</h4>
            <ul className="space-y-3">
              {[
                "Mon – Fri: 8:00 AM – 6:00 PM (WAT)",
                "Sat: 10:00 AM – 2:00 PM (WAT)",
                "Response time: usually within 2 hours",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(18,113,91,0.6)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <a href="https://wa.me/2349155733195" target="_blank" rel="noopener noreferrer" className="bg-gray-50 dark:bg-[#151518] border border-black/5 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 rounded-2xl p-6 flex gap-5 items-start group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/10 group-hover:scale-110 transition-transform duration-300">
              <Phone size={24} className="text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Phone / WhatsApp</span>
              <div className="font-display font-bold text-xl mt-1 text-foreground">09155733195</div>
              <span className="text-sm text-muted-foreground mt-1 block">Tap to message on WhatsApp</span>
            </div>
          </a>

          <a href="mailto:mohsautomation@gmail.com" className="bg-gray-50 dark:bg-[#151518] border border-black/5 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 rounded-2xl p-6 flex gap-5 items-start group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/10 group-hover:scale-110 transition-transform duration-300">
              <Mail size={24} className="text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Email</span>
              <div className="font-display font-bold text-xl mt-1 text-foreground">mohsautomation@gmail.com</div>
              <span className="text-sm text-muted-foreground mt-1 block">For project enquiries & quotes</span>
            </div>
          </a>

          <div className="bg-gray-50 dark:bg-[#151518] border border-black/5 dark:border-white/5 rounded-2xl p-6 flex gap-5 items-start transition-colors duration-300">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/10">
              <MapPin size={24} className="text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Location</span>
              <div className="font-display font-bold text-xl mt-1 text-foreground">Abuja, Nigeria</div>
              <span className="text-sm text-muted-foreground mt-1 block">Serving clients globally</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
