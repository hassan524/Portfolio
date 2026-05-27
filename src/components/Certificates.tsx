import { useLanguage } from "@/contexts/LanguageContext";

const certs = [
  {
    title: "Back End Development & APIs",
    issuer: "freeCodeCamp",
    year: "2024",
    link: "https://www.freecodecamp.org/certification/fcce63c29b3-46d7-41c0-96a7-6de12d3b8fb4/back-end-development-and-apis",
    icon: "🖥️",
  },
  {
    title: "Relational Databases",
    issuer: "freeCodeCamp",
    year: "2025",
    link: "https://www.freecodecamp.org/certification/fcce63c29b3-46d7-41c0-96a7-6de12d3b8fb4/relational-database-v8",
    icon: "🗄️",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    year: "2025",
    link: "https://www.hackerrank.com/certificates/4f4631305ea1",
    icon: "⚛️",
  },
];

export default function Certificates() {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="section-container">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--a1-text)" }}>
            {t.certs.label}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold section-title">{t.certs.title}</h2>
        </div>
        <p className="text-center text-muted-foreground mb-14">
          Certificates aren't everything in this field — but they don't hurt either.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card rounded-2xl p-6 flex flex-col gap-4 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: "rgba(var(--a1), 0.1)", border: "1px solid rgba(var(--a1), 0.2)" }}
              >
                {c.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-foreground text-base leading-tight transition-colors" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground">{c.issuer} · {c.year}</p>
              </div>
              <div className="mt-auto flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--a1-text)" }}>
                View Certificate
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
