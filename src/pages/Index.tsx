import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Industries from "@/components/Industries";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AmbientOrbs from "@/components/AmbientOrbs";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground relative">
    <AmbientOrbs />
    <SEOHead
      description="Moh's Automation is an AI automation agency in Abuja, Nigeria. We build custom AI chatbots, workflow automations, healthcare digital systems, and high-converting websites. Cut costs and grow faster."
      canonicalPath="/"
    />
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
    >
      Skip to main content
    </a>
    <Navbar />
    <main id="main-content">
      <Hero />
      <Marquee />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Industries />
      <FAQ />
      <Waitlist />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
