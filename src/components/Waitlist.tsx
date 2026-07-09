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
      <section id="waitlist" className="border-y border-border bg-[linear-gradient(135deg,hsl(166_100%_39%/0.06)_0%,hsl(216_100%_50%/0.06)_100%)]">
        <div className="max-w-[680px] mx-auto px-[5vw] py-20 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-primary/10 border border-primary/25 rounded-2xl p-12">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-display text-2xl font-extrabold mb-2">You're on the list!</h3>
            <p className="text-muted-foreground">Thank you for joining — we'll be in touch with your free strategy call details and early-access pricing.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="border-y border-border bg-[linear-gradient(135deg,hsl(166_100%_39%/0.06)_0%,hsl(216_100%_50%/0.06)_100%)]" aria-labelledby="waitlist-heading">
      <div className="max-w-[680px] mx-auto px-[5vw] py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs font-bold text-primary uppercase tracking-[0.1em]">Early Access</span>
          <h2 id="waitlist-heading" className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight leading-tight mt-4 mb-3">
            Get in Early.<br />Get the Best Rates.
          </h2>
          <p className="text-muted-foreground mb-6">
            We're onboarding our first clients now. Waitlist members get priority access, founder pricing, and a free strategy call — no strings attached.
          </p>
          <div className="text-sm text-muted-foreground mb-8">
            <strong className="text-primary">47+</strong> people already on the waitlist
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-5 text-left"
        >
          <div>
            <label htmlFor="waitlist-name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Full Name</label>
            <input id="waitlist-name" type="text" autoComplete="name" value={name} onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }} placeholder="e.g. Aisha Mohammed" className={inputClass("name")} />
            {errors.name && <p className="text-xs text-destructive mt-1.5">⚠ {errors.name}</p>}
          </div>

          <div>
            <label htmlFor="waitlist-email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Email Address</label>
            <input id="waitlist-email" type="email" autoComplete="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }} placeholder="you@company.com" className={inputClass("email")} />
            {errors.email && <p className="text-xs text-destructive mt-1.5">⚠ {errors.email}</p>}
          </div>

          <div>
            <label htmlFor="waitlist-need" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">What business process do you want to automate?</label>
            <textarea id="waitlist-need" value={need} onChange={(e) => { setNeed(e.target.value); setErrors((p) => ({ ...p, need: "" })); }} rows={4} placeholder="e.g. We manually process 200+ patient appointment reminders every week..." className={inputClass("need") + " resize-none"} />
            {errors.need && <p className="text-xs text-destructive mt-1.5">⚠ {errors.need}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-tri text-white py-3.5 rounded-lg font-semibold pulse-glow hover:-translate-y-0.5 hover:scale-[1.01] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2 mt-2"
          >
            {loading ? <><Loader2 size={18} className="animate-spin" /> Submitting…</> : "Reserve My Spot →"}
          </button>

          <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
            <Lock size={12} /> No spam, ever. We only reach out when ready to take on your project.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Waitlist;
