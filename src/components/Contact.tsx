import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="bg-elevated" aria-labelledby="contact-heading">
    <div className="max-w-[1200px] mx-auto px-[5vw] py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs font-bold text-primary uppercase tracking-[0.1em]">Get in Touch</span>
          <h2 id="contact-heading" className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight leading-tight mt-4 mb-4">
            Let's Talk<br />About Your Needs
          </h2>
          <p className="text-muted-foreground max-w-[420px]">
            Whether you have a project in mind, a question about our services, or just want to explore what AI can do for your business — we'd love to hear from you.
          </p>

          <div className="mt-8 bg-surface border border-border rounded-xl p-6">
            <h4 className="font-display font-bold text-sm mb-3">Availability</h4>
            <ul className="space-y-2">
              {[
                "Mon – Fri: 8:00 AM – 6:00 PM (WAT)",
                "Sat: 10:00 AM – 2:00 PM (WAT)",
                "Response time: usually within a few hours",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
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
          className="flex flex-col gap-4"
        >
          <a href="https://wa.me/2349155733195" target="_blank" rel="noopener noreferrer" className="bg-surface border border-border rounded-xl p-5 flex gap-4 items-start hover:border-primary/35 hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/12 flex items-center justify-center flex-shrink-0">
              <Phone size={20} className="text-primary" />
            </div>
            <div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Phone / WhatsApp</span>
              <div className="font-semibold mt-0.5">09155733195</div>
              <span className="text-xs text-muted-foreground">Tap to message on WhatsApp</span>
            </div>
          </a>

          <a href="mailto:mohsautomation@gmail.com" className="bg-surface border border-border rounded-xl p-5 flex gap-4 items-start hover:border-primary/35 hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-xl bg-accent/12 flex items-center justify-center flex-shrink-0">
              <Mail size={20} className="text-accent" />
            </div>
            <div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</span>
              <div className="font-semibold mt-0.5">mohsautomation@gmail.com</div>
              <span className="text-xs text-muted-foreground">For project enquiries & quotes</span>
            </div>
          </a>

          <div className="bg-surface border border-border rounded-xl p-5 flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-purple-500/12 flex items-center justify-center flex-shrink-0">
              <MapPin size={20} className="text-purple-400" />
            </div>
            <div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</span>
              <div className="font-semibold mt-0.5">Abuja, Nigeria</div>
              <span className="text-xs text-muted-foreground">Serving clients globally</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
