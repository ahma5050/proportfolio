import React, { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Code2,
  Download,
  FolderGit2,
  GraduationCap,
  Mail,
  Moon,
  Network,
  Sun,
  Terminal,
  Volume2,
  VolumeX,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { soundFx } from "@/lib/sound";
import { useTheme } from "@/contexts/ThemeContext";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ open, onOpenChange }) => {
  const { toggleTheme, isGold } = useTheme();
  const [soundEnabled, setSoundEnabled] = useState(soundFx.isEnabled());

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const runCommand = (action: () => void) => {
    soundFx.playClick();
    onOpenChange(false);
    action();
  };

  const scrollTo = (id: string) => {
    runCommand(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search sections..." />
      <CommandList>
        <CommandEmpty>No matching actions found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => scrollTo("projects")}>
            <FolderGit2 className="mr-2 h-4 w-4 text-primary" />
            <span>View Featured Work & Projects</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("architecture")}>
            <Network className="mr-2 h-4 w-4 text-primary" />
            <span>Interactive Systems Architecture</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("skills")}>
            <Code2 className="mr-2 h-4 w-4 text-primary" />
            <span>Inspect Technical Skills & Stack</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("terminal")}>
            <Terminal className="mr-2 h-4 w-4 text-primary" />
            <span>Open Interactive Developer Terminal</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("experience")}>
            <GraduationCap className="mr-2 h-4 w-4 text-primary" />
            <span>Career History & Certifications</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("contact")}>
            <Mail className="mr-2 h-4 w-4 text-primary" />
            <span>Contact & Inquiries</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Quick Actions">
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                const link = document.createElement("a");
                link.href = personalInfo.cv;
                link.download = "Ahmed_Omer_CV.pdf";
                link.click();
              })
            }
          >
            <Download className="mr-2 h-4 w-4 text-emerald-500" />
            <span>Download Official Résumé (PDF)</span>
          </CommandItem>

          <CommandItem
            onSelect={() =>
              runCommand(() => {
                navigator.clipboard.writeText(personalInfo.email);
              })
            }
          >
            <Mail className="mr-2 h-4 w-4 text-cyan-500" />
            <span>Copy Email to Clipboard</span>
          </CommandItem>

          <CommandItem
            onSelect={() => {
              const newState = soundFx.toggle();
              setSoundEnabled(newState);
            }}
          >
            {soundEnabled ? (
              <VolumeX className="mr-2 h-4 w-4 text-amber-500" />
            ) : (
              <Volume2 className="mr-2 h-4 w-4 text-amber-500" />
            )}
            <span>Toggle Sound Effects: {soundEnabled ? "Mute" : "Unmute"}</span>
          </CommandItem>

          <CommandItem
            onSelect={() =>
              runCommand(() => {
                toggleTheme();
              })
            }
          >
            {isGold ? (
              <Moon className="mr-2 h-4 w-4 text-purple-500" />
            ) : (
              <Sun className="mr-2 h-4 w-4 text-purple-500" />
            )}
            <span>Switch Theme: {isGold ? "Cosmic Dark" : "Emerald Gold"}</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandPalette;
