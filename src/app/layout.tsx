"use client"
import { useEffect } from 'react';
import './assets/globals.css'
import "./assets/style.css"
import 'animate.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
