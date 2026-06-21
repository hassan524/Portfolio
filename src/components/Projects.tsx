import { useEffect, useRef, useState } from "react";
import { EN } from "@/lib/translations";

const projects = [
  {
    img: "/p5.png",
    name: "SheetSync",
    description: "A powerful spreadsheet web app inspired by Google Sheets. Real-time collaboration, multi-org support, version history, granular permissions, comment threads, and more.",
    tech: ["Typescript", "Next.js", "PostgreSQL", "Tailwind"],
    link: "http://sheetsync.site/",
    comingSoon: false,
  },
  {
    img: "/p1.png",
    name: "PrimeNest",
    description: "A real estate platform where users can browse properties, upload their own listings with images, and directly chat with clients for inquiries.",
    tech: ["Typescript", "Next.js", "MongoDB", "Socket.IO", "Tailwind"],
    link: "https://prime-nest-eim4.vercel.app/",
    comingSoon: false,
  },
  {
    img: "/p2.png",
    name: "SpotifyClone",
    description: "A full-featured Spotify desktop app clone with login via Spotify API. Users can view their playlists, recently played songs, and play music seamlessly.",
    tech: ["Typescript", "React", "ElectronJS", "Spotify API", "Tailwind"],
    link: "https://github.com/hassan524/SpotifyClone",
    comingSoon: false,
  },
  {
    img: "/p3.png",
    name: "SuitSphere",
    description: "An eCommerce web app with cart functionality and dynamic product filtering based on search and categories.",
    tech: ["Typescript", "React", "Node.js", "Express", "MongoDB", "Tailwind"],
    link: "https://suit-sphere-xe18.vercel.app/",
    comingSoon: false,
  },
  {
    img: "/p4.png",
    name: "TaskManager",
    description: "A project and task management app where users can create projects, organize them into groups, manage tasks, and mark them as completed.",
    tech: ["Typescript", "React", "Tailwind", "Firebase", "Vite"],
    link: "https://task-manager-13os.vercel.app/",
    comingSoon: false,
  },
];

export default function Projects() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const t = EN;

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !lineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const totalH = timelineRef.current.offsetHeight;
      const visible = Math.max(0, Math.min(window.innerHeight - rect.top, totalH));
      const ratio = Math.min(visible / totalH, 1);
      setLineHeight(ratio * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-20 px-2 sm:px-6">
      <div className="section-container">
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--a1-text)" }}>
            {t.projects.label}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold section-title">{t.projects.title}</h2>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline track + animated fill */}
          <div className="timeline-line-track hidden sm:block">
            <div ref={lineRef} className="timeline-line-fill" style={{ height: `${lineHeight}%` }} />
          </div>

          <div className="flex flex-col gap-10 sm:gap-14">
            {projects.map((p, i) => {
              const isRight = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6"
                  style={{ justifyContent: "center" }}
                >
                  {/* Timeline dot */}
                  <div className="timeline-dot hidden sm:block" style={{ top: "50%", transform: "translateX(-50%) translateY(-50%)" }} />

                  {/* Card — alternates left/right, borderless in dark mode */}
                  <div
                    className={` w-full sm:w-[46%] rounded-2xl overflow-hidden ${isRight ? "sm:ml-[54%]" : "sm:mr-[54%]"} dark-borderless`}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden group cursor-pointer">
                      {p.comingSoon ? (
                        <>
                          <img src={p.img} alt={p.name} className="w-full h-40 sm:h-64 object-cover opacity-50" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2" style={{ background: "rgba(0,0,0,0.55)" }}>
                            <span className="text-lg font-bold tracking-widest text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Coming Soon</span>
                            <span className="text-sm" style={{ color: "var(--a2-text)" }}>🚧 In Development</span>
                          </div>
                        </>
                      ) : p.link ? (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="block">
                          <img src={p.img} alt={p.name} className="w-full h-40 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ background: "rgba(var(--a1), 0.2)" }}>
                            <span className="text-white font-semibold tracking-wide text-sm px-4 py-2 rounded-full backdrop-blur-sm" style={{ background: "rgba(var(--a1), 0.75)" }}>
                              View Project ↗
                            </span>
                          </div>
                        </a>
                      ) : (
                        <div className="relative">
                          <img src={p.img} alt={p.name} className="w-full h-40 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ background: "rgba(var(--a1), 0.2)" }}>
                            <span className="text-white font-semibold tracking-wide text-sm px-4 py-2 rounded-full backdrop-blur-sm" style={{ background: "rgba(var(--a1), 0.75)" }}>
                              Active Project
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-4 sm:p-5 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--a1-hex)" }} />
                        <h3
                          className="font-bold text-lg sm:text-xl text-foreground"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {p.name}
                        </h3>
                        {p.comingSoon && (
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(245,158,11,0.15)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)" }}>
                            Soon
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground leading-6">{p.description}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {p.tech.map((t) => (
                          <span key={t} className="tech-tag text-xs px-2.5 py-1 rounded-full font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
