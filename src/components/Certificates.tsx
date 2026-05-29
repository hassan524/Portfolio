import { EN } from "@/lib/translations";

const certs = [
  {
    title: "Back End Development & APIs",
    issuer: "freeCodeCamp",
    year: "2024",
    link: "https://www.freecodecamp.org/certification/fcce63c29b3-46d7-41c0-96a7-6de12d3b8fb4/back-end-development-and-apis",
    icon: "server",
  },
  {
    title: "Relational Databases",
    issuer: "freeCodeCamp",
    year: "2025",
    link: "https://www.freecodecamp.org/certification/fcce63c29b3-46d7-41c0-96a7-6de12d3b8fb4/relational-database-v8",
    icon: "database",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    year: "2025",
    link: "https://www.hackerrank.com/certificates/4f4631305ea1",
    icon: "code",
  },
];

function Icon({ type }: { type: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "server":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="6" />
          <rect x="4" y="14" width="16" height="6" />
          <line x1="8" y1="7" x2="8" y2="7" />
          <line x1="8" y1="17" x2="8" y2="17" />
        </svg>
      );

    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      );

    case "code":
      return (
        <svg {...common}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );

    default:
      return null;
  }
}

export default function Certificates() {
  const t = EN;

  return (
    <section id="certificates" className="py-16 sm:py-20 px-2 sm:px-6">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--a1-text)" }}
          >
            {t.certs.label}
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold section-title">
            {t.certs.title}
          </h2>
        </div>

        <p className="text-center text-muted-foreground mb-14">
          Certificates are proof of learning, not the limit of it.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {certs.map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-6 flex flex-col gap-4 border transition-all duration-300 hover:translate-y-[-4px]"
              style={{
                background: "rgba(var(--a1), 0.04)",
                borderColor: "rgba(var(--a1), 0.15)",
              }}
            >

              {/* ICON */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(var(--a1), 0.1)",
                  border: "1px solid rgba(var(--a1), 0.2)",
                  color: "var(--a1-text)",
                }}
              >
                <Icon type={c.icon} />
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-1">
                <h3
                  className="font-bold text-base leading-tight"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {c.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {c.issuer} · {c.year}
                </p>
              </div>

              {/* LINK */}
              <div
                className="mt-auto flex items-center gap-1 text-xs font-semibold"
                style={{ color: "var(--a1-text)" }}
              >
                View Certificate →
              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}