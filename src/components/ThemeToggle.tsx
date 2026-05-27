import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved !== "light"; // default is dark
    setIsDark(dark);
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    const timer = setTimeout(() => setVisible(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={toggle}
      className="theme-toggle theme-toggle-enter"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      style={{ bottom: "88px" }}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
