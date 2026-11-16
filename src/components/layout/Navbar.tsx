import { useState } from "react";
import { Command, Menu, Moon, Sun, Volume2, VolumeX, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useTheme } from "@/contexts/ThemeContext";
import { soundFx } from "@/lib/sound";
import CommandPalette from "@/components/ui/CommandPalette";

const navLinks = [
  { href: "#projects", label: "Work" },
  { href: "#architecture", label: "Architecture" },
  { href: "#skills", label: "Skills" },
  { href: "#terminal", label: "Terminal" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundFx.isEnabled());
  const { toggleTheme, isGold } = useTheme();

  const closeMenu = () => setIsMenuOpen(false);

  const toggleSound = () => {
    const newState = soundFx.toggle();
    setSoundEnabled(newState);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b hairline bg-background/80 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="section-wrap flex min-h-[68px] items-center justify-between gap-4"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={() => {
              soundFx.playClick();
              closeMenu();
            }}
            aria-label={`${personalInfo.name}, home`}
            className="flex items-center gap-2.5 group"
          >
            <span className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-xs text-primary group-hover:bg-primary group-hover:text-primary-foreground shadow-sm transition-all">
              AO
            </span>
            <span className="text-base font-bold tracking-tight text-foreground">
              AHMED<span className="text-primary">.OMER</span>
            </span>
          </a>

          {/* Nav Links Desktop */}
          <div className="flex items-center gap-3">
            <ul className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onMouseEnter={() => soundFx.playHover()}
                    onClick={() => soundFx.playClick()}
                    className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Command Palette Trigger */}
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setPaletteOpen(true);
              }}
              className="hidden lg:inline-flex items-center gap-2 px-2.5 py-1.5 text-xs text-muted-foreground rounded-lg border border-border/80 bg-card/60 backdrop-blur-md hover:text-foreground hover:border-primary/50 transition-all shadow-sm"
              title="Open Command Palette (Cmd + K)"
            >
              <Command className="h-3 w-3 text-primary" />
              <span className="text-[11px] font-mono">⌘K</span>
            </button>

            {/* Sound FX Toggle */}
            <button
              type="button"
              onClick={toggleSound}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 hover:border-border transition-colors hover:bg-secondary/70 backdrop-blur-sm text-muted-foreground hover:text-foreground"
              aria-label={soundEnabled ? "Mute sound effects" : "Enable sound effects"}
              title={soundEnabled ? "Sound: On" : "Sound: Off"}
            >
              {soundEnabled ? (
                <Volume2 aria-hidden="true" className="h-4 w-4 text-emerald-500" />
              ) : (
                <VolumeX aria-hidden="true" className="h-4 w-4 opacity-60" />
              )}
            </button>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                toggleTheme();
              }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 hover:border-border transition-colors hover:bg-secondary/70 backdrop-blur-sm text-muted-foreground hover:text-foreground"
              aria-label={`Switch theme`}
              title="Toggle Theme"
            >
              {isGold ? (
                <Moon aria-hidden="true" className="h-4 w-4 text-amber-500" />
              ) : (
                <Sun aria-hidden="true" className="h-4 w-4 text-cyan-400" />
              )}
            </button>

            {/* Primary CTA */}
            <a
              href="#contact"
              onClick={() => soundFx.playClick()}
              className="hidden rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-all md:inline-flex"
            >
              Get in Touch
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setIsMenuOpen((open) => !open);
              }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:bg-secondary md:hidden"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown navigation */}
        {isMenuOpen && (
          <div className="border-t hairline bg-background/95 backdrop-blur-xl md:hidden animate-in slide-in-from-top-2 duration-200">
            <ul className="section-wrap py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      soundFx.playClick();
                      closeMenu();
                    }}
                    className="block py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors border-b border-border/40"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="#contact"
                  onClick={() => {
                    soundFx.playClick();
                    closeMenu();
                  }}
                  className="block w-full text-center py-2.5 rounded-lg bg-primary text-xs font-semibold text-primary-foreground shadow-sm"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Command Palette Modal */}
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </>
  );
};

export default Navbar;
