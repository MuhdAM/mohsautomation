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
  <section id="services" className="relative bg-white dark:bg-[#101013] border-t border-black/5 dark:border-white/5 transition-colors duration-300" aria-labelledby="services-heading">
    <div className="max-w-[1200px] mx-auto px-[5vw] py-24">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
        <h2 id="services-heading" className="font-display text-[clamp(2rem,3vw,3rem)] font-normal tracking-tight leading-[1.3] max-w-[900px] mx-auto text-foreground mb-16">
          Boost efficiency and growth with smart automation - AI chatbots, CRM systems, and reporting dashboards that streamline operations, reduce costs, and enhance customer engagement
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {services.map((s, i) => (
          <div key={s.title} className="group bg-[#E5FC61] dark:bg-[#151518] border border-black/5 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_10px_40px_-15px_rgba(18,113,91,0.5)] flex flex-col justify-between min-h-[220px]">
            <div className="relative w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white mb-6 group-hover:scale-110 transition-transform duration-300">
              <s.icon size={20} strokeWidth={2} />
            </div>
            <h3 className="relative font-display text-lg font-bold tracking-tight text-foreground">{s.title}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
