import { useEffect, useRef } from "react";
import { EN } from "@/lib/translations";

const skills = [
  { name: "React / Next.js", level: 92 },
  { name: "TypeScript / JavaScript", level: 88 },
  { name: "Node.js / Express", level: 85 },
  { name: "MongoDB / PostgreSQL", level: 80 },
  { name: "Docker / CI-CD", level: 78 },
  { name: "Authentication & Security", level: 76 },
  { name: "System Design", level: 75 },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const t = EN;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            barsRef.current.forEach((bar, i) => {
              if (bar) setTimeout(() => bar.classList.add("running"), i * 130);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 sm:py-20 px-2 sm:px-6" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-14 sr">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--a1-text)" }}
          >
            {t.about.label}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold section-title">
            {t.about.title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* LEFT — About text */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 sr">
            <p className="text-muted-foreground leading-7">{t.about.p1}</p>
            <p className="text-muted-foreground leading-7">{t.about.p2}</p>

            {/* Currently Learning */}
            <div className="mt-1">
              <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2">
                Currently Learning
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Linux Internals",
                  "Networking",
                  "Cybersecurity",
                  // "Bash Scripting",
                  "Cloud",
                  "AI Tooling",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(var(--a2), 0.09)",
                      border: "1px solid rgba(var(--a2), 0.2)",
                      color: "var(--a2-text)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-3 flex-wrap">
              <a
                href="/resume.pdf"
                download
                className="glow-btn px-5 py-2.5 rounded-xl font-semibold tracking-wide text-sm"
              >
                {t.about.dlResume}
              </a>

              <a
                href="https://github.com/hassan524"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-semibold tracking-wide text-sm border transition-all duration-300"
                style={{
                  borderColor: "rgba(var(--a1), 0.35)",
                  color: "var(--a1-text)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(var(--a1), 0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                }}
              >
                {t.about.viewGitHub}
              </a>
            </div>
          </div>

          {/* RIGHT — Skill bars */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 sr">
            <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
              Skills & Proficiency
            </p>

            <div className="flex flex-col gap-4">
              {skills.map((s, i) => (
                <div key={s.name} className="skill-bar-group">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground/80 font-medium">
                      {s.name}
                    </span>
                    <span
                      className="font-semibold"
                      style={{
                        color: "var(--a1-text)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {s.level}%
                    </span>
                  </div>

                  <div className="skill-bar">
                    <div
                      ref={(el) => {
                        if (el) barsRef.current[i] = el;
                      }}
                      className="skill-bar-fill"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* AI Tools */}
            {/* <div className="mt-2">
              <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2">
                AI Tools I Use Daily
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Claude",
                  "GitHub Copilot",
                  "OpenAI Codex",
                  "Cursor IDE",
                  "ChatGPT",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-lg font-medium"
                    style={{
                      background: "rgba(var(--a1), 0.08)",
                      border: "1px solid rgba(var(--a1), 0.18)",
                      color: "var(--a1-text)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}