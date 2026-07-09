import { motion } from "framer-motion";
import { Workflow, BarChart, PenTool, Video, Map, User, Layout, Divide, Smartphone, MessageSquare } from "lucide-react";

const features = [
  { icon: MessageSquare, label: "Marketing" },
  { icon: Smartphone, label: "CRM" },
  { icon: Workflow, label: "Workflow" },
  { icon: Layout, label: "Analytics" },
  { icon: Layout, label: "Forecasting" },
  { icon: User, label: "Content" },
  { icon: PenTool, label: "Portfolio" },
  { icon: Divide, label: "Divider" },
  { icon: Divide, label: "Spacer" },
  { icon: User, label: "Personas" },
  { icon: Smartphone, label: "Ecommerce" },
  { icon: PenTool, label: "Text Content" },
  { icon: MessageSquare, label: "Popups" },
  { icon: Video, label: "Video" },
  { icon: Map, label: "Insights" },
];

const FeaturesBadges = () => {
  return (
    <section className="bg-[#FDFBF7] dark:bg-[#060E12] py-24 border-t border-black/5 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[5vw] text-center mb-16">
        <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Capabilities</span>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mt-4 text-foreground">
          100+ AI Uses in Your Business.
        </h2>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden">
        {/* Subtle fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-[#101013] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-[#101013] to-transparent pointer-events-none" />

        <div className="flex flex-col gap-6 py-8">
          {/* Row 1 - Left */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 pr-4">
            {[...features.slice(0, 5), ...features.slice(0, 5), ...features.slice(0, 5), ...features.slice(0, 5)].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#151518] hover:border-primary transition-colors cursor-default whitespace-nowrap"
              >
                <feature.icon size={18} className="text-primary" />
                <span className="font-medium text-sm text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Row 2 - Right */}
          <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused] gap-4 pr-4">
            {[...features.slice(5, 10), ...features.slice(5, 10), ...features.slice(5, 10), ...features.slice(5, 10)].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#151518] hover:border-primary transition-colors cursor-default whitespace-nowrap"
              >
                <feature.icon size={18} className="text-primary" />
                <span className="font-medium text-sm text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Row 3 - Left */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 pr-4">
            {[...features.slice(10, 15), ...features.slice(10, 15), ...features.slice(10, 15), ...features.slice(10, 15)].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#151518] hover:border-primary transition-colors cursor-default whitespace-nowrap"
              >
                <feature.icon size={18} className="text-primary" />
                <span className="font-medium text-sm text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(18,113,91,0.3)] hover:bg-primary/90 transition-all duration-300"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBadges;
