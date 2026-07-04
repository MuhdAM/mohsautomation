import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

// 👉 Paste your unlisted YouTube or Vimeo share URL here.
// Examples:
//   YouTube: "https://youtu.be/dQw4w9WgXcQ" or "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//   Vimeo:   "https://vimeo.com/123456789"
const VIDEO_URL = "";

function getEmbedUrl(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    // YouTube
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
      // shorts / embed already
      const parts = u.pathname.split("/").filter(Boolean);
      if (parts[0] === "embed" || parts[0] === "shorts") {
        return `https://www.youtube.com/embed/${parts[1]}`;
      }
    }
    // Vimeo
    if (u.hostname.includes("vimeo.com")) {
      const parts = u.pathname.split("/").filter(Boolean);
      const id = parts[0];
      const hash = parts[1]; // private hash for unlisted vids
      return hash
        ? `https://player.vimeo.com/video/${id}?h=${hash}`
        : `https://player.vimeo.com/video/${id}`;
    }
    return url;
  } catch {
    return null;
  }
}

const Demo = () => {
  const embedUrl = getEmbedUrl(VIDEO_URL);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEOHead
        title="Demo"
        description="Watch a private demo of how Moh's Automation builds AI automations that save your team hours every week."
        canonicalPath="/demo"
        noIndex
      />
      <Navbar />

      <main className="flex-1 pt-24 md:pt-32 pb-20 px-[5vw]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Private Demo
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              See <span className="text-gradient">Moh's Automation</span> in action
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A quick walkthrough of how we build automations that save your team hours every week. Watch it, then let's talk.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl glow-primary">
            <div className="aspect-video w-full">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title="Moh's Automation demo"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-secondary/30">
                  <p className="font-display text-2xl font-bold mb-2">Demo video coming soon</p>
                  <p className="text-muted-foreground max-w-md text-sm">
                    The video will appear here once the share link is added.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Like what you see? Let's map out an automation for your business.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity glow-primary-hover"
            >
              Book a call
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;
