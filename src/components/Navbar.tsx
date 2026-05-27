import { useState, useEffect } from "react";
import { useLanguage, type Lang } from "@/contexts/LanguageContext";

const LANG_OPTIONS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ur", label: "اردو", flag: "🇵🇰" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.exp, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

  const currentFlag = LANG_OPTIONS.find((l) => l.code === lang)?.flag ?? "🌐";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-nav ${scrolled ? "py-3 shadow-lg" : "py-5"}`}>
      <div className="section-container flex items-center justify-between">

        {/* Logo */}
        <a href="#home" style={{ animation: "navEnter 0.5s ease 0s both", display: "flex" }}>
          <span style={{
            background: "linear-gradient(135deg, var(--a1-hex), var(--a2-hex))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "1.15rem",
            fontWeight: 700,
          }}>Hassan</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1.15rem", fontWeight: 700, opacity: 0.75 }}>&nbsp;Rehan</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l, i) => (
            <li key={l.href} style={{ animation: `navEnter 0.5s ease ${0.08 + i * 0.08}s both` }}>
              <a href={l.href} className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}

          {/* Language picker */}
          <li className="relative" style={{ animation: "navEnter 0.5s ease 0.52s both" }}>
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1.5 rounded-lg"
              style={{ border: "1px solid rgba(var(--a1), 0.22)" }}
              onClick={(e) => { e.stopPropagation(); setLangOpen((v) => !v); }}
            >
              <span className="text-base leading-none">{currentFlag}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {langOpen && (
              <div
                className="absolute right-0 top-10 rounded-xl py-1.5 min-w-[148px] z-50"
                style={{ background: "hsl(var(--card))", border: "1px solid rgba(var(--a1), 0.22)", boxShadow: "0 12px 36px rgba(0,0,0,0.25)", backdropFilter: "blur(16px)" }}
                onClick={(e) => e.stopPropagation()}
              >
                {LANG_OPTIONS.map((lo) => (
                  <button
                    key={lo.code}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-left transition-colors"
                    style={{
                      background: lo.code === lang ? "rgba(var(--a1), 0.12)" : "transparent",
                      color: lo.code === lang ? "var(--a1-text)" : "hsl(var(--muted-foreground))",
                    }}
                    onMouseEnter={(e) => { if (lo.code !== lang) (e.currentTarget as HTMLElement).style.background = "rgba(var(--a1), 0.06)"; }}
                    onMouseLeave={(e) => { if (lo.code !== lang) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                    onClick={() => { setLang(lo.code); setLangOpen(false); }}
                  >
                    <span className="text-base leading-none">{lo.flag}</span>
                    <span className="font-medium">{lo.label}</span>
                    {lo.code === lang && <span className="ml-auto text-[10px] opacity-60">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </li>

          <li style={{ animation: "navEnter 0.5s ease 0.6s both" }}>
            <a href="#contact" className="glow-btn px-4 py-2 rounded-lg text-sm font-semibold tracking-wide">
              {t.nav.hire}
            </a>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <div className="relative">
            <button
              className="text-sm px-2 py-1.5 rounded-lg text-muted-foreground"
              style={{ border: "1px solid rgba(var(--a1), 0.22)" }}
              onClick={(e) => { e.stopPropagation(); setLangOpen((v) => !v); }}
            >
              {currentFlag}
            </button>
            {langOpen && (
              <div
                className="absolute right-0 top-9 rounded-xl py-1.5 min-w-[140px] z-50"
                style={{ background: "hsl(var(--card))", border: "1px solid rgba(var(--a1), 0.22)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
                onClick={(e) => e.stopPropagation()}
              >
                {LANG_OPTIONS.map((lo) => (
                  <button
                    key={lo.code}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm"
                    style={{ color: lo.code === lang ? "var(--a1-text)" : "hsl(var(--muted-foreground))" }}
                    onClick={() => { setLang(lo.code); setLangOpen(false); }}
                  >
                    <span>{lo.flag}</span>
                    <span>{lo.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col gap-4 px-4 py-5 border-t border-border/50">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setOpen(false)} className="glow-btn inline-block px-5 py-2.5 rounded-lg text-sm font-semibold">
              {t.nav.hire}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
