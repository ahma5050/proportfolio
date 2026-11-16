import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Sparkles, Globe, X } from "lucide-react";
import { projects, ProjectItem } from "@/data/portfolio";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import { soundFx } from "@/lib/sound";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Public Sector", "Telecommunications", "Fintech", "AI & IoT"];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Public Sector") return project.category.includes("Public sector") || project.category.includes("Public Sector");
    if (activeFilter === "Telecommunications") return project.category.includes("Telecom");
    if (activeFilter === "Fintech") return project.category.includes("Hackathon") || project.category.includes("Payroll") || project.category.includes("One-Card");
    if (activeFilter === "AI & IoT") return project.category.includes("AI") || project.category.includes("Embedded");
    return true;
  });

  const openProjectModal = (project: ProjectItem) => {
    soundFx.playClick();
    setSelectedProject(project);
  };

  const closeModal = () => {
    soundFx.playClick();
    setSelectedProject(null);
  };

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-space scroll-mt-16">
      <div className="section-wrap">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-primary" />
              <p className="eyebrow">Production Portfolio</p>
            </div>
            <h2 id="projects-title" className="editorial-heading font-semibold">
              Engineered with <span className="gradient-text">precision & purpose.</span>
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground max-w-xl">
              Systems designed for real users, municipal administration, and telecom workflows with measurable performance gains.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg border border-border bg-card/60 backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundFx.playHover();
                  setActiveFilter(cat);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with 3D Tilt Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Tilt3DCard key={project.id} maxTilt={6} glare={true}>
              <article
                onClick={() => openProjectModal(project)}
                className="group cursor-pointer flex flex-col justify-between h-full rounded-xl border border-border bg-card/90 p-6 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Number & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {project.tag}
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="mt-4 space-y-1.5 border-t border-border/50 pt-3">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m} className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills Footer */}
                <div className="mt-6 pt-3 border-t border-border/40">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded px-2 py-0.5 text-[11px] font-mono bg-secondary/80 text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="rounded px-1.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 text-right">
                    <span className="text-xs text-primary font-medium group-hover:underline inline-flex items-center gap-1">
                      View Architecture Details →
                    </span>
                  </div>
                </div>
              </article>
            </Tilt3DCard>
          ))}
        </div>

        {/* Global Impact Summary Footer */}
        <div className="mt-10 rounded-xl border border-border bg-secondary/30 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-amber-500 shrink-0" />
            <p className="text-sm text-foreground">
              <strong className="font-semibold">19+ Full-Stack & System Solutions:</strong> Developed across government administration, telecom scale, national hackathons, and research.
            </p>
          </div>
          <a
            href="https://github.com/ahma5050"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 shrink-0"
          >
            Explore all code on GitHub <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Case Study / Details Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {selectedProject.tag}
                </span>
                <span className="text-xs text-muted-foreground">{selectedProject.category}</span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                {selectedProject.description}
              </p>

              <div className="grid gap-4 sm:grid-cols-2 mb-6 p-4 rounded-xl bg-secondary/40 border border-border/70">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    The Challenge
                  </h4>
                  <p className="text-xs text-foreground leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Engineering Solution
                  </h4>
                  <p className="text-xs text-foreground leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Key Metrics & Outcomes
                </h4>
                <div className="grid gap-2 sm:grid-cols-2">
                  {selectedProject.metrics.map((m) => (
                    <div key={m} className="flex items-center gap-2 p-2 rounded-md bg-background border border-border text-xs font-medium text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground border border-border/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border flex items-center justify-end gap-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-xs font-semibold rounded-md border border-border hover:bg-secondary transition-colors"
                >
                  Close
                </button>
                <a
                  href={`mailto:${projects[0] ? 'tekisha5050@gmail.com' : ''}?subject=Inquiry regarding ${encodeURIComponent(selectedProject.title)}`}
                  className="px-4 py-2 text-xs font-semibold rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Inquire About This System
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
