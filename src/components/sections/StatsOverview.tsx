import React from 'react';
import { stats } from '@/data/portfolio';
import { Award, Zap, CheckCircle2, TrendingUp } from 'lucide-react';
import Tilt3DCard from '@/components/ui/Tilt3DCard';

export const StatsOverview = () => {
  const icons = [
    <CheckCircle2 key="0" className="w-5 h-5 text-emerald-500" />,
    <Zap key="1" className="w-5 h-5 text-amber-500" />,
    <TrendingUp key="2" className="w-5 h-5 text-cyan-500" />,
    <Award key="3" className="w-5 h-5 text-purple-500" />,
  ];

  return (
    <section className="relative border-y hairline bg-secondary/20 py-14 overflow-hidden">
      {/* Soft ambient blur effects */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-36 bg-primary/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-36 bg-accent/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="section-wrap relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => (
            <Tilt3DCard key={item.label} maxTilt={8} glare={true}>
              <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xl shadow-lg hover:border-primary/50 transition-all group">
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2.5 rounded-xl bg-secondary/80 border border-border/50 group-hover:scale-105 transition-transform shadow-sm">
                    {icons[idx] || <Award className="w-5 h-5 text-primary" />}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground font-semibold">0{idx + 1}</span>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight gradient-text">
                  {item.value}
                </div>
                <div className="mt-1.5 font-bold text-sm text-foreground">
                  {item.label}
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsOverview;
