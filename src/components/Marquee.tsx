const items = [
  "AI Chatbots", "Hospital Portals", "Workflow Automation", "Business Websites",
  "Appointment Systems", "Data Processing", "Email Automation", "Report Generation",
  "CRM Integration", "Patient Management", "Lead Capture", "Invoice Automation",
];

const Marquee = () => (
  <div className="overflow-hidden border-y border-black/5 dark:border-white/5 py-4 bg-[#F4F1EA] dark:bg-[#16201B] transition-colors duration-300" aria-hidden="true">
    <div className="flex gap-12 animate-marquee motion-reduce:animate-none w-max">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center gap-3 whitespace-nowrap text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em]">
          <span className="w-1.5 h-1.5 bg-primary/80 rounded-full" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
