import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What kind of businesses do you work with?", a: "We work with businesses of all sizes — from healthcare providers and hospitals to startups, e-commerce stores, and professional services firms. If you have repetitive processes or need a web presence, we can help." },
  { q: "How long does a typical project take?", a: "Most projects are delivered within 2–4 weeks. Simple automations can be live in days, while complex systems with multiple integrations may take 4–6 weeks. We'll give you a clear timeline before we start." },
  { q: "Do I need technical knowledge to use your solutions?", a: "Not at all. We build everything to be user-friendly and provide full training for your team. Our systems are designed so anyone can use them without coding knowledge." },
  { q: "What does 'founder pricing' mean for waitlist members?", a: "As an early-stage company, we're offering our first clients significantly reduced rates — typically 30–50% below our standard pricing — in exchange for feedback and testimonials as we grow." },
  { q: "Can you integrate with tools we already use?", a: "Absolutely. We specialize in connecting existing tools — CRMs, EHRs, accounting software, Google Workspace, and more. Our goal is to make your current stack work smarter, not replace it." },
  { q: "What happens after the project is delivered?", a: "We don't disappear. Every project includes a support period, and we offer ongoing maintenance plans. We're invested in your long-term success." },
];

const FAQ = () => (
  <section id="faq" className="bg-[#F4F1EA] dark:bg-[#09151A] border-t border-black/5 dark:border-white/5 py-24 transition-colors duration-300">
    <div className="max-w-[800px] mx-auto px-[5vw]">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">FAQ</span>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mt-4 text-foreground">
          Common Questions
        </h2>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-gray-50 dark:bg-[#151518] border border-black/5 dark:border-white/5 hover:border-primary/30 rounded-2xl px-8 transition-colors duration-300">
              <AccordionTrigger className="font-display font-bold text-base text-foreground hover:text-primary hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[15px] pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
