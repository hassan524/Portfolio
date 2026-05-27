import { useLanguage } from "@/contexts/LanguageContext";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Don-Clem Technology",
    companyUrl: "https://don-clem.com",
    period: "Jul 2025 – Jan 2026 · 7 mos",
    location: "United Kingdom · Remote",
    type: "Internship",
    description:
      "Contributed to web application development with a focus on creating reusable components, resolving full-stack bugs, and improving UI/UX across a large production codebase. Collaborated with a cross-functional team to meet deadlines while gaining hands-on experience across the entire stack.",
    bullets: [
      "Integrated the Twitter API and implemented a real-time push notification system using Next.js and PostgreSQL, improving user engagement across the platform.",
      "Engineered Gemini AI features including an automated GitHub PR reviewer that delivered consistent, actionable code suggestions through custom prompt engineering.",
      "Optimized website architecture by removing redundant processes and refactoring critical paths in a large production codebase — improving overall performance by 5%.",
    ],
    skills: ["Next.js", "PostgreSQL", "TypeScript", "Gemini AI", "Twitter API", "Push Notifications", "React", "Node.js"],
  },
];

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "var(--a1-text)" },
  { name: "TypeScript", color: "#3B82F6" },
  { name: "Node.js", color: "#10B981" },
  { name: "MongoDB", color: "#22C55E" },
  { name: "PostgreSQL", color: "#06b6d4" },
  { name: "Gemini AI", color: "var(--a1-text)" },
  { name: "Express", color: "#f59e0b" },
  { name: "Tailwind", color: "#38bdf8" },
  { name: "Firebase", color: "#f59e0b" },
  { name: "Git", color: "#f97316" },
  { name: "Linux", color: "var(--a2-text)" },
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--a1-text)" }}>
            {t.exp.label}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold section-title">{t.exp.title}</h2>
        </div>

        <div className="flex flex-col gap-8 max-w-3xl mx-auto mb-20">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="relative pl-5 pr-5 py-7 rounded-2xl"
              style={{ background: "rgba(var(--a1), 0.04)", border: "1px solid rgba(var(--a1), 0.14)" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: "linear-gradient(to bottom, var(--a1-hex), var(--a2-hex))" }} />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold" style={{ color: "var(--a1-text)" }}>{exp.company}</p>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${exp.company}`}
                      className="inline-flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{ color: "var(--a2-text)" }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{exp.location}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(var(--a1), 0.14)", color: "var(--a1-text)", border: "1px solid rgba(var(--a1), 0.25)" }}>
                    {exp.type}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-7 mb-5 text-sm">{exp.description}</p>

              <ul className="flex flex-col gap-3 mb-5">
                {exp.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-3 text-sm text-muted-foreground leading-6">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--a1-hex)" }} />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((sk) => (
                  <span key={sk} className="tech-tag text-xs px-2.5 py-1 rounded-full font-medium">{sk}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Technologies I Work With</p>
        </div>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />
          <div className="flex gap-5 animate-[marquee_22s_linear_infinite] w-max">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap" style={{ background: "rgba(var(--a1), 0.06)", border: "1px solid rgba(var(--a1), 0.12)" }}>
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: tech.color }} />
                <span className="text-sm font-medium text-foreground/80">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
      </div>
    </section>
  );
}
