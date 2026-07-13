import { motion } from "framer-motion";
import {
  Database,
  Phone,
  MessageSquare,
  Calendar,
  Share2,
  Sparkles,
  Zap,
  ArrowRight,
  Check,
  MessageCircle,
  Bot,
  User,
  Utensils,
  ShoppingBag,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

/* ---------- Visual 1: Integration Hub ---------- */
const IntegrationHub = () => {
  const spokes = [
    { Icon: Database, label: "Database", angle: 0 },
    { Icon: Phone, label: "Voice", angle: 60 },
    { Icon: MessageSquare, label: "WhatsApp", angle: 120 },
    { Icon: Calendar, label: "Calendar", angle: 180 },
    { Icon: Share2, label: "Meta", angle: 240 },
    { Icon: Sparkles, label: "OpenAI", angle: 300 },
  ];

  const radius = 38; // % of container

  return (
    <div className="relative w-full aspect-square max-w-[440px] mx-auto rounded-3xl bg-gradient-to-br from-[#0d1a1f] to-[#050c0f] border border-white/10 shadow-2xl overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),transparent_60%)]" />

      {/* Dashed circle */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(20,184,166,0.25)" strokeWidth="0.3" strokeDasharray="1 1.5" />
        {spokes.map((s, i) => {
          const rad = (s.angle * Math.PI) / 180;
          const x = 50 + radius * Math.cos(rad);
          const y = 50 + radius * Math.sin(rad);
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="rgba(20,184,166,0.35)"
              strokeWidth="0.25"
              strokeDasharray="1 1"
            />
          );
        })}
      </svg>

      {/* Center hub */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(20,184,166,0.5)] border border-teal-300/40">
          <span className="text-white text-2xl md:text-3xl font-black font-display leading-none">M</span>
          <span className="text-[8px] md:text-[9px] text-white/90 font-bold uppercase tracking-wider mt-1">Mohs AI</span>
        </div>
      </motion.div>

      {/* Spokes */}
      {spokes.map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const x = 50 + radius * Math.cos(rad);
        const y = 50 + radius * Math.sin(rad);
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/15 flex items-center justify-center text-teal-300 shadow-lg hover:border-teal-400/60 hover:text-teal-200 transition-colors">
              <s.Icon size={20} strokeWidth={1.8} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

/* ---------- Visual 2: Workflow Builder Mockup ---------- */
const WorkflowMockup = () => {
  const steps = [
    { n: 1, Icon: MessageCircle, title: "New Order Received via WhatsApp", meta: "Trigger", status: "Live", color: "text-emerald-400", ring: "bg-emerald-500/10 text-emerald-300" },
    { n: 2, Icon: Bot, title: "AI Parses Order Details", meta: "Action · GPT", status: "Running", color: "text-teal-400", ring: "bg-teal-500/10 text-teal-300" },
    { n: 3, Icon: Utensils, title: "Kitchen Database Updated", meta: "Output", status: "Synced", color: "text-cyan-400", ring: "bg-cyan-500/10 text-cyan-300" },
  ];

  return (
    <div className="relative w-full max-w-[500px] mx-auto rounded-2xl bg-[#0b1418] border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-3 text-[11px] text-slate-400 font-mono">workflows / order-pipeline</span>
      </div>

      <div className="p-4 md:p-5 space-y-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i, duration: 0.5 }}
            className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-teal-400/40 transition-colors"
          >
            <div className={`w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center ${s.ring} shrink-0`}>
              <s.Icon size={18} strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono text-slate-500">STEP {s.n}</span>
                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${s.ring}`}>{s.status}</span>
              </div>
              <p className="text-sm md:text-[15px] font-semibold text-white truncate">{s.title}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{s.meta}</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-teal-500/15 border border-teal-400/30 flex items-center justify-center shrink-0">
              <Check size={12} className="text-teal-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ---------- Visual 3: Chat UI Mockup ---------- */
const ChatMockup = () => {
  const messages = [
    { role: "customer", text: "Hi, can I book a table for 4 tonight at 8pm?" },
    { role: "ai", text: "Absolutely! I can book a table for 4 at 8:00 PM tonight. Any dietary preferences?" },
    { role: "customer", text: "One vegetarian, please." },
    { role: "ai", text: "Noted ✓ Table confirmed. Confirmation sent to your WhatsApp." },
  ];

  return (
    <div className="relative w-full max-w-[460px] mx-auto rounded-2xl bg-[#0b1418] border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
              <Bot size={16} className="text-white" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0b1418]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-none">Mohs AI Agent</p>
            <p className="text-[10px] text-emerald-400 mt-0.5">Online · Responding</p>
          </div>
        </div>
        <ShoppingBag size={16} className="text-slate-400" />
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3 bg-gradient-to-b from-transparent to-teal-500/[0.03]">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i, duration: 0.4 }}
            className={`flex items-end gap-2 ${m.role === "customer" ? "justify-end" : "justify-start"}`}
          >
            {m.role === "ai" && (
              <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                <Bot size={12} className="text-teal-300" />
              </div>
            )}
            <div
              className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                m.role === "customer"
                  ? "bg-teal-500 text-slate-900 font-medium rounded-br-sm"
                  : "bg-white/[0.06] text-slate-100 border border-white/10 rounded-bl-sm"
              }`}
            >
              {m.text}
            </div>
            {m.role === "customer" && (
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <User size={12} className="text-slate-300" />
              </div>
            )}
          </motion.div>
        ))}

        {/* Typing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-1.5 pl-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" style={{ animationDelay: "300ms" }} />
        </motion.div>
      </div>
    </div>
  );
};

/* ---------- Text Block ---------- */
type BlockText = {
  eyebrow: string;
  heading: string;
  body: string;
  cta?: { label: string; href: string; variant: "solid" | "outline" };
};

const TextBlock = ({ eyebrow, heading, body, cta }: BlockText) => (
  <div className="flex flex-col">
    <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.2em] mb-4">
      {eyebrow}
    </span>
    <h3 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-white leading-[1.1] tracking-tight">
      {heading}
    </h3>
    <p className="mt-5 text-slate-300 text-base md:text-lg leading-relaxed">
      {body}
    </p>
    {cta && (
      <div className="mt-8">
        {cta.variant === "solid" ? (
          <a
            href={cta.href}
            className="group inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-300 text-slate-900 font-bold px-7 py-3.5 rounded-full text-sm md:text-base shadow-[0_0_30px_rgba(20,184,166,0.35)] hover:shadow-[0_0_45px_rgba(20,184,166,0.55)] transition-all duration-300 hover:-translate-y-0.5"
          >
            {cta.label}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        ) : (
          <a
            href={cta.href}
            className="group inline-flex items-center gap-2 border border-slate-700 text-white hover:border-teal-400 hover:text-teal-400 font-semibold px-7 py-3.5 rounded-full text-sm md:text-base transition-colors duration-300"
          >
            {cta.label}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    )}
  </div>
);

/* ---------- Row ---------- */
const Row = ({
  reverse = false,
  text,
  visual,
}: {
  reverse?: boolean;
  text: BlockText;
  visual: React.ReactNode;
}) => (
  <motion.div
    {...fadeUp}
    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${
      reverse ? "lg:[&>*:first-child]:order-2" : ""
    }`}
  >
    <TextBlock {...text} />
    <div className="w-full">{visual}</div>
  </motion.div>
);

const Services = () => (
  <section
    id="services"
    className="relative bg-[#050C0F] border-t border-white/5 overflow-hidden"
    aria-labelledby="services-heading"
  >
    {/* Ambient background accents */}
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-teal-500/[0.06] blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />
    </div>

    <div className="relative max-w-[1200px] mx-auto px-6 md:px-[5vw] py-20 md:py-28">
      {/* Section header */}
      <motion.div
        {...fadeUp}
        className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
      >
        <span className="inline-flex items-center gap-2 text-[11px] font-bold text-teal-400 uppercase tracking-[0.2em] mb-5">
          <Zap size={12} /> What We Do
        </span>
        <h2
          id="services-heading"
          className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold tracking-tight leading-[1.05] text-white"
        >
          Smart Automation Solutions.
        </h2>
        <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed">
          High-ticket AI systems engineered for operators who are done paying middleman fees.
        </p>
      </motion.div>

      {/* Z-pattern blocks */}
      <div className="space-y-24 md:space-y-32">
        <Row
          text={{
            eyebrow: "Integration Hub",
            heading: "We Know the Systems that Get Results.",
            body: "Our clients generate massive ROI powered by the automation strategies and zero-commission ordering systems we design and implement. We have whole-of-market access to the best tools.",
            cta: { label: "Book a Call", href: "#contact", variant: "solid" },
          }}
          visual={<IntegrationHub />}
        />

        <Row
          reverse
          text={{
            eyebrow: "The Anti-Agency Trap",
            heading: "Don't fall into the AI trap.",
            body: "Many AI systems and traditional marketing agencies charge massive monthly fees or 20% commissions. We build bespoke Tap-to-Order systems and Voice AI agents specifically for your business needs without the bloated middleman fees.",
            cta: { label: "Let's find out", href: "#contact", variant: "outline" },
          }}
          visual={<WorkflowMockup />}
        />

        <Row
          text={{
            eyebrow: "Hands-Off Deployment",
            heading: "We create hands-off AI systems for you.",
            body: "We build automation that plugs straight into your existing systems for fast, disruption-free deployment. From day one, your team adopts the new tools smoothly and confidently.",
          }}
          visual={<ChatMockup />}
        />
      </div>
    </div>
  </section>
);

export default Services;
