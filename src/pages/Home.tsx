import { useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GitHubSection from "@/components/GitHubSection";
import MyStory from "@/components/MyStory";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  // Global scroll-reveal for elements with class "sr"
  useEffect(() => {
    const els = document.querySelectorAll(".sr");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative transition-colors duration-400">
      <AnimatedBackground />
      <CursorGlow />
      <div className="relative z-10 p-4">
        <Navbar />
        <Hero />
        <About />
        <GitHubSection />
        <MyStory />
        <Experience />
        <Services />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle />
      <ScrollToTop />
    </div>
  );
}
