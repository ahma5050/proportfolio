import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { soundFx } from "@/lib/sound";

export const Footer = () => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t hairline bg-background py-8 sm:py-12 px-3">
      <div className="section-wrap flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="w-6 h-6 shrink-0 rounded bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-[10px] text-primary">
              AO
            </span>
            <span className="font-bold tracking-tight text-foreground text-sm">
              {personalInfo.name}
            </span>
            <span className="text-xs text-muted-foreground">· Software Engineer</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground max-w-sm leading-relaxed">
            Architecting reliable full-stack applications, municipal public platforms, and real-time systems.
          </p>
        </div>

        {/* Social and Action Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 w-full md:w-auto">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2.5 sm:p-2 rounded-md border border-border bg-card/60 hover:border-primary text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2.5 sm:p-2 rounded-md border border-border bg-card/60 hover:border-primary text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Ahmed"
            className="p-2.5 sm:p-2 rounded-md border border-border bg-card/60 hover:border-primary text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:px-3 sm:py-2 rounded-md border border-border bg-card text-xs font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="section-wrap mt-6 sm:mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-xs text-muted-foreground gap-3 sm:gap-2">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Standardized for global software engineering excellence.</p>
        <p className="flex items-center justify-center sm:justify-end gap-1 shrink-0">
          Engineered with React, TypeScript & Three.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;