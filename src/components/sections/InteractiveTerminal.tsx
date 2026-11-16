import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Sparkles, Copy, Check, CornerDownLeft } from 'lucide-react';
import { terminalCommands, personalInfo } from '@/data/portfolio';
import { soundFx } from '@/lib/sound';

interface HistoryItem {
  command: string;
  output: string;
  isError?: boolean;
}

export const InteractiveTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'whoami',
      output: `Welcome! Ahmed Omer's portfolio terminal v2.4.\nFull-Stack Software Engineer & AI Systems Developer.\nType "help" or click the chips below to explore.`,
    },
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickCommands = ['whoami', 'skills', 'projects', 'experience', 'stats', 'contact', 'clear'];

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    soundFx.playClick();

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed === 'sudo hire' || trimmed === 'hire') {
      setHistory((prev) => [
        ...prev,
        {
          command: cmdStr,
          output: `✨ Authorization Granted!\nRedirecting recruiter priority channel...\nContact: ${personalInfo.email} | ${personalInfo.phone}\nReady for Full-Stack, AI, and Systems Engineering roles worldwide!`,
        },
      ]);
      soundFx.playSuccess();
      setInput('');
      return;
    }

    if (terminalCommands[trimmed]) {
      setHistory((prev) => [
        ...prev,
        { command: cmdStr, output: terminalCommands[trimmed] },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: cmdStr,
          output: `Command not found: "${cmdStr}". Type "help" to see valid commands.`,
          isError: true,
        },
      ]);
    }
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    soundFx.playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" aria-labelledby="terminal-title" className="section-space">
      <div className="section-wrap">
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="eyebrow">Interactive Shell</p>
            </div>
            <h2 id="terminal-title" className="editorial-heading font-semibold">
              Explore via <span className="gradient-text">Developer Terminal.</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl">
              Prefer the command line? Run CLI queries or click quick chips to inspect skills, architecture, and career benchmarks.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md border border-border bg-card/60 hover:border-primary transition-colors text-muted-foreground hover:text-foreground"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Email' : 'Copy Email'}</span>
            </button>
          </div>
        </div>

        {/* Terminal Window */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-xl border border-border bg-card/90 shadow-2xl backdrop-blur-md overflow-hidden font-mono text-xs sm:text-sm"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/50">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs text-muted-foreground flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                ahmed@engineer-workstation: ~
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="px-2 py-0.5 rounded bg-background/50 border border-border">zsh</span>
              <span>UTF-8</span>
            </div>
          </div>

          {/* Quick command buttons */}
          <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 border-b border-border/50 bg-secondary/20">
            <span className="text-[11px] text-muted-foreground mr-1">Quick Run:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand(cmd);
                }}
                className="px-2 py-0.5 text-xs rounded border border-border/60 bg-background/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                {cmd}
              </button>
            ))}
            <button
              onClick={(e) => {
                e.stopPropagation();
                executeCommand('sudo hire');
              }}
              className="px-2 py-0.5 text-xs rounded border border-emerald-500/50 bg-emerald-500/10 text-emerald-500 font-semibold hover:bg-emerald-500 hover:text-white transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" /> sudo hire
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-5 max-h-[360px] overflow-y-auto space-y-4">
            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span className="text-muted-foreground select-none">➜</span>
                  <span className="text-muted-foreground select-none">~</span>
                  <span>{item.command}</span>
                </div>
                <pre
                  className={`whitespace-pre-wrap leading-relaxed pl-4 font-mono text-xs sm:text-sm ${
                    item.isError ? 'text-destructive' : 'text-foreground/90'
                  }`}
                >
                  {item.output}
                </pre>
              </div>
            ))}
            <div ref={bottomRef} />

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2 text-foreground">
              <span className="text-emerald-500 font-bold select-none">➜</span>
              <span className="text-primary font-medium select-none">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command (e.g. skills, projects, sudo hire)..."
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="submit"
                aria-label="Send command"
                className="text-muted-foreground hover:text-primary p-1"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
