import { useState, useEffect } from "react";

export default function GitHubSection() {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const year = new Date().getFullYear();

  const graphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=hassan524&theme=${isDark ? "react-dark" : "github-light"}&hide_border=true&bg_color=${isDark ? "00000000" : "ffffff00"}&color=${isDark ? "f87171" : "4361ee"}&line=${isDark ? "b91c1c" : "4361ee"}&point=${isDark ? "fb923c" : "0ea5e9"}&area=true&area_color=${isDark ? "b91c1c" : "4361ee"}&custom_title=Contribution%20Graph%20${year}`;

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=hassan524&show_icons=true&theme=${isDark ? "radical" : "default"}&hide_border=true&bg_color=${isDark ? "00000000" : "ffffff00"}&title_color=${isDark ? "f87171" : "4361ee"}&icon_color=${isDark ? "fb923c" : "0ea5e9"}&text_color=${isDark ? "d4c5c0" : "333333"}&ring_color=${isDark ? "b91c1c" : "4361ee"}&count_private=true&include_all_commits=true`;

  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=hassan524&theme=${isDark ? "dark" : "default"}&hide_border=true&background=${isDark ? "00000000" : "ffffff00"}&ring=${isDark ? "b91c1c" : "4361ee"}&fire=${isDark ? "ea580c" : "0ea5e9"}&currStreakLabel=${isDark ? "f87171" : "4361ee"}&sideLabels=${isDark ? "d4c5c0" : "333333"}&currStreakNum=${isDark ? "d4c5c0" : "333333"}&dates=${isDark ? "9a8a86" : "666666"}`;

  const cardStyle = {
    background: "rgba(var(--a1), 0.04)",
    border: "1px solid rgba(var(--a1), 0.12)",
  };

  return (
    <section className="py-16 sm:py-20 px-2 sm:px-6">
      <div className="section-container">
        <div className="text-center mb-10 sr">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--a1-text)" }}>
            Consistency
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold section-title">GitHub Activity</h2>
        </div>

        <div className="max-w-4xl mx-auto sr flex flex-col gap-4">
          {/* Row 1: Contribution Graph (full width, scrollable on mobile) */}
          <div
            className="rounded-2xl p-1 overflow-x-auto no-scrollbar"
            style={cardStyle}
          >
            <img
              src={graphUrl}
              alt={`GitHub Contribution Graph ${year}`}
              className="w-full h-auto block"
              loading="lazy"
              style={{ minWidth: "600px" }}
            />
          </div>

          {/* Row 2: Stats + Streak side by side on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-2xl p-1 overflow-hidden" style={cardStyle}>
              <img
                src={streakUrl}
                alt="GitHub Streak"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
