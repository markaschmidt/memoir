"use client";

import { Button } from "@/components/ui/button";
import {
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/components/icons/social-icons";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Ventures", href: "#ventures" },
  { label: "Accolades", href: "#accolades" },
  { label: "Literature", href: "#literature" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/markaschmidt",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mark-aaron-schmidt/",
    icon: LinkedInIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ardenatreef",
    icon: YouTubeIcon,
  },
] as const;

function NavSection({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <span className="font-serif text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ink-muted/80">
        {title}
      </span>
      {children}
    </div>
  );
}

export function NavBar() {
  return (
    <header className="animate-nav-enter sticky top-0 z-50 border-b border-ink/8 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <a
          href="#about"
          className="group font-serif text-2xl font-medium tracking-tight text-ink transition-colors duration-300 hover:text-ink-muted"
        >
          Mark Schmidt
          <span className="mt-1 block h-px w-0 bg-ink/30 transition-all duration-500 ease-out group-hover:w-full" />
        </a>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-10">
          <NavSection title="Navigation">
            <nav
              aria-label="Primary"
              className="flex flex-wrap gap-0.5 sm:gap-1"
            >
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  size="sm"
                  className="nav-link font-serif text-[0.95rem] font-normal tracking-wide text-ink/85"
                  asChild
                >
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
            </nav>
          </NavSection>

          <NavSection title="Socials">
            <nav
              aria-label="Social media"
              className="flex items-center gap-1"
            >
              {SOCIAL_LINKS.map((social) => (
                <Button
                  key={social.href}
                  variant="outline"
                  size="icon-sm"
                  className="social-link border-ink/12 bg-paper-elevated/60 text-ink/75 hover:border-ink/25 hover:bg-paper-elevated hover:text-ink"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                </Button>
              ))}
            </nav>
          </NavSection>
        </div>
      </div>
    </header>
  );
}
