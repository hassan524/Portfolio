import { useState } from "react";
import toast from "react-hot-toast";
import { EN } from "@/lib/translations";

const BASE = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

const contactInfo = [
  {
    label: "Email",
    value: "hassanrehan9975@gmail.com",
    href: "mailto:hassanrehan9975@gmail.com",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 5h18v14H3z" />
        <path d="M3 5l9 7 9-7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+92 315 8408455",
    href: "https://wa.me/923158408455",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 3v6h-6" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Pakistan",
    href: null,
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z" />
      </svg>
    ),
  },
  {
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const t = EN;

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
        toast.success("Message sent successfully.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch {
      toast.error("Failed to send. Try again.");
    }
    setLoading(false);
  };

  const inputClass =
    "form-input w-full px-5 py-3.5 rounded-xl text-foreground text-sm";

  return (
    <section id="contact" className="py-16 sm:py-20 px-2 sm:px-6">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--a1-text)" }}>
            {t.contact.label}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold section-title">
            {t.contact.title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">

          {/* Left */}
          <div className="w-full lg:w-5/12 flex flex-col gap-7">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                {t.contact.heading}
              </h3>
              <p className="text-muted-foreground text-sm leading-7">
                {t.contact.body}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(var(--a1), 0.09)",
                      border: "1px solid rgba(var(--a1), 0.18)",
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        className="text-sm font-semibold"
                        style={{ color: "var(--a1-text)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="w-full lg:w-7/12 flex flex-col gap-4">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className={inputClass}
              placeholder="Your Name"
              required
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className={inputClass}
              placeholder="Email"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              className={`${inputClass} resize-none`}
              placeholder="Your message"
              rows={6}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="glow-btn py-4 rounded-xl"
            >
              {loading ? "Sending..." : t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}