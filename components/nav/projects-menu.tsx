"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PROJECT_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Game Development", href: "/game-development" },
] as const;

export function ProjectsNavMenu() {
  const pathname = usePathname();
  const active = PROJECT_LINKS.some((link) => pathname === link.href);

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "nav-link type-nav-link gap-1",
            active && "nav-link-active"
          )}
          aria-haspopup="menu"
        >
          Projects
          <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} className="size-3.5 opacity-70" />
        </Button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align="start"
          sideOffset={6}
          className="z-50 min-w-44 rounded-2xl border border-ink/10 bg-popover p-1 text-popover-foreground shadow-none ring-1 ring-foreground/5 outline-none data-[side=bottom]:slide-in-from-top-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95"
        >
          {PROJECT_LINKS.map((link) => (
            <DropdownMenuPrimitive.Item
              key={link.href}
              className={cn(
                "type-nav-link relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2 outline-none transition-colors hover:bg-ink/6 focus:bg-ink/6",
                pathname === link.href && "bg-ink/6 text-ink"
              )}
              asChild
            >
              <Link href={link.href}>{link.label}</Link>
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}
