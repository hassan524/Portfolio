// app/RootLayout.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
}
