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
  <section id="faq" className="max-w-[800px] mx-auto px-[5vw] py-20">
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
      <span className="text-xs font-bold text-primary uppercase tracking-[0.1em]">FAQ</span>
      <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight leading-tight mt-4">
        Questions? We've Got Answers.
      </h2>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-foreground/[0.02]">
            <AccordionTrigger className="font-display font-bold text-sm hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm pb-5 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  </section>
);

export default FAQ;
