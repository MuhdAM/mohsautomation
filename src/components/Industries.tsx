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
  <section className="max-w-[1200px] mx-auto px-[5vw] py-20">
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <span className="text-xs font-bold text-primary uppercase tracking-[0.1em]">Who We Serve</span>
      <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight leading-tight mt-4 mb-8">
        Built for Your Industry
      </h2>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {industries.map((ind, i) => {
        const c = i % 3 === 0 ? "hsl(var(--accent-blue))" : i % 3 === 1 ? "hsl(var(--accent-emerald))" : "hsl(var(--accent-purple))";
        return (
          <div key={ind.title} className="glass-card glass-card-hover rounded-xl p-6">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ background: `${c.replace(")", " / 0.15)")}` }}>
              <ind.icon size={22} style={{ color: c }} />
            </div>
            <h3 className="font-display text-base font-bold mb-2">{ind.title}</h3>
            <p className="text-muted-foreground text-sm">{ind.desc}</p>
          </div>
        );
      })}
    </motion.div>
  </section>
);

export default Industries;
