"use client";

import Link from "next/link";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

export type DropdownLink = {
  label: string;
  href: string;
};

type LinksDropdownProps = {
  label?: string;
  links: DropdownLink[];
  className?: string;
};

export function LinksDropdown({
  label = "Links",
  links,
  className,
}: LinksDropdownProps) {
  if (links.length === 0) return null;

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button
          type="button"
          className={cn(
            "badge-base badge-breeze cursor-pointer gap-1",
            className
          )}
          aria-haspopup="menu"
        >
          {label}
          <HugeiconsIcon
            icon={ArrowDown01Icon}
            strokeWidth={2}
            className="size-3.5 opacity-70"
          />
        </button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align="center"
          sideOffset={6}
          className="z-50 min-w-44 rounded-sm border border-ink/10 bg-popover p-1 text-popover-foreground shadow-none ring-1 ring-foreground/5 outline-none data-[side=bottom]:slide-in-from-top-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95"
        >
          {links.map((link) => {
            const internal = link.href.startsWith("/");
            const itemClass = cn(
              "type-nav-link relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 outline-none transition-colors hover:bg-ink/6 focus:bg-ink/6"
            );

            return (
              <DropdownMenuPrimitive.Item
                key={`${link.label}-${link.href}`}
                className={itemClass}
                asChild
              >
                {internal ? (
                  <Link href={link.href}>{link.label}</Link>
                ) : (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                )}
              </DropdownMenuPrimitive.Item>
            );
          })}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}
