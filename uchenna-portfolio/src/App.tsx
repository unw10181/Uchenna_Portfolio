import { useEffect, useState } from "react";
import AOS from "aos";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProjectsCarousel from "./components/ProjectsCarousel";
import SkillsPanel from "./components/SkillsPanel";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState<boolean>(true);

  // Theme load
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const shouldDark = stored ? stored === "dark" : true;
    setDark(shouldDark);
    document.documentElement.classList.toggle("dark", shouldDark);
  }, []);

  // AOS init
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 80,
      duration: 650,
      easing: "ease-out-cubic",
    });
  }, []);

  // AOS refresh on theme change (optional but nice)
  useEffect(() => {
    AOS.refresh();
  }, [dark]);

  const onToggle = () => {
    setDark((v) => {
      const next = !v;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const onJump = (id: string) => {
    const el = id === "top" ? document.body : document.getElementById(id);
    if (!el) return;
    const top =
      id === "top" ? 0 : el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-arcade">
      <Nav dark={dark} onToggle={onToggle} onJump={onJump} />
      <Hero />
      <ProjectsCarousel />
      <SkillsPanel />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
