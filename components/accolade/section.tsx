"use client";

import { useMemo, useState } from "react";
import { AccoladeSquareCard } from "./square-card";
import {
  ACCOLADE_CATEGORY_LABELS,
  type AccoladeCategory,
  type AccoladeProps,
} from "@/types/accolade";
import { cn } from "@/lib/utils";

type AccoladeFilter = "all" | AccoladeCategory;

const FILTERS: { id: AccoladeFilter; label: string }[] = [
  { id: "all", label: "All" },
  ...(
    Object.entries(ACCOLADE_CATEGORY_LABELS) as [AccoladeCategory, string][]
  ).map(([id, label]) => ({ id, label })),
];

type AccoladesSectionProps = {
  accolades: AccoladeProps[];
};

export function AccoladesSection({ accolades }: AccoladesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<AccoladeFilter>("all");

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? accolades
        : accolades.filter((item) => item.category === activeFilter),
    [accolades, activeFilter]
  );

  return (
    <div className="space-y-6">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter accolades"
      >
        {FILTERS.map((filter) => {
          const active = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "badge-base cursor-pointer border border-transparent transition-colors",
                active
                  ? "badge-inverse"
                  : "badge-neutral-muted hover:border-ink/15"
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="type-body">No accolades in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {filtered.map((accolade) => (
            <AccoladeSquareCard key={accolade.name} {...accolade} />
          ))}
        </div>
      )}
    </div>
  );
}
