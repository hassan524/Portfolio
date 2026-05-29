import { EN } from "@/lib/translations";

const services = [
  {
    title: "Frontend UI Development",
    description:
      "Build modern, responsive user interfaces with clean structure and attention to detail.",
    features: [
      "UI Development",
      "Responsive Layouts",
      "Component Architecture",
      "Design Implementation",
    ],
  },
  {
    title: "Frontend Fixes & Improvements",
    description:
      "Fix UI issues, improve existing interfaces, and make applications smoother and more reliable.",
    features: [
      "Bug Fixing",
      "UI Improvements",
      "Performance Optimization",
      "Code Refactoring",
    ],
  },
  {
    title: "Team Collaboration",
    description:
      "Work with teams to build features, contribute to projects, and deliver maintainable products.",
    features: [
      "Team Work",
      "Feature Development",
      "Code Reviews",
      "Project Contribution",
    ],
  },
];

export default function Services() {
  const t = EN;

  return (
    <section id="services" className="py-16 sm:py-20 px-2 sm:px-6">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--a1-text)" }}
          >
            {t.services.label}
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold section-title">
            {t.services.title}
          </h2>
        </div>

        {/* Simple Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border transition-all duration-300 hover:translate-y-[-4px]"
              style={{
                background: "rgba(var(--a1), 0.04)",
                borderColor: "rgba(var(--a1), 0.15)",
              }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-7 mb-5">
                {s.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1 rounded-full border"
                    style={{
                      borderColor: "rgba(var(--a1), 0.15)",
                      color: "var(--a1-text)",
                      background: "rgba(var(--a1), 0.03)",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}