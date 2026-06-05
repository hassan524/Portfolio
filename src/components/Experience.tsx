import { EN } from "@/lib/translations";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Don-Clem Technology",
    companyUrl: "https://www.donclemtech.com/",
    period: "Jul 2025 – Jan 2026 · 7 mos",
    location: "United Kingdom · Remote",
    type: "Internship",
    description:
      "Worked as a Full Stack Developer in a remote UK internship. Built and improved web applications, worked on frontend and backend features, fixed bugs, and collaborated with a team.",
    bullets: [
      "Integrated the Twitter API and implemented a real-time push notification system using Next.js and PostgreSQL, improving user engagement across the platform.",
      "Engineered Gemini AI features including an automated GitHub PR reviewer that delivered consistent, actionable code suggestions through custom prompt engineering.",
      "Optimized website architecture by removing redundant processes and refactoring critical paths in a large production codebase — improving overall performance by 5%.",
    ],
    skills: [
      "Next.js",
      "PostgreSQL",
      "TypeScript",
      // "Gemini AI",
      // "Twitter API",
      // "Push Notifications",
      "React",
      "Node.js",
    ],
  },
];

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "var(--a1-text)" },
  { name: "TypeScript", color: "#3B82F6" },
  { name: "Node.js", color: "#10B981" },
  { name: "MongoDB", color: "#22C55E" },
  { name: "PostgreSQL", color: "#06b6d4" },
  // { name: "Gemini AI", color: "var(--a1-text)" },
  { name: "Express", color: "#f59e0b" },
  { name: "Tailwind", color: "#38bdf8" },
  { name: "Firebase", color: "#f59e0b" },
  { name: "Git", color: "#f97316" },
  { name: "Linux", color: "var(--a2-text)" },
];

export default function Experience() {
  const t = EN;

  return (
    <section id="experience" className="py-16 sm:py-20 px-2 sm:px-6">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--a1-text)" }}
          >
            {t.exp.label}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold section-title">
            {t.exp.title}
          </h2>
        </div>

        {/* Experience Card */}
        <div
          className="relative border rounded-2xl p-5 sm:p-8"
          style={{
            borderColor: "rgba(var(--a1), 0.15)",
            background: "rgba(var(--a1), 0.03)",
          }}
        >
          {experience.map((exp, i) => (
            <div key={i} className="flex flex-col gap-5">

              {/* Top Row */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-sm mt-1">
                    <span
                      style={{ color: "var(--a1-text)" }}
                      className="font-semibold"
                    >
                      {exp.company}
                    </span>

                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-xs"
                      style={{ color: "var(--a2-text)" }}
                    >
                      Visit
                    </a>

                    <span className="text-muted-foreground">•</span>

                    <span className="text-muted-foreground text-xs">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-2">
                  <span
                    className="text-[10px] px-3 py-1 rounded-full font-semibold w-fit"
                    style={{
                      background: "rgba(var(--a1), 0.12)",
                      color: "var(--a1-text)",
                      border: "1px solid rgba(var(--a1), 0.2)",
                    }}
                  >
                    {exp.type}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-7">
                {exp.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((sk) => (
                  <span
                    key={sk}
                    className="text-xs px-3 py-1 rounded-lg border"
                    style={{
                      borderColor: "rgba(var(--a1), 0.15)",
                      color: "var(--a1-text)",
                      background: "rgba(var(--a1), 0.04)",
                    }}
                  >
                    {sk}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {/* <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-xs px-4 py-2 rounded-lg border"
                  style={{
                    borderColor: "rgba(var(--a1), 0.25)",
                    color: "var(--a1-text)",
                  }}
                >
                  LinkedIn
                </a> */}

                <a
                  href="https://drive.google.com/file/d/1olNC6iQGbDBPVe1Y0a12YmYxdyVDembK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-4 py-2 rounded-lg border"
                  style={{
                    borderColor: "rgba(var(--a2), 0.25)",
                    color: "var(--a2-text)",
                  }}
                >
                  Certifications & Recommendations
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* TECH SLIDER (UNCHANGED EXACTLY AS BEFORE) */}
        <div className="text-center mt-32">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            Technologies I Work With
          </p>
        </div>

        <div className="overflow-hidden relative mt-10">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{
              background:
                "linear-gradient(to right, hsl(var(--background)), transparent)",
            }}
          />

          <div className="absolute right-0 top-0 bottom-0 w-20 z-10"
            style={{
              background:
                "linear-gradient(to left, hsl(var(--background)), transparent)",
            }}
          />

          <div className="flex gap-5 animate-[marquee_22s_linear_infinite] w-max">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap"
                style={{
                  background: "rgba(var(--a1), 0.06)",
                  border: "1px solid rgba(var(--a1), 0.12)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: tech.color }}
                />
                <span className="text-sm font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>

      </div>
    </section>
  );
}