import { useState } from "react";

function seededRand(seed: number) {
  let s = seed;
  return () => {
    s = (Math.imul(1664525, s) + 1013904223) | 0;
    return (s >>> 0) / 0xffffffff;
  };
}

const WEEKS = 52;
const DAYS = 7;
const CELL = 9;
const GAP = 2;

function generateGrid() {
  const rand = seededRand(0x524a5361);
  const grid: number[][] = [];
  for (let w = 0; w < WEEKS; w++) {
    const week: number[] = [];
    const isStreakWeek = rand() > 0.72;
    for (let d = 0; d < DAYS; d++) {
      const isWeekend = d === 0 || d === 6;
      const r = rand();
      let level: number;
      if (isStreakWeek) {
        level = r < 0.1 ? 0 : r < 0.25 ? 1 : r < 0.5 ? 2 : r < 0.78 ? 3 : 4;
      } else if (isWeekend) {
        level = r < 0.6 ? 0 : r < 0.8 ? 1 : r < 0.93 ? 2 : 3;
      } else {
        level = r < 0.28 ? 0 : r < 0.52 ? 1 : r < 0.74 ? 2 : r < 0.9 ? 3 : 4;
      }
      week.push(level);
    }
    grid.push(week);
  }
  return grid;
}

const GRID = generateGrid();
const LIGHT_COLORS = ["#e5e7eb", "#bbf7d0", "#4ade80", "#16a34a", "#14532d"];
const DARK_COLORS = [
  "rgba(220,38,38,0.15)",
  "rgba(220,38,38,0.35)",
  "rgba(220,38,38,0.55)",
  "#dc2626",
  "#991b1b",
];
const DAYS_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const MONTH_LABELS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function getMonthPositions() {
  const today = new Date();
  const positions: { label: string; col: number }[] = [];
  let lastMonth = -1;
  for (let w = 0; w < WEEKS; w++) {
    const d = new Date(today);
    d.setDate(d.getDate() - (WEEKS - w) * 7);
    const m = d.getMonth();
    if (m !== lastMonth) {
      positions.push({ label: MONTH_LABELS[m], col: w });
      lastMonth = m;
    }
  }
  return positions;
}

const MONTH_POSITIONS = getMonthPositions();

export default function GitHubGraph({ title }: { title: string }) {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const isDark = document.documentElement.classList.contains("dark");
  const colors = isDark ? DARK_COLORS : LIGHT_COLORS;
  const today = new Date();

  const getDate = (week: number, day: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (WEEKS - week) * 7 - (today.getDay() - day));
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const totalContribs = GRID.reduce((sum, w) => sum + w.reduce((s, v) => s + (v > 0 ? 1 : 0), 0), 0);
  const totalDays = WEEKS * DAYS;
  const labelW = 28;
  const gridW = WEEKS * (CELL + GAP);

  return (
    <div className="flex flex-col gap-2.5 w-full">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--a1-text)", fontFamily: "'JetBrains Mono', monospace" }}>
          {title}
        </p>
        <span className="text-[10px] text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          {totalContribs}/{totalDays} days active
        </span>
      </div>

      <div className="relative no-scrollbar" style={{ overflowX: "auto" }}>
        {/* Month labels */}
        <div className="flex mb-1" style={{ paddingLeft: `${labelW}px` }}>
          <div className="relative" style={{ width: `${gridW}px`, height: "13px" }}>
            {MONTH_POSITIONS.map((mp) => (
              <span
                key={mp.col}
                className="absolute text-[9px] text-muted-foreground"
                style={{ left: `${mp.col * (CELL + GAP)}px`, fontFamily: "'JetBrains Mono', monospace" }}
              >
                {mp.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-0" style={{ alignItems: "flex-start" }}>
          {/* Day labels */}
          <div className="flex flex-col flex-shrink-0" style={{ width: `${labelW}px` }}>
            {DAYS_LABELS.map((label, i) => (
              <div
                key={i}
                className="text-[9px] text-muted-foreground"
                style={{ height: `${CELL + GAP}px`, lineHeight: `${CELL}px`, fontFamily: "'JetBrains Mono', monospace" }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="flex relative" style={{ gap: `${GAP}px` }}>
            {GRID.map((week, wi) => (
              <div key={wi} className="flex flex-col" style={{ gap: `${GAP}px` }}>
                {week.map((level, di) => (
                  <div
                    key={di}
                    className="rounded-[2px] cursor-pointer transition-all duration-150 hover:scale-[1.35] hover:z-10 hover:brightness-125"
                    style={{
                      width: `${CELL}px`,
                      height: `${CELL}px`,
                      background: colors[level],
                      opacity: 0,
                      animation: `ghFadeIn 0.25s ease forwards`,
                      animationDelay: `${(wi * DAYS + di) * 4}ms`,
                    }}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const parentRect = e.currentTarget.closest(".relative")?.getBoundingClientRect();
                      setTooltip({
                        text: `${level === 0 ? "No contributions" : `${level} contribution${level !== 1 ? "s" : ""}`} · ${getDate(wi, di)}`,
                        x: rect.left - (parentRect?.left ?? 0),
                        y: rect.top - (parentRect?.top ?? 0) - 30,
                      });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  />
                ))}
              </div>
            ))}

            {/* Tooltip */}
            {tooltip && (
              <div
                className="absolute z-50 px-2 py-1 rounded text-[10px] font-medium pointer-events-none whitespace-nowrap"
                style={{
                  left: tooltip.x,
                  top: tooltip.y,
                  background: "rgba(var(--a1), 0.92)",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {tooltip.text}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1.5 justify-end">
        <span className="text-[10px] text-muted-foreground">Less</span>
        {DARK_COLORS.map((_, i) => (
          <div key={i} className="rounded-[2px]" style={{ width: "9px", height: "9px", background: colors[i] }} />
        ))}
        <span className="text-[10px] text-muted-foreground">More</span>
      </div>

      <style>{`
        @keyframes ghFadeIn {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
