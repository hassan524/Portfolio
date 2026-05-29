import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { EN } from "@/lib/translations";


export default function Hero() {
  const el = useRef<HTMLSpanElement>(null);
  const t = EN;

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hassan Rehan", "Hassan Reh", "Hassan Rehan", "Hass", "Hassan Rehan",],
      typeSpeed: 72,
      backSpeed: 40,
      backDelay: 2000,
      startDelay: 400,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center px-2 sm:px-6"
      style={{ minHeight: "100svh", paddingTop: "130px" }}
    >
      <div className="text-center flex flex-col items-center gap-8 max-w-3xl w-full mx-auto">

        {/* Main heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          style={{ fontFamily: "'JetBrains Mono', monospace", animation: "navEnter 0.6s ease 0.2s both" }}
        >
          <span className="text-foreground">{t.hero.title1}&nbsp;</span>
          <br className="sm:hidden" />
          <span
            ref={el}
            style={{
              background: "linear-gradient(135deg, var(--a1-hex), var(--a2-hex))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          />
        </h1>

        {/* Short subtitle */}
        <p
          className="text-sm sm:text-base text-muted-foreground leading-7 max-w-lg"
          style={{ animation: "navEnter 0.6s ease 0.32s both" }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-3 justify-center"
          style={{ animation: "navEnter 0.6s ease 0.42s both" }}
        >
          <a href="#projects" className="glow-btn px-6 py-3 rounded-xl font-semibold tracking-wide text-sm">
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold tracking-wide text-sm border transition-all duration-300"
            style={{ borderColor: "rgba(var(--a1), 0.35)", color: "var(--a1-text)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(var(--a1), 0.07)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            {t.hero.cta2}
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex gap-8 sm:gap-14 pt-5 border-t border-border/40 w-full justify-center"
          style={{ animation: "navEnter 0.6s ease 0.52s both" }}
        >
          {t.hero.stats.map(([value, label]) => (
            <div key={label} className="text-center">
              <p
                className="text-2xl sm:text-3xl font-bold"
                style={{
                  background: "linear-gradient(135deg, var(--a1-hex), var(--a2-hex))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {value}
              </p>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide">{label}</p>
            </div>
          ))}
        </div>


        {/* Scroll hint */}
        <div className="flex flex-col items-center gap-1 opacity-40" style={{ animation: "navEnter 0.6s ease 0.62s both" }}>
          <span className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {t.hero.scroll}
          </span>
          <div className="w-px h-7" style={{ background: "linear-gradient(to bottom, var(--a1-hex), transparent)" }} />
        </div>
      </div>
    </section>
  );
}
