import { useRef, useEffect } from "react";

const chapters = [
  {
    emoji: "🎯",
    phase: "How It Started",
    title: "I wanted to hack things.",
    body: "Honestly? I got into programming because cybersecurity YouTube had me convinced I was going to be a full-time hacker. So I started learning Python to write scripts... and then fell completely down the rabbit hole of actually building stuff.",
    accent: "var(--a1-hex)",
    accentText: "var(--a1-text)",
    accentRgb: "var(--a1)",
  },
  {
    emoji: "😂",
    phase: "What Happened",
    title: "I ended up writing CSS all day.",
    body: "I built one thing, then another, then a whole web app. Somewhere along the way I stopped caring about 'hacking' and became obsessed with creating. React, Node.js, databases — it all just clicked. I became a developer almost by accident. Funny how that works.",
    accent: "var(--a2-hex)",
    accentText: "var(--a2-text)",
    accentRgb: "var(--a2)",
  },
  {
    emoji: "🔄",
    phase: "Full Circle",
    title: "The security bug never left me.",
    body: "3+ years later, I'm shipping real products as a full-stack developer. But now I'm coming back to where it all started — learning cybersecurity properly. Not as a hobbyist, but with the systems knowledge I've built as a developer.",
    accent: "#10b981",
    accentText: "#10b981",
    accentRgb: "16,185,129",
  },
  {
    emoji: "🚀",
    phase: "Right Now",
    title: "Diving deep into the kernel.",
    body: "I'm actively studying Linux internals, network security, and low-level systems. I find it fascinating how the same curiosity that led me to code is now leading me into the OS layer — understanding how everything I've built actually runs.",
    accent: "#8b5cf6",
    accentText: "#a78bfa",
    accentRgb: "139,92,246",
  },
];

const divingInto = [
  { label: "Linux Kernel", icon: "🐧", desc: "Kernel modules, system calls, device drivers" },
  { label: "Network Security", icon: "🌐", desc: "Wireshark, packet analysis, TCP/IP deep dive" },
  { label: "CTF Challenges", icon: "🚩", desc: "Capture the Flag — reverse engineering & exploits" },
  { label: "Kali Linux", icon: "🛡️", desc: "Pentesting tools, Metasploit, Nmap, Burp Suite" },
  { label: "Bash Scripting", icon: "⚙️", desc: "Automation, system scripting, cron jobs" },
  { label: "AI Security", icon: "🤖", desc: "LLM vulnerabilities, prompt injection, AI red-teaming" },
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
    cardsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="my-story" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-14 sr">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--a1-text)" }}>
            My Journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold section-title" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            My Story
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-sm leading-7">
            From wanting to be a hacker, to shipping web apps, to studying the Linux kernel —
            this is how it actually happened.
          </p>
        </div>

        {/* Chapter cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-16">
          {chapters.map((ch, i) => (
            <div
              key={i}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="sr rounded-2xl p-6 flex flex-col gap-3 relative overflow-hidden"
              style={{
                background: `rgba(${ch.accentRgb}, 0.04)`,
                border: `1px solid rgba(${ch.accentRgb}, 0.14)`,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${ch.accent}, transparent)` }}
              />

              <div className="flex items-center gap-3">
                <span className="text-2xl">{ch.emoji}</span>
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{
                    background: `rgba(${ch.accentRgb}, 0.12)`,
                    color: ch.accentText,
                    border: `1px solid rgba(${ch.accentRgb}, 0.22)`,
                  }}
                >
                  {ch.phase}
                </span>
              </div>

              <h3
                className="text-lg font-bold text-foreground"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {ch.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-6">{ch.body}</p>
            </div>
          ))}
        </div>

        {/* What I'm Diving Into */}
        <div className="sr">
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--a2-text)" }}>
              Currently Exploring
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              What I'm Diving Into
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {divingInto.map((item, i) => (
              <div
                key={i}
                ref={(el) => { if (el) cardsRef.current[chapters.length + i] = el; }}
                className="sr flex items-start gap-4 p-4 rounded-xl"
                style={{
                  background: "rgba(var(--a1), 0.04)",
                  border: "1px solid rgba(var(--a1), 0.1)",
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(var(--a1), 0.08)", border: "1px solid rgba(var(--a1), 0.16)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="font-semibold text-foreground text-sm mb-0.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
