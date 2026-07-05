"use client";

import { useEffect, useRef, useState } from "react";
import { ExpandablePanel } from "@/animations/expandable-panel";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  ArrowUp01Icon,
  Calendar03Icon,
  FilterIcon,
  Heading01Icon,
  Progress01Icon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

export type ProjectSortKey = "progress" | "title" | "startDate";
export type ProjectSortDirection = "asc" | "desc";

type SortOption = {
  key: ProjectSortKey;
  label: string;
  icon: typeof Progress01Icon;
};

const SORT_OPTIONS: SortOption[] = [
  { key: "progress", label: "Progress", icon: Progress01Icon },
  { key: "title", label: "Title", icon: Heading01Icon },
  { key: "startDate", label: "Start date", icon: Calendar03Icon },
];

type ProjectSortFilterProps = {
  sortKey: ProjectSortKey;
  sortDirection: ProjectSortDirection;
  onSort: (key: ProjectSortKey) => void;
};

export function ProjectSortFilter({
  sortKey,
  sortDirection,
  onSort,
}: ProjectSortFilterProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  function handleSelect(key: ProjectSortKey) {
    onSort(key);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-xs">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={cn(
          "type-sort-header flex w-full items-center gap-2 rounded-full border px-3 py-1.5",
          open
            ? "type-sort-header-active border-ink/15 bg-paper/70"
            : "border-ink/10 bg-paper-elevated/60"
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <HugeiconsIcon icon={FilterIcon} strokeWidth={2} className="size-4 shrink-0" />
        <span>Sort</span>
      </button>

      <ExpandablePanel open={open}>
        <div
          className="mt-2 overflow-hidden rounded-2xl border border-ink/10 bg-paper-elevated/80"
          role="listbox"
          aria-label="Sort projects"
        >
          {SORT_OPTIONS.map((option) => {
            const active = sortKey === option.key;

            return (
              <button
                key={option.key}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => handleSelect(option.key)}
                className={cn(
                  "type-sort-header flex w-full items-center gap-2 px-3 py-2.5 transition-colors hover:bg-paper/50",
                  active && "type-sort-header-active bg-paper/40"
                )}
              >
                <HugeiconsIcon
                  icon={option.icon}
                  strokeWidth={2}
                  className="size-4 shrink-0"
                />
                <span className="flex-1 text-left">{option.label}</span>
                {active ? (
                  <HugeiconsIcon
                    icon={
                      sortDirection === "asc" ? ArrowUp01Icon : ArrowDown01Icon
                    }
                    strokeWidth={2}
                    className="size-4 shrink-0"
                    aria-label={
                      sortDirection === "asc" ? "Ascending" : "Descending"
                    }
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </ExpandablePanel>
    </div>
  );
}
