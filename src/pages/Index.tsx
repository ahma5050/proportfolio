import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsOverview from "@/components/sections/StatsOverview";
import Projects from "@/components/sections/Projects";
import ArchitectureVisualizer from "@/components/sections/ArchitectureVisualizer";
import Skills from "@/components/sections/Skills";
import InteractiveTerminal from "@/components/sections/InteractiveTerminal";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

const Index = () => (
  <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
    <a
      className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold"
      href="#main-content"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main-content">
      <Hero />
      <StatsOverview />
      <Projects />
      <ArchitectureVisualizer />
      <Skills />
      <InteractiveTerminal />
      <Timeline />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
