import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, X, Share2 } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

interface Demo {
  id: string;
  title: string;
  description: string;
  category: string;
  youtubeId?: string;
  instagramId?: string;
  orientation: "portrait" | "landscape";
}

const CATEGORIES = [
  "All Demos",
  "AI Voice Receptionists",
  "Zero-Commission Ordering Platforms"
];

const demos: Demo[] = [
  {
    id: "apex-ai-receptionist",
    title: "APEX AI Receptionist",
    description:
      "Watch our AI receptionist handle real customer queries with perfect accuracy, quoting prices and booking appointments in real time.",
    category: "AI Voice Receptionists",
    youtubeId: "_NgfmJ3OWfw",
    orientation: "portrait",
  },
  {
    id: "lightning-fast-digital-menus",
    title: "Lightning-Fast Digital Menus",
    description: "Give your customers a frictionless tap-to-order experience. The system automatically calculates the cart and sends the complete order straight to your WhatsApp.",
    category: "Zero-Commission Ordering Platforms",
    instagramId: "DXmJifGCKi2",
    orientation: "portrait",
  },
  {
    id: "zero-commission-delivery-hubs",
    title: "Zero-Commission Delivery Hubs",
    description: "Stop giving away 20% of your profits to delivery apps. Own your customer data with a custom ordering page that routes delivery requests directly to your kitchen.",
    category: "Zero-Commission Ordering Platforms",
    instagramId: "DXaytNWiKKC",
    orientation: "portrait",
  },
  {
    id: "premium-dine-in-ordering",
    title: "Premium Dine-In Ordering",
    description: "An elegant bridge between a casual cafe experience and digital convenience. Let dine-in or takeout guests order via WhatsApp without downloading any apps.",
    category: "Zero-Commission Ordering Platforms",
    instagramId: "DXtsduECATY",
    orientation: "portrait",
  }
];

function getThumbUrl(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

const DemoCard = ({ demo }: { demo: Demo }) => {
  const [playing, setPlaying] = useState(false);

  const handleShare = async () => {
    // Share the current page URL
    const shareUrl = window.location.href;
    const shareTitle = `${demo.title} - Moh's Automation`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: `Check out this AI demo: ${demo.title}`,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Share cancelled or failed", err);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col"
    >
      {/* Video / Thumbnail */}
      <div
        className={`relative rounded-2xl overflow-hidden border border-border bg-card shadow-lg ${
          demo.orientation === "portrait"
            ? "aspect-[9/16] max-w-[320px] mx-auto w-full"
            : "aspect-video w-full"
        }`}
      >
        {demo.instagramId ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.instagram.com/p/${demo.instagramId}/embed/`}
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            allowFullScreen
          />
        ) : demo.youtubeId ? (
          playing ? (
            <>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${demo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={demo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setPlaying(false)}
                className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-sm text-white p-1.5 rounded-full hover:bg-black/80 transition-colors"
                aria-label="Close video"
              >
                <X size={16} />
              </button>
            </>
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 w-full h-full cursor-pointer"
              aria-label={`Play ${demo.title} demo`}
            >
              <img
                src={getThumbUrl(demo.youtubeId!)}
                alt={`${demo.title} thumbnail`}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play size={28} className="text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
          )
        ) : null}
      </div>

      {/* Info */}
      <div className="mt-5 text-center max-w-[320px] mx-auto">
        <h3 className="font-display text-lg font-bold tracking-tight">
          {demo.title}
        </h3>
        <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">
          {demo.description}
        </p>
        <button 
          onClick={handleShare}
          className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors bg-primary/10 px-3 py-1.5 rounded-full"
        >
          <Share2 size={14} />
          Share Demo
        </button>
      </div>
    </motion.div>
  );
};

const Demos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(
    initialCategory && CATEGORIES.includes(initialCategory) ? initialCategory : "All Demos"
  );

  useEffect(() => {
    const param = searchParams.get("category");
    if (param && CATEGORIES.includes(param) && param !== activeCategory) {
      setActiveCategory(param);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "All Demos") {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ category }, { replace: true });
    }
  };

  const filteredDemos = demos.filter(
    (demo) => activeCategory === "All Demos" || demo.category === activeCategory
  );

  return (
  <div className="min-h-screen bg-background text-foreground flex flex-col">
    <SEOHead
      title="Demos"
      description="Watch live demos of Moh's Automation AI solutions — AI receptionists, chatbots, workflow automations, and more."
      canonicalPath="/demos"
    />
    <Navbar />

    <main className="flex-1 pt-24 md:pt-32 pb-20 px-[5vw]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-[0.1em]">
            Live Demos
          </span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight leading-tight mt-4">
            See Our AI Solutions{" "}
            <span className="text-gradient">in Action</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — watch real demos of our AI
            automations handling live scenarios.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Demo Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredDemos.map((demo) => (
            <DemoCard key={demo.id} demo={demo} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Like what you see? Let's build something like this for your
            business.
          </p>
          <a
            href="https://wa.me/2349155733195?text=I%20just%20watched%20your%20demos.%20Let's%20build%20this%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full bg-gradient-primary text-accent-foreground glow-primary hover:-translate-y-0.5 glow-primary-hover transition-all"
          >
            Get This For Your Business
          </a>
        </motion.div>
      </div>
    </main>

    <Footer />
  </div>
  );
};

export default Demos;
