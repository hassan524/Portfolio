import { useState } from "react";
import toast from "react-hot-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const BASE = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

const contactInfo = [
  { icon: "📧", label: "Email", value: "hassanrehan9975@gmail.com", href: "mailto:hassanrehan9975@gmail.com" },
  { icon: "💬", label: "WhatsApp", value: "+92 315 8408455", href: "https://wa.me/923158408455" },
  { icon: "📍", label: "Location", value: "Pakistan", href: null },
  { icon: "⚡", label: "Response Time", value: "Within 24 hours", href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch {
      toast.error("Failed to send. Please try again.");
    }
    setLoading(false);
  };

  const inputClass = "form-input w-full px-5 py-3.5 rounded-xl text-foreground text-sm";

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="section-container">
        <div className="text-center mb-14 sr">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--a1-text)" }}>
            {t.contact.label}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold section-title">{t.contact.title}</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 sm:gap-14 items-start max-w-5xl mx-auto">

          {/* Left */}
          <div className="w-full lg:w-5/12 flex flex-col gap-7 sr">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {t.contact.heading}
              </h3>
              <p className="text-muted-foreground leading-7 text-sm">{t.contact.body}</p>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: "rgba(var(--a1), 0.09)", border: "1px solid rgba(var(--a1), 0.18)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-semibold transition-colors hover:opacity-80"
                        style={{ color: "var(--a1-text)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              {[
                { href: "https://github.com/hassan524", label: "GitHub" },
                { href: "https://www.linkedin.com/in/hassan-rehan-075849283/", label: "LinkedIn" },
                { href: "https://wa.me/923158408455", label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
                  style={{ background: "rgba(var(--a1), 0.07)", border: "1px solid rgba(var(--a1), 0.18)", color: "var(--a1-text)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(var(--a1), 0.16)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(var(--a1), 0.07)"; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <form onSubmit={onSubmit} className="w-full lg:w-7/12 flex flex-col gap-4 sr">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-muted-foreground mb-1.5 ml-1">Your Name</label>
                <input name="name" value={form.name} onChange={onChange} className={inputClass} placeholder="Hassan Rehan" maxLength={50} required />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-semibold text-muted-foreground mb-1.5 ml-1">Email Address</label>
                <input name="email" type="email" value={form.email} onChange={onChange} className={inputClass} placeholder="you@example.com" maxLength={60} required />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-1.5 ml-1">Message</label>
              <textarea name="message" value={form.message} onChange={onChange} className={`${inputClass} resize-none`} placeholder="Tell me about your project or just say hi..." maxLength={600} rows={7} required />
            </div>
            <button type="submit" disabled={loading} className="glow-btn w-full py-4 rounded-xl font-semibold tracking-wide text-sm mt-1 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t.contact.sending}
                </span>
              ) : t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
