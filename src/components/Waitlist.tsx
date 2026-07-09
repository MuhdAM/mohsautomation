import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const Waitlist = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Please enter your full name.";
    if (!email.trim()) errs.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(email.trim())) errs.email = "That email doesn't look right — please check it.";
    if (!need.trim()) errs.need = "Please tell us what you'd like to automate.";
    else if (need.trim().length < 10) errs.need = "Please give us a little more detail (at least 10 characters).";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    if (!supabase) {
      toast({ title: "Something went wrong", description: "Please try again later or contact us directly.", variant: "destructive" });
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from("waitlist").insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        need: need.trim(),
      });

      if (error) {
        if (error.code === "23505") {
          toast({ title: "You're already on the list!", description: "We have your details — sit tight, we'll be in touch soon." });
          setSuccess(true);
          return;
        }
        throw error;
      }

      // Note: transactional email dispatch is intentionally handled server-side
      // (via a dedicated hardened edge function or DB trigger) to prevent
      // abuse of an unauthenticated email endpoint with arbitrary recipients.
      // Client-side invocation of a generic email function is not safe.



      setSuccess(true);
      toast({ title: "You're on the list! 🎉", description: "We'll be in touch soon with your free strategy call details." });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-foreground/[0.05] border rounded-lg px-4 py-3 text-foreground text-sm font-body outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10 ${
      errors[field] ? "border-destructive/50 ring-2 ring-destructive/10" : "border-border"
    }`;

  if (success) {
    return (
      <section id="waitlist" className="bg-[#101013] border-t border-white/5">
        <div className="max-w-[680px] mx-auto px-[5vw] py-24 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#151518] border border-white/10 rounded-2xl p-12 shadow-[0_0_40px_rgba(18,113,91,0.1)]">
            <div className="text-5xl mb-6">✅</div>
            <h3 className="font-display text-3xl font-bold mb-3 text-white">Application Received</h3>
            <p className="text-muted-foreground text-lg">Thank you. We will review your submission and contact you shortly with strategy call details.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="bg-[#101013] border-t border-white/5 relative overflow-hidden" aria-labelledby="waitlist-heading">
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-primary/20 blur-[120px] rounded-[100%] pointer-events-none opacity-50" />
      
      <div className="max-w-[680px] mx-auto px-[5vw] py-24 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Enterprise Waitlist</span>
          <h2 id="waitlist-heading" className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mt-4 mb-4 text-white">
            Secure Your Implementation
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We are currently onboarding a limited number of enterprise clients. Apply now for priority access and a complimentary strategy consultation.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-6 text-left bg-[#151518] p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl"
        >
          <div>
            <label htmlFor="waitlist-name" className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.1em] mb-2 block">Full Name</label>
            <input id="waitlist-name" type="text" autoComplete="name" value={name} onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }} placeholder="e.g. Aisha Mohammed" className={inputClass("name")} />
            {errors.name && <p className="text-xs text-destructive mt-1.5">⚠ {errors.name}</p>}
          </div>

          <div>
            <label htmlFor="waitlist-email" className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.1em] mb-2 block">Work Email</label>
            <input id="waitlist-email" type="email" autoComplete="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }} placeholder="you@company.com" className={inputClass("email")} />
            {errors.email && <p className="text-xs text-destructive mt-1.5">⚠ {errors.email}</p>}
          </div>

          <div>
            <label htmlFor="waitlist-need" className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.1em] mb-2 block">Implementation Details</label>
            <textarea id="waitlist-need" value={need} onChange={(e) => { setNeed(e.target.value); setErrors((p) => ({ ...p, need: "" })); }} rows={4} placeholder="Briefly describe the processes you're looking to automate or the digital infrastructure you need..." className={inputClass("need") + " resize-none"} />
            {errors.need && <p className="text-xs text-destructive mt-1.5">⚠ {errors.need}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-4 rounded-xl text-base font-bold shadow-[0_0_20px_rgba(18,113,91,0.4)] hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2 mt-4"
          >
            {loading ? <><Loader2 size={20} className="animate-spin" /> Processing…</> : "Submit Application"}
          </button>

          <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5 mt-2 font-medium">
            <Lock size={12} className="text-primary" /> Strict privacy. Your data is secure.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Waitlist;
