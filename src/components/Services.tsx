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
  <section id="services" className="relative" aria-labelledby="services-heading">
    <div className="max-w-[1200px] mx-auto px-[5vw] py-20">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="text-xs font-bold text-primary uppercase tracking-[0.1em]">What We Build</span>
        <h2 id="services-heading" className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight leading-tight mt-4 mb-4">
          End-to-End Solutions<br />for Modern Operations
        </h2>
        <p className="text-muted-foreground text-lg max-w-[550px] font-light mb-12">
          From AI-powered automations to beautifully engineered websites — we deliver tools that actually work.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {services.map((s, i) => (
          <div key={s.title} className="glass-card glass-card-hover rounded-2xl p-8 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-25 blur-3xl"
              style={{
                background:
                  i % 3 === 0
                    ? "hsl(var(--accent-blue))"
                    : i % 3 === 1
                    ? "hsl(var(--accent-emerald))"
                    : "hsl(var(--accent-purple))",
              }}
            />
            <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${s.color}`}>
              <s.icon size={22} />
            </div>
            <h3 className="relative font-display text-lg font-bold tracking-tight mb-3">{s.title}</h3>
            <p className="relative text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            <span className="relative inline-block mt-5 text-xs font-semibold text-primary border border-primary/25 px-2.5 py-0.5 rounded">
              {s.tag}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
