import { memo, useMemo } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { useTheme } from "../context/ThemeContext";

const AppContent = () => {
  const { isDarkMode } = useTheme();

  const containerClassName = useMemo(() => {
    return `overflow-x-hidden antialiased selection:bg-[#87CEEB] selection:text-cyan-900 ${
      isDarkMode
        ? "bg-neutral-950 text-neutral-300"
        : "bg-[#F1F1F2] text-neutral-800"
    }`;
  }, [isDarkMode]);

  const backgroundClassName = useMemo(() => {
    return `absolute top-0 z-[-2] h-screen w-screen ${
      isDarkMode
        ? "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        : "bg-[#F1F1F2]"
    }`;
  }, [isDarkMode]);

  return (
    <div className={containerClassName}>
      <div className="fixed top-0 -z-10 h-screen w-screen ">
        <div className={backgroundClassName}></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default memo(AppContent);
