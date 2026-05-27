import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description: "Clean, fast, mobile-first websites and full-stack web applications. From portfolios to complex SaaS platforms — I bring ideas to life with React, Next.js, and Node.js.",
    features: ["React / Next.js", "REST APIs", "Responsive Design", "Performance Optimized"],
    accentRgb: "var(--a1)",
    accentText: "var(--a1-text)",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Modern, user-friendly interfaces that ensure a seamless experience across all devices. I focus on clean aesthetics, great typography, and intuitive interactions.",
    features: ["Component Design", "Dark Mode", "Animations", "Mobile-First"],
    accentRgb: "var(--a2)",
    accentText: "var(--a2-text)",
  },
  {
    icon: "⚙️",
    title: "Maintenance & Optimization",
    description: "Keep your existing website running at peak performance. Bug fixes, speed improvements, SEO enhancements, and smooth ongoing support for your visitors.",
    features: ["Speed Optimization", "Bug Fixes", "SEO", "Ongoing Support"],
    accentRgb: "16,185,129",
    accentText: "#10b981",
  },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--a1-text)" }}>
            {t.services.label}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold section-title">{t.services.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, i) => (
            <div key={i} className="service-card rounded-2xl p-5 sm:p-6 flex flex-col gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: `rgba(${s.accentRgb}, 0.1)`, border: `1px solid rgba(${s.accentRgb}, 0.22)` }}
              >
                {s.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-6">{s.description}</p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.accentText }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-3 text-sm font-semibold text-center py-2.5 rounded-xl transition-all duration-300"
                style={{ border: `1px solid rgba(${s.accentRgb}, 0.35)`, color: s.accentText }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `rgba(${s.accentRgb}, 0.1)`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                Hire Me →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
