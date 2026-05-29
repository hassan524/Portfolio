import { useState, useEffect } from "react";
import { EN } from "@/lib/translations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const navLinks = [
    { label: EN.nav.home, href: "#home" },
    { label: EN.nav.about, href: "#about" },
    { label: EN.nav.exp, href: "#experience" },
    { label: EN.nav.projects, href: "#projects" },
    { label: EN.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const lightTop = "linear-gradient(90deg, #1a6fff, #60a5fa)";
  const lightMid = "linear-gradient(90deg, #3b82f6, #93c5fd)";
  const lightBottom = "linear-gradient(90deg, #60a5fa, #1a6fff)";
  const lightX = "linear-gradient(90deg, #1d4ed8, #3b82f6)";

  const darkTop = "linear-gradient(90deg, #ff1a1a, #ffffff)";
  const darkMid = "linear-gradient(90deg, #ff4444, #ff9999)";
  const darkBottom = "linear-gradient(90deg, #ffffff, #ff1a1a)";
  const darkX = "linear-gradient(90deg, #ff1a1a, #ff6666)";

  const topBg = open ? (isDark ? darkX : lightX) : (isDark ? darkTop : lightTop);
  const midBg = isDark ? darkMid : lightMid;
  const bottomBg = open ? (isDark ? darkX : lightX) : (isDark ? darkBottom : lightBottom);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-nav ${
        scrolled ? "py-3 shadow-lg" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between w-full">

        {/* Logo */}
        <a
          href="#home"
          style={{ animation: "navEnter 0.5s ease 0s both", display: "flex" }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, var(--a1-hex), var(--a2-hex))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "1.15rem",
              fontWeight: 700,
            }}
          >
            Hassan
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "1.15rem",
              fontWeight: 700,
              opacity: 0.75,
            }}
          >
            &nbsp;Rehan
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l, i) => (
            <li
              key={l.href}
              style={{ animation: `navEnter 0.5s ease ${0.08 + i * 0.08}s both` }}
            >
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}

          {/* Resume */}
          <li style={{ animation: "navEnter 0.5s ease 0.56s both" }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
            >
              {/* <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg> */}
              Resume
            </a>
          </li>
{/* 
          <li>
            <a
              href="#contact"
              className="glow-btn px-4 py-2 rounded-lg text-sm font-semibold tracking-wide"
            >
              {EN.nav.hire}
            </a>
          </li> */}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 relative z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block absolute h-[2px] w-5 rounded-full transition-all duration-300"
            style={{
              background: topBg,
              transform: open ? "translateY(0px) rotate(45deg)" : "translateY(-6px)",
            }}
          />
          <span
            className="block absolute h-[2px] w-5 rounded-full transition-all duration-300"
            style={{
              background: midBg,
              opacity: open ? 0 : 1,
              transform: open ? "scaleX(0)" : "scaleX(1)",
            }}
          />
          <span
            className="block absolute h-[2px] w-5 rounded-full transition-all duration-300"
            style={{
              background: bottomBg,
              transform: open ? "translateY(0px) rotate(-45deg)" : "translateY(6px)",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 py-5 border-t border-border/50">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 w-fit px-5 py-2.5 rounded-lg text-sm font-semibold border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </li>

          {/* <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="glow-btn inline-block px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              {EN.nav.hire}
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}