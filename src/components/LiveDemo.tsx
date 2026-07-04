import { motion } from "framer-motion";
import { Check, Share2, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const bullets = [
  "Answers complex, multi-part questions instantly.",
  "Maintains deep local context (pricing, addresses, operating hours).",
  "Captures contact details and pushes them to your CRM.",
];

const SHARE_TITLE = "Watch: AI Receptionist Demo — Moh's Automation";
const SHARE_TEXT = "See how our Voice AI handles a complex booking query and secures the lead in under a minute.";

const LiveDemo = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const getShareUrl = () =>
    typeof window !== "undefined"
      ? `${window.location.origin}/#live-demo`
      : "https://mohsautomation.lovable.app/#live-demo";

  const handleShare = async () => {
    const url = getShareUrl();
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url });
        return;
      } catch {
        // user cancelled or share failed — fall through to copy
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ title: "Link copied!", description: "Share it anywhere — it opens the demo right on your site." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Couldn't copy link", description: url, variant: "destructive" });
    }
  };

  return (
    <section id="live-demo" className="py-20 md:py-28 px-[5vw] bg-[hsl(var(--bg-elevated))]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-bold text-primary uppercase tracking-[0.1em]">Live Demo</span>
        <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight leading-tight mt-4">
          Watch Our AI Receptionist <span className="text-gradient">in Action</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          See how our Voice AI perfectly handles a complex 6-part booking query, quotes local prices, and secures the lead in under a minute.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Vertical video (YouTube Shorts 9:16) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-full"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl glow-primary w-full max-w-[350px] aspect-[9/16]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/qffUWO7yYHM?rel=0&modestbranding=1"
              title="AI Receptionist Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <button
            onClick={handleShare}
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-colors"
            aria-label="Share this demo"
          >
            {copied ? <LinkIcon size={16} /> : <Share2 size={16} />}
            {copied ? "Link copied" : "Share this demo"}
          </button>
        </motion.div>

        {/* Copy & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              Beyond a Basic Chatbot.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your customers don't want to talk to rigid, frustrating bots. They want fast, accurate answers. Our AI acts as a fully trained digital employee for your brand.
            </p>

            <ul className="space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground/90">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/2349155733195?text=I%20just%20watched%20the%20AI%20Receptionist%20demo.%20Let's%20build%20this%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full bg-gradient-primary text-accent-foreground glow-primary hover:-translate-y-0.5 glow-primary-hover transition-all w-full sm:w-auto"
            >
              Get This For Your Business
            </a>
            <p className="mt-3 text-sm text-muted-foreground text-center sm:text-left">
              Free 7-day prototype available for qualified businesses.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default LiveDemo;
