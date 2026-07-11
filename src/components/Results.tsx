import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, CheckCircle, Zap, Shield, BarChart, FileText } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const iconMap: Record<string, any> = {
  TrendingUp,
  Clock,
  Users,
  CheckCircle,
  Zap,
  Shield,
  BarChart,
  FileText
};

const defaultCases = [
  {
    icon: Clock,
    sector: "Healthcare",
    title: "Cut patient intake time by 68%",
    body: "Deployed an AI intake assistant and automated triage workflow for a multi-site clinic network. Front-desk staff freed to focus on care, not paperwork.",
    metrics: [
      { value: "68%", label: "Faster intake" },
      { value: "24/7", label: "Coverage" },
    ],
  },
  {
    icon: TrendingUp,
    sector: "Retail Operations",
    title: "₦42M in recovered revenue",
    body: "Built an automated order-recovery pipeline and inventory sync across three storefronts. Failed orders now self-heal before they hit the customer.",
    metrics: [
      { value: "3.4x", label: "Order recovery" },
      { value: "9 wks", label: "To live" },
    ],
  },
  {
    icon: Users,
    sector: "Professional Services",
    title: "40 hrs/week returned to the team",
    body: "Replaced spreadsheet reporting with an automated client dashboard and AI briefing generator. Partners walk into meetings prepared, not scrambling.",
    metrics: [
      { value: "40 hr", label: "Saved weekly" },
      { value: "0", label: "Manual reports" },
    ],
  },
];

const Results = () => {
  const { data: dbCases } = useQuery({
    queryKey: ["results"],
    queryFn: async () => {
      const { data, error } = await supabase.from("results").select("*").order("created_at", { ascending: true });
      if (error) throw error;
      return data.map((d) => ({
        icon: iconMap[d.icon] || CheckCircle,
        sector: d.sector,
        title: d.title,
        body: d.body,
        metrics: [
          { value: d.metric_1_value, label: d.metric_1_label },
          { value: d.metric_2_value, label: d.metric_2_label }
        ]
      }));
    },
  });

  const cases = dbCases && dbCases.length > 0 ? dbCases : defaultCases;

  return (
  <section
    id="results"
    aria-labelledby="results-heading"
    className="relative bg-[#F4F1EA] dark:bg-[#09151A] border-t border-black/5 dark:border-white/5 py-24 transition-colors duration-300"
  >
    <div className="max-w-[1200px] mx-auto px-[5vw]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[720px] mb-16"
      >
        <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Measurable Outcomes</span>
        <h2
          id="results-heading"
          className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mt-4 text-foreground"
        >
          Results, not roadmaps.
        </h2>
        <p className="mt-5 text-muted-foreground text-[clamp(1rem,1.2vw,1.1rem)] leading-relaxed">
          Every engagement ships to production and ships to a number. Here is what recent deployments have moved for our clients.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <c.icon size={18} className="text-primary" strokeWidth={2} />
              </div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">
                {c.sector}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold tracking-tight text-foreground leading-snug mb-3">
              {c.title}
            </h3>
            <p className="text-muted-foreground text-[14px] leading-relaxed flex-grow">
              {c.body}
            </p>

            <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10 grid grid-cols-2 gap-4">
              {c.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-2xl font-bold text-foreground leading-none">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mt-1.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground/60 mt-8 italic">
        Case studies represent typical engagements. Individual results vary by scope and data readiness.
      </p>
    </div>
  </section>
  );
};

export default Results;
