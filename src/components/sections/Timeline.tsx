import { useState } from "react";
import { Award, Briefcase, GraduationCap, Languages, MapPin, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import {
  certifications,
  education,
  experience,
  languages,
} from "@/data/portfolio";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import { soundFx } from "@/lib/sound";

export const Timeline = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="experience" aria-labelledby="experience-title" className="section-space scroll-mt-16">
      <div className="section-wrap">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="px-3">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-primary" />
              <p className="eyebrow">Career & Credentials</p>
            </div>
            <h2 id="experience-title" className="editorial-heading font-semibold">
              Track record of <span className="gradient-text">verifiable impact.</span>
            </h2>
            <p className="mt-2 text-base text-muted-foreground max-w-xl">
              Proven hands-on engineering across municipal administrations, national telecom infrastructure, and competitive hackathons.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="inline-flex items-center p-1 rounded-lg border border-border bg-card/60 backdrop-blur-sm">
            <button
              onClick={() => {
                soundFx.playHover();
                setActiveTab("experience");
              }}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                activeTab === "experience"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              Experience
            </button>
            <button
              onClick={() => {
                soundFx.playHover();
                setActiveTab("education");
              }}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                activeTab === "education"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Education & Honors
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.9fr] lg:gap-16">
          {/* Left Column: Timeline Items */}
          <div className="space-y-6">
            {experience.map((item, index) => (
              <Tilt3DCard key={item.id} maxTilt={4} glare={false}>
                <article className="rounded-xl border border-border bg-card/85 p-6 sm:p-7 shadow-sm hover:border-primary/50 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-secondary text-primary">
                      {item.period}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mt-2">
                    <h3 className="text-lg font-bold text-foreground">{item.role}</h3>
                    <span className="text-sm font-semibold text-primary">{item.company}</span>
                  </div>

                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-muted-foreground" />
                    {item.location}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-border/50 pt-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Tilt3DCard>
            ))}
          </div>

          {/* Right Column: Education, Certifications & Accreditations */}
          <aside className="space-y-6">
            {/* Education Box */}
            <div className="rounded-xl border border-border bg-card/85 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-border/60">
                <GraduationCap className="h-4 w-4" />
                <span>Academic Degree</span>
              </div>
              <h4 className="text-base font-bold text-foreground">{education.degree}</h4>
              <p className="mt-1 text-sm text-primary font-medium">{education.institution}</p>
              <p className="mt-2 text-xs text-muted-foreground font-mono">{education.period}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded bg-secondary font-medium">
                  Cumulative GPA: <strong className="text-foreground">{education.gpa}</strong>
                </span>
                <span className="px-2.5 py-1 rounded bg-secondary font-medium">
                  National Exit Exam: <strong className="text-foreground">{education.exitExam}</strong>
                </span>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Specialized in distributed architectures, database engines, and software engineering methodologies.
              </p>
            </div>

            {/* Certifications Box */}
            <div className="rounded-xl border border-border bg-card/85 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-border/60">
                <Award className="h-4 w-4" />
                <span>Honors & Certifications</span>
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.title} className="text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">{cert.title}</span>
                      <span className="font-mono text-[10px] text-muted-foreground px-1.5 py-0.5 rounded bg-secondary">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-primary font-medium text-[11px]">{cert.issuer}</p>
                    <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Box */}
            <div className="rounded-xl border border-border bg-card/85 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-border/60">
                <Languages className="h-4 w-4" />
                <span>Languages</span>
              </div>
              <div className="space-y-2.5">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-foreground">{lang.name}</span>
                    <span className="text-muted-foreground font-mono text-[11px]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
