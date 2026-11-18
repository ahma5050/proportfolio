import { useState } from 'react';
import { Network, Play, CheckCircle2, Cpu, Server, Database, Globe, Shield, RefreshCw, Zap, ArrowRight, Layers } from 'lucide-react';
import Tilt3DCard from '@/components/ui/Tilt3DCard';
import { soundFx } from '@/lib/sound';

interface ArchitectureSystem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  nodes: {
    id: string;
    title: string;
    tech: string;
    role: string;
    icon: string;
  }[];
  metrics: {
    throughput: string;
    latency: string;
    reliability: string;
    cacheHit: string;
  };
}

export const ArchitectureVisualizer = () => {
  const [activeSystemId, setActiveSystemId] = useState<string>('telecom');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(-1);
  const [simStats, setSimStats] = useState({
    latency: '18ms',
    status: 'Operational',
    packets: 1240,
  });

  const systems: ArchitectureSystem[] = [
    {
      id: 'telecom',
      name: 'Ethio Telecom Real-Time Engine',
      subtitle: 'High-concurrency WebSocket messaging & router automated provisioning',
      category: 'Telecommunications',
      nodes: [
        { id: 'client', title: 'Internal Client', tech: 'React / Socket.io', role: 'Real-time UI & Router Admin', icon: 'globe' },
        { id: 'gateway', title: 'WebSocket Gateway', tech: 'Node.js Cluster', role: 'Event routing & Auth handshake', icon: 'server' },
        { id: 'queue', title: 'Event Dispatcher', tech: 'Python / Redis', role: 'State sync & Router automation', icon: 'cpu' },
        { id: 'database', title: 'Data Tier', tech: 'MongoDB / MySQL', role: 'Audit records & Telemetry storage', icon: 'database' },
      ],
      metrics: {
        throughput: '10,000+ msg/min',
        latency: '< 20ms',
        reliability: '99.9% Uptime',
        cacheHit: '98.5%',
      },
    },
    {
      id: 'bati',
      name: 'Bati City Municipal Cloud Portal',
      subtitle: 'Citizen service workflows, records management, and staff attendance',
      category: 'Public Sector',
      nodes: [
        { id: 'citizen', title: 'Public Portal', tech: 'React / TypeScript', role: 'Citizen verification & service requests', icon: 'globe' },
        { id: 'api', title: 'Secure API Gateway', tech: 'Node.js / Express', role: 'Role-based access & rate limiting', icon: 'shield' },
        { id: 'doc', title: 'Records Engine', tech: 'Digital File Index', role: 'Official record indexing & tracking', icon: 'cpu' },
        { id: 'db', title: 'Primary Database', tech: 'PostgreSQL / Backup', role: 'Encrypted municipal data store', icon: 'database' },
      ],
      metrics: {
        throughput: 'Sub-second queries',
        latency: '35ms avg',
        reliability: 'Zero data loss',
        cacheHit: '95.2%',
      },
    },
    {
      id: 'payroll',
      name: 'Qelem Meda Awarded Payroll Engine',
      subtitle: '3rd Place / 50 Teams · Multi-tier salary computation & deductions validator',
      category: 'Fintech / High-Scale',
      nodes: [
        { id: 'entry', title: 'Batch Dispatcher', tech: 'React Dashboard', role: 'Batch ingestion & financial charts', icon: 'globe' },
        { id: 'worker', title: 'Compute Engine', tech: 'Node.js Parallel', role: 'Dynamic tax bracket evaluation', icon: 'cpu' },
        { id: 'cache', title: 'In-Memory Cache', tech: 'Redis Store', role: 'Sub-second intermediate lookup', icon: 'server' },
        { id: 'ledger', title: 'Immutable Ledger', tech: 'SQL Database', role: 'Audit-ready salary statements', icon: 'database' },
      ],
      metrics: {
        throughput: '+40% speedup',
        latency: '12ms calculation',
        reliability: '100% precision',
        cacheHit: '99.1%',
      },
    },
  ];

  const currentSystem = systems.find((s) => s.id === activeSystemId) || systems[0];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    soundFx.playClick();
    setSimStep(0);

    const stepInterval = setInterval(() => {
      setSimStep((prev) => {
        if (prev >= 3) {
          clearInterval(stepInterval);
          setIsSimulating(false);
          soundFx.playSuccess();
          setSimStats((s) => ({
            latency: `${Math.floor(Math.random() * 8) + 12}ms`,
            status: 'Delivered 200 OK',
            packets: s.packets + 1,
          }));
          return -1;
        }
        soundFx.playHover();
        return prev + 1;
      });
    }, 450);
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case 'globe':
        return <Globe className="w-5 h-5 text-cyan-500" />;
      case 'server':
        return <Server className="w-5 h-5 text-emerald-500" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-amber-500" />;
      case 'database':
        return <Database className="w-5 h-5 text-purple-500" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-blue-500" />;
      default:
        return <Network className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="architecture" aria-labelledby="arch-title" className="section-space relative overflow-hidden">
      {/* Dynamic Ambient Blurred Glowing Orbs for Luxury Depth */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-primary/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-accent/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="section-wrap relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className='px-3'>
            <div className="flex items-center gap-2 mb-3">
              <Network className="w-4 h-4 text-primary" />
              <p className="eyebrow">Interactive Systems Architecture</p>
            </div>
            <h2 id="arch-title" className="editorial-heading font-semibold">
              Engineered for <span className="gradient-text">scale & reliability.</span>
            </h2>
            <p className="mt-2 text-base text-muted-foreground max-w-xl">
              Inspect how data flows through production microservices, real-time message brokers, and enterprise databases.
            </p>
          </div>

          {/* System Switcher Tabs with Frosted Glass */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl border border-border/80 bg-card/60 backdrop-blur-xl shadow-lg">
            {systems.map((sys) => (
              <button
                key={sys.id}
                onClick={() => {
                  soundFx.playHover();
                  setActiveSystemId(sys.id);
                  setSimStep(-1);
                }}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeSystemId === sys.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                }`}
              >
                {sys.name.split(' ')[0]} {sys.name.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Main Architecture Showcase Glass Box */}
        <Tilt3DCard maxTilt={4} glare={true}>
          <div className="rounded-3xl border border-border/80 bg-card/75 backdrop-blur-2xl p-6 sm:p-9 shadow-2xl relative overflow-hidden">
            {/* Top Bar Details */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-border/60 gap-4">
              <div>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {currentSystem.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-2">
                  {currentSystem.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {currentSystem.subtitle}
                </p>
              </div>

              {/* Simulation Trigger Button */}
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-xs shadow-lg hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 shrink-0"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Transmitting Packets...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Simulate Pipeline Flow</span>
                  </>
                )}
              </button>
            </div>

            {/* Interactive Animated Architecture Node Pipeline */}
            <div className="py-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 relative">
              {currentSystem.nodes.map((node, idx) => {
                const isActiveStep = simStep === idx;
                const isPassed = simStep > idx;

                return (
                  <div key={node.id} className="relative">
                    <div
                      className={`h-full rounded-2xl border p-5 transition-all duration-300 backdrop-blur-md ${
                        isActiveStep
                          ? 'border-primary ring-2 ring-primary/40 bg-primary/10 scale-105 shadow-xl'
                          : isPassed
                          ? 'border-emerald-500/50 bg-emerald-500/5 shadow-sm'
                          : 'border-border/70 bg-secondary/40 hover:border-primary/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="p-2.5 rounded-xl bg-card border border-border/60 shadow-sm">
                          {renderIcon(node.icon)}
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground font-semibold">
                          0{idx + 1}
                        </span>
                      </div>

                      <h4 className="font-bold text-sm text-foreground">
                        {node.title}
                      </h4>
                      <p className="text-xs font-mono text-primary font-medium mt-1">
                        {node.tech}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        {node.role}
                      </p>

                      {/* Active Indicator Pulse */}
                      {isActiveStep && (
                        <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-primary animate-pulse">
                          <Zap className="w-3 h-3 text-amber-500" />
                          <span>Processing Packet...</span>
                        </div>
                      )}
                    </div>

                    {/* Connecting Arrow for desktop */}
                    {idx < currentSystem.nodes.length - 1 && (
                      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-muted-foreground/60">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Live Metrics Grid with Glass Background */}
            <div className="pt-6 border-t border-border/60 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-secondary/50 border border-border/60 backdrop-blur-md">
                <span className="text-[11px] text-muted-foreground block font-mono">THROUGHPUT</span>
                <span className="text-sm sm:text-base font-bold text-foreground">
                  {currentSystem.metrics.throughput}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-secondary/50 border border-border/60 backdrop-blur-md">
                <span className="text-[11px] text-muted-foreground block font-mono">LATENCY</span>
                <span className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400">
                  {isSimulating ? 'Sampling...' : currentSystem.metrics.latency}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-secondary/50 border border-border/60 backdrop-blur-md">
                <span className="text-[11px] text-muted-foreground block font-mono">RELIABILITY</span>
                <span className="text-sm sm:text-base font-bold text-foreground">
                  {currentSystem.metrics.reliability}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-secondary/50 border border-border/60 backdrop-blur-md">
                <span className="text-[11px] text-muted-foreground block font-mono">CACHE HIT RATIO</span>
                <span className="text-sm sm:text-base font-bold text-primary">
                  {currentSystem.metrics.cacheHit}
                </span>
              </div>
            </div>
          </div>
        </Tilt3DCard>
      </div>
    </section>
  );
};

export default ArchitectureVisualizer;
