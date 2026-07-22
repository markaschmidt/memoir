"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ProjectsNavMenu } from "@/components/nav/projects-menu";
import {
  DiscordIcon,
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/icons";
import { MARK_DISCORD, MARK_EMAIL } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/ventures" },
  { label: "Accolades", href: "/accolades" },
  { label: "Literature", href: "/literature" },
  { label: "Investments", href: "/investments" },
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
      <span className="type-nav-label">{title}</span>
      {children}
    </div>
  );
}

async function copyToClipboard(value: string, successMessage: string) {
  try {
    await navigator.clipboard.writeText(value);
    toast.success(successMessage);
  } catch {
    toast.error("Unable to copy to clipboard. Please try again.");
  }
}

function copyEmail() {
  return copyToClipboard(
    MARK_EMAIL,
    "You have copied to your clipboard Mark's email address: markaaronschmidt@gmail.com"
  );
}

function copyDiscord() {
  return copyToClipboard(
    MARK_DISCORD,
    "You have copied to your clipboard Mark's Discord ID: ardenid"
  );
}

export function NavBar() {
  const pathname = usePathname();

  return (
    <header className="surface-nav animate-nav-enter">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <Link
          href="/about"
          className="group type-brand"
        >
          Mark Schmidt
          <span className="mt-1 block h-px w-0 bg-ink/30 transition-all duration-500 ease-out group-hover:w-full" />
        </Link>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-8 xl:gap-10">
          <NavSection title="Navigation">
            <nav
              aria-label="Primary"
              className="flex flex-wrap items-center gap-0.5 sm:gap-1"
            >
              <ProjectsNavMenu />
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "nav-link type-nav-link",
                    pathname === link.href && "nav-link-active"
                  )}
                  asChild
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </nav>
          </NavSection>

          <NavSection title="Contact">
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon-sm"
                className="social-link button-social"
                aria-label="Copy Mark's email address"
                onClick={copyEmail}
              >
                <EmailIcon />
              </Button>
              <Button
                variant="outline"
                size="icon-sm"
                className="social-link button-social"
                aria-label="Copy Mark's Discord ID"
                onClick={copyDiscord}
              >
                <DiscordIcon />
              </Button>
            </div>
          </NavSection>

          <NavSection title="Socials">
            <nav aria-label="Social media" className="flex items-center gap-1">
              {SOCIAL_LINKS.map((social) => (
                <Button
                  key={social.href}
                  variant="outline"
                  size="icon-sm"
                  className="social-link button-social"
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
