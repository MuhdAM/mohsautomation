import { motion } from "framer-motion";
import { Building2, Briefcase, ShoppingCart, Truck, GraduationCap, Scale } from "lucide-react";

const industries = [
  { icon: Building2, title: "Hospitals & Clinics", desc: "Patient management, appointment automation, billing systems, and compliance-ready portals." },
  { icon: Briefcase, title: "SMEs & Startups", desc: "Lead generation, CRM automation, sales pipelines, and professional websites that convert." },
  { icon: ShoppingCart, title: "Retail & E-commerce", desc: "Order processing, inventory automation, customer support bots, and storefront sites." },
  { icon: Truck, title: "Logistics & Operations", desc: "Route optimization, document automation, reporting dashboards, and tracking portals." },
  { icon: GraduationCap, title: "Education & NGOs", desc: "Student management systems, donation automation, outreach websites, and communication flows." },
  { icon: Scale, title: "Professional Services", desc: "Law firms, consultancies, and agencies — client portals, document automation, and booking systems." },
];

const Industries = () => (
  <section className="relative bg-[#FDFBF7] dark:bg-[#101013] border-t border-black/5 dark:border-white/5 py-24 transition-colors duration-300">
    <div className="max-w-[1200px] mx-auto px-[5vw]">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center md:text-left mb-16">
        <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Who We Serve</span>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mt-4 text-foreground">
          Built for Your Industry
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {industries.map((ind) => {
          return (
            <div key={ind.title} className="bg-gray-50 dark:bg-[#151518] border border-black/5 dark:border-white/5 hover:border-primary/50 rounded-2xl p-8 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_10px_30px_-15px_rgba(18,113,91,0.4)]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                <ind.icon size={24} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">{ind.title}</h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">{ind.desc}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Industries;
