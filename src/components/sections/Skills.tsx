import { useState } from "react";
import { skills } from "@/data/portfolio";
import { Code2, Layout, Server, Cpu, Search, Check, Copy } from "lucide-react";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import { soundFx } from "@/lib/sound";

export const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedTech, setCopiedTech] = useState<string | null>(null);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-emerald-500" />;
      case 1:
        return <Layout className="w-5 h-5 text-cyan-500" />;
      case 2:
        return <Server className="w-5 h-5 text-purple-500" />;
      case 3:
        return <Cpu className="w-5 h-5 text-amber-500" />;
      default:
        return <Code2 className="w-5 h-5 text-primary" />;
    }
  };

  const handleCopyTech = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedTech(name);
    soundFx.playHover();
    setTimeout(() => setCopiedTech(null), 1500);
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-space scroll-mt-16 border-y hairline bg-secondary/30"
    >
      <div className="section-wrap">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="px-3">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-4 h-4 text-primary" />
              <p className="eyebrow">Technical Mastery</p>
            </div>
            <h2 id="skills-title" className="editorial-heading font-semibold">
              Modern full-stack & <span className="gradient-text">systems architecture.</span>
            </h2>
            <p className="mt-2 text-base text-muted-foreground max-w-xl">
              Curated competencies across systems engineering, reactive UI frameworks, high-throughput APIs, and embedded intelligence.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter skills (e.g. React, Python)..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary shadow-sm"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((category, catIdx) => {
            const filteredItems = category.items.filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredItems.length === 0) return null;

            return (
              <Tilt3DCard key={category.category} maxTilt={5} glare={true}>
                <article className="h-full rounded-xl border border-border bg-card/85 p-6 shadow-sm backdrop-blur-sm flex flex-col justify-between hover:border-primary/50 transition-all">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border/60">
                      <span className="p-2 rounded-lg bg-secondary/80">
                        {getCategoryIcon(catIdx)}
                      </span>
                      <div>
                        <h3 className="font-bold text-sm text-foreground">
                          {category.category}
                        </h3>
                        <span className="text-[11px] text-muted-foreground font-mono">
                          {filteredItems.length} skills listed
                        </span>
                      </div>
                    </div>

                    {/* Skill Items */}
                    <div className="space-y-3.5">
                      {filteredItems.map((item) => (
                        <div
                          key={item.name}
                          onClick={() => handleCopyTech(item.name)}
                          className="group/item cursor-pointer"
                          title="Click to copy skill name"
                        >
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="font-medium text-foreground group-hover/item:text-primary transition-colors flex items-center gap-1.5">
                              {item.name}
                              {copiedTech === item.name ? (
                                <Check className="w-3 h-3 text-emerald-500 inline" />
                              ) : (
                                <Copy className="w-2.5 h-2.5 text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity" />
                              )}
                            </span>
                            <span className="font-mono text-[11px] text-muted-foreground">
                              {item.level}%
                            </span>
                          </div>

                          {/* Level Progress Bar */}
                          <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-700 rounded-full"
                              style={{ width: `${item.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border/40 text-[11px] text-muted-foreground text-center">
                    Click any skill to copy
                  </div>
                </article>
              </Tilt3DCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
