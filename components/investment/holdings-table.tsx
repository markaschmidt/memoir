"use client";

import { useMemo, useState } from "react";
import { ContentBadge } from "@/components/content";
import {
  PerformanceBadge,
  SafetyBadge,
} from "./badges";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  SAFETY_ORDER,
  type Holding,
} from "@/lib/investment-holdings";
import type { MarketQuote } from "@/lib/market-quotes";
import { cn } from "@/lib/utils";

export type HoldingRow = Holding & {
  quote: MarketQuote | null;
};

type SortKey =
  | "ticker"
  | "name"
  | "safety"
  | "themes"
  | "explanation"
  | "changePercent";

type SortDirection = "asc" | "desc";

type InvestmentHoldingsTableProps = {
  title: string;
  description?: string;
  rows: HoldingRow[];
  updatedAt?: string | null;
};

function compareValues(
  a: string | number | null,
  b: string | number | null,
  direction: SortDirection
) {
  const factor = direction === "asc" ? 1 : -1;

  if (a === null && b === null) return 0;
  if (a === null) return 1;
  if (b === null) return -1;

  if (typeof a === "number" && typeof b === "number") {
    return (a - b) * factor;
  }

  return String(a).localeCompare(String(b), undefined, {
    sensitivity: "base",
  }) * factor;
}

export function InvestmentHoldingsTable({
  title,
  description,
  rows,
  updatedAt,
}: InvestmentHoldingsTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("ticker");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const sortedRows = useMemo(() => {
    const next = [...rows];

    next.sort((left, right) => {
      switch (sortKey) {
        case "ticker":
          return compareValues(left.ticker, right.ticker, sortDirection);
        case "name":
          return compareValues(
            left.quote?.name ?? left.name,
            right.quote?.name ?? right.name,
            sortDirection
          );
        case "safety":
          return compareValues(
            SAFETY_ORDER[left.safety],
            SAFETY_ORDER[right.safety],
            sortDirection
          );
        case "themes":
          return compareValues(
            left.themes.join(", "),
            right.themes.join(", "),
            sortDirection
          );
        case "explanation":
          return compareValues(
            left.explanation,
            right.explanation,
            sortDirection
          );
        case "changePercent":
          return compareValues(
            left.quote?.changePercent ?? null,
            right.quote?.changePercent ?? null,
            sortDirection
          );
        default:
          return 0;
      }
    });

    return next;
  }, [rows, sortDirection, sortKey]);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(key);
    setSortDirection(key === "changePercent" ? "desc" : "asc");
  }

  function sortLabel(key: SortKey, label: string) {
    const active = sortKey === key;
    const arrow = active ? (sortDirection === "asc" ? " ↑" : " ↓") : "";

    return (
      <button
        type="button"
        onClick={() => handleSort(key)}
        className={cn(
          "type-sort-header",
          active && "type-sort-header-active"
        )}
      >
        {label}
        {arrow}
      </button>
    );
  }

  return (
    <section className="section-stack">
      <div className="section-header">
        <h2 className="type-section-title">{title}</h2>
        {description ? <p className="type-section-desc">{description}</p> : null}
        {updatedAt ? (
          <p className="type-caption-muted">
            Market data refreshed {updatedAt}
          </p>
        ) : null}
      </div>

      <div className="surface-panel">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>
                <div className="flex flex-wrap items-center gap-3">
                  {sortLabel("ticker", "Ticker")}
                  {sortLabel("changePercent", "Day %")}
                </div>
              </TableHead>
              <TableHead>{sortLabel("name", "Name")}</TableHead>
              <TableHead>{sortLabel("safety", "Safety")}</TableHead>
              <TableHead>{sortLabel("themes", "Theme")}</TableHead>
              <TableHead className="min-w-[16rem]">
                {sortLabel("explanation", "Explanation")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedRows.map((row) => (
              <TableRow key={row.ticker}>
                <TableCell>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <ContentBadge
                      label={row.ticker}
                      tag
                      color="badge-inverse"
                      className="font-mono text-[0.7rem] tracking-wide"
                    />
                    <PerformanceBadge
                      changePercent={row.quote?.changePercent ?? null}
                    />
                  </div>
                </TableCell>
                <TableCell className="type-table-emphasis max-w-[12rem] whitespace-normal">
                  {row.quote?.name ?? row.name}
                </TableCell>
                <TableCell>
                  <SafetyBadge level={row.safety} />
                </TableCell>
                <TableCell>
                  <div className="flex max-w-[14rem] flex-wrap gap-1.5">
                    {row.themes.map((theme) => (
                      <ContentBadge
                        key={theme}
                        label={theme}
                        tag
                        color="badge-neutral"
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell className="type-table-body whitespace-normal">
                  {row.explanation}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
