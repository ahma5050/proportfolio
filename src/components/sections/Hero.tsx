import { useState } from 'react';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Check,
  Copy,
  CheckCircle2,
  ArrowUpRight,
  Award,
  Terminal,
  GraduationCap,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import Hero3DCanvas from "@/components/3d/Hero3DCanvas";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import { soundFx } from "@/lib/sound";

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    soundFx.playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-[94svh] w-full flex items-center overflow-x-clip border-b hairline py-12 sm:py-20 lg:py-28"
    >
      {/* Immersive 3D Canvas running under the entire hero section */}
      <Hero3DCanvas />

      <div className="section-wrap relative z-10 w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="flex flex-col justify-center min-w-0">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-background/80 backdrop-blur-md w-fit max-w-full mb-5 sm:mb-6 text-[11px] sm:text-xs text-foreground shadow-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400 shrink-0">
              Available
            </span>
            <span className="text-muted-foreground truncate">
              · Full-Stack & Systems Roles
            </span>
          </div>

          <h1
            id="hero-title"
            className="display-heading max-w-2xl text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.15]"
          >
            Architecting <span className="gradient-text">resilient software</span>{" "}
            for the modern web & edge.
          </h1>

          <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
            I’m{" "}
            <strong className="font-semibold text-foreground">
              {personalInfo.name}
            </strong>
            , a Software Engineer with production experience across
            <span className="text-foreground font-medium">
              {" "}
              municipal enterprise portals
            </span>
            ,
            <span className="text-foreground font-medium">
              {" "}
              telecom-scale real-time tools
            </span>
            , and
            <span className="text-foreground font-medium">
              {" "}
              applied AI systems
            </span>
            .
          </p>

          {/* Location & Credentials Badge */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
              <span>{personalInfo.location}</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline text-border">
              |
            </span>
            <div className="flex items-center gap-1.5">
              <GraduationCap
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-amber-500"
              />
              <span>B.Sc. Software Engineering (Wollo Univ.)</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <a
              href="#projects"
              onClick={() => soundFx.playClick()}
              className="inline-flex min-h-11 sm:min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 hover:shadow-primary/25 hover:shadow-lg active:scale-95"
            >
              Explore Featured Work{" "}
              <ArrowDown aria-hidden="true" className="h-4 w-4 shrink-0" />
            </a>
            <a
              href={personalInfo.cv}
              download
              onClick={() => soundFx.playClick()}
              className="inline-flex min-h-11 sm:min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-border bg-card/90 backdrop-blur-sm px-5 py-3 text-sm font-semibold transition-all hover:border-primary hover:text-primary active:scale-95 shadow-sm"
            >
              Download Résumé{" "}
              <Download aria-hidden="true" className="h-4 w-4 shrink-0" />
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex min-h-11 sm:min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-border/80 bg-secondary/70 backdrop-blur-sm px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              title="Copy Email to Clipboard"
            >
              {copied ? (
                <Check className="w-4 h-4 shrink-0 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4 shrink-0" />
              )}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </button>
          </div>

          {/* Social Proof & Direct Channels */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 pt-4 border-t border-border/60">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              aria-label="GitHub profile"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <Github className="h-4 w-4 shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              aria-label="LinkedIn profile"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <Linkedin className="h-4 w-4 shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium break-all"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span>{personalInfo.email}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Executive Developer Showcase Card */}
        <div className="relative flex justify-center lg:justify-center min-w-0">
          <Tilt3DCard maxTilt={8} glare={true} className="w-full max-w-md">
            <div className="rounded-2xl border border-border/90 bg-card/85 p-4 sm:p-6 md:p-7 shadow-2xl backdrop-blur-xl">
              {/* Profile Header */}
              <div className="flex items-center gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-border/60">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden border-2 border-primary/40 bg-muted shadow-md">
                  <img
                    src={personalInfo.image}
                    alt={`Portrait of ${personalInfo.name}`}
                    className="w-full h-full object-cover"
                    width="160"
                    height="160"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-foreground truncate">
                      {personalInfo.name}
                    </h3>
                    <span
                      className="p-1 shrink-0 rounded-full bg-emerald-500/10 text-emerald-500"
                      title="Verified Software Engineer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="text-xs text-primary font-semibold mt-0.5 truncate">
                    {personalInfo.title}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-2">
                    {personalInfo.specialty}
                  </p>
                </div>
              </div>

              {/* Key Verified Highlights */}
              <div className="py-4 space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs leading-relaxed">
                  <Award className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">
                      Municipal Digital Transformation:
                    </strong>{" "}
                    Architected & deployed the Bati City Portal, officially
                    commended.
                  </p>
                </div>
                <div className="flex items-start gap-2.5 text-xs leading-relaxed">
                  <Terminal className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">
                      Ethio Telecom Systems:
                    </strong>{" "}
                    Real-time WebSockets & router deployment scripts (+30%
                    velocity).
                  </p>
                </div>
                <div className="flex items-start gap-2.5 text-xs leading-relaxed">
                  <GraduationCap
                    aria-hidden="true"
                    className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                  />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">
                      Qelem Meda Hackathon:
                    </strong>{" "}
                    3rd Place out of 50 teams for real-time payroll performance
                    engine (+40% speedup).
                  </p>
                </div>
              </div>

              {/* Core Tech Stack Badges */}
              <div className="pt-4 border-t border-border/60">
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2.5">
                  Production Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Python",
                    "PostgreSQL",
                    "C++",
                    "WebSockets",
                    "Docker",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-mono font-medium rounded-md bg-secondary/80 text-secondary-foreground border border-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Contact Action */}
              <div className="mt-4 sm:mt-5 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-[11px] text-muted-foreground">
                  Ready for interview & technical screen
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline shrink-0"
                >
                  Schedule Call <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;