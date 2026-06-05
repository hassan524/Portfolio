import { useRef, useEffect } from "react";

const chapters = [
  {
    phase: "How It Started",
    title: "Curiosity about computers",
    body: "Since I was young, I had a deep interest in computers. Like many people, I got curious about hacking and how things work inside systems.",
    accent: "var(--a1-hex)",
    accentText: "var(--a1-text)",
    accentRgb: "var(--a1)",
  },
  {
    phase: "First Step",
    title: "Accidental beginning with web",
    body: "I once opened an HTML tutorial without knowing what it was for. From that moment, I started learning HTML and CSS and spent nights building and experimenting.",
    accent: "var(--a2-hex)",
    accentText: "var(--a2-text)",
    accentRgb: "var(--a2)",
  },
  {
    phase: "Learning Phase",
    title: "JavaScript and real projects",
    body: "After HTML and CSS, I learned JavaScript and kept going — learning advanced technologies and frameworks, and working late into the night on whatever I found useful and exciting.",
    accent: "#10b981",
    accentText: "#10b981",
    accentRgb: "16,185,129",
  },
  {
    phase: "Breakthrough",
    title: "First remote internship",
    body: "After years of hard work, I finally cracked my first remote internship in the UK. Alongside that, I started working on real world projects with teams.",
    accent: "#8b5cf6",
    accentText: "#a78bfa",
    accentRgb: "139,92,246",
  },
];

const divingInto = [
  {
    label: "Linux Systems",
    desc: "Understanding how operating systems work under the hood",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v12H4z" />
        <path d="M4 8h16" />
      </svg>
    ),
  },
  {
    label: "Backend Development",
    desc: "Building scalable APIs and server-side applications",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="6" />
        <rect x="3" y="15" width="18" height="6" />
      </svg>
    ),
  },
  {
    label: "Networking",
    desc: "How data moves across systems, protocols and requests",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.5 10.5l7-3M8.5 13.5l7 3" />
      </svg>
    ),
  },
  {
    label: "Cloud Computing",
    desc: "Deploying and managing applications in cloud environments",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 15h11a4 4 0 0 0 0-8 5 5 0 0 0-9-1 4 4 0 0 0-2 9z" />
      </svg>
    ),
  },
  {
    label: "AI Development",
    desc: "Working with modern AI tools and integrating them into apps",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="5" width="14" height="14" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
];

export default function MyStory() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12 }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="my-story" className="py-16 sm:py-20 px-2 sm:px-6">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-14 sr">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--a1-text)" }}>
            My Journey
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold section-title">
            My Story
          </h2>

          <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-sm leading-7">
            A simple journey from curiosity about computers to building real world applications and gaining professional experience.
          </p>
        </div>

        {/* Chapter cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-16">
          {chapters.map((ch, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="sr rounded-2xl p-6 flex flex-col gap-3 relative overflow-hidden"
              style={{
                background: `rgba(${ch.accentRgb}, 0.04)`,
                border: `1px solid rgba(${ch.accentRgb}, 0.14)`,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: `linear-gradient(90deg, transparent, ${ch.accent}, transparent)`,
                }}
              />

              <span
                className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: `rgba(${ch.accentRgb}, 0.12)`,
                  color: ch.accentText,
                  border: `1px solid rgba(${ch.accentRgb}, 0.22)`,
                  width: "fit-content",
                }}
              >
                {ch.phase}
              </span>

              <h3 className="text-lg font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {ch.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-6">
                {ch.body}
              </p>
            </div>
          ))}
        </div>

        {/* What I'm Diving Into */}
        <div className="sr">
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--a2-text)" }}>
              Currently Exploring
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold">
              What I'm Diving Into
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {divingInto.map((item, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) cardsRef.current[chapters.length + i] = el;
                }}
                className="sr flex items-start gap-4 p-4 rounded-xl"
                style={{
                  background: "rgba(var(--a1), 0.04)",
                  border: "1px solid rgba(var(--a1), 0.1)",
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(var(--a1), 0.08)",
                    border: "1px solid rgba(var(--a1), 0.16)",
                    color: "var(--a1-text)",
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <p className="font-semibold text-sm mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}