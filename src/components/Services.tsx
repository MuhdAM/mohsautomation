import { motion } from "framer-motion";
import { Bot, Building2, Globe, MessageSquare, BarChart3, Link2 } from "lucide-react";

const services = [
  { icon: Bot, color: "bg-primary/12 text-primary", title: "AI Workflow Automation", desc: "Automate repetitive tasks across your entire operation — from data entry to complex multi-step processes. Smart pipelines that run 24/7.", tag: "For all businesses" },
  { icon: Building2, color: "bg-accent/12 text-accent", title: "Healthcare Digital Systems", desc: "Patient portals, appointment scheduling, medical record automation, and compliance-ready platforms for hospitals and clinics.", tag: "For hospitals & clinics" },
  { icon: Globe, color: "bg-purple-500/12 text-purple-400", title: "High-Converting Websites", desc: "Stunning, fast-loading business websites designed to convert visitors into clients. We handle design to deployment.", tag: "For all businesses" },
  { icon: MessageSquare, color: "bg-amber-500/12 text-amber-400", title: "AI Chatbots & Assistants", desc: "Intelligent chatbots that handle inquiries, patient triage, booking, and support — trained on your business knowledge.", tag: "For all sectors" },
  { icon: BarChart3, color: "bg-primary/12 text-primary", title: "Automated Reporting", desc: "Systems that automatically pull data, generate insights, and deliver polished reports to your inbox without manual effort.", tag: "Save hours weekly" },
  { icon: Link2, color: "bg-accent/12 text-accent", title: "Systems Integration", desc: "Connect your existing tools — EHRs, CRMs, accounting software — so data flows automatically without manual syncing.", tag: "Plug & play setup" },
];

const Services = () => (
  <section id="services" className="relative bg-[#101013] border-t border-white/5" aria-labelledby="services-heading">
    <div className="max-w-[1200px] mx-auto px-[5vw] py-24">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center md:text-left">
        <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">What We Build</span>
        <h2 id="services-heading" className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mt-4 mb-4 text-white">
          End-to-End Solutions<br />for Modern Enterprise
        </h2>
        <p className="text-muted-foreground text-lg max-w-[600px] font-normal mb-16">
          From intelligent AI agents to high-performance digital infrastructure — we engineer systems that drive growth and cut costs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((s, i) => (
          <div key={s.title} className="group bg-[#151518] border border-white/5 hover:border-primary/50 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(18,113,91,0.5)]">
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500"
            />
            <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
              <s.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="relative font-display text-xl font-bold tracking-tight mb-3 text-white">{s.title}</h3>
            <p className="relative text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
            <span className="relative inline-block text-[11px] font-bold text-primary uppercase tracking-wider bg-primary/5 border border-primary/20 px-3 py-1 rounded-full">
              {s.tag}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
