const items = [
  "AI Chatbots", "Hospital Portals", "Workflow Automation", "Business Websites",
  "Appointment Systems", "Data Processing", "Email Automation", "Report Generation",
  "CRM Integration", "Patient Management", "Lead Capture", "Invoice Automation",
];

const Marquee = () => (
  <div className="overflow-hidden border-y border-border py-4 bg-elevated" aria-hidden="true">
    <div className="flex gap-12 animate-marquee motion-reduce:animate-none w-max">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center gap-3 whitespace-nowrap text-xs font-semibold text-muted-foreground uppercase tracking-widest">
          <span className="w-1 h-1 bg-primary rounded-full" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
