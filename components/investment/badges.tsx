import { ContentBadge } from "@/components/content";
import {
  SAFETY_COLORS,
  SAFETY_LABELS,
  type SafetyLevel,
} from "@/lib/investment-holdings";

export function SafetyBadge({ level }: { level: SafetyLevel }) {
  return (
    <ContentBadge
      label={SAFETY_LABELS[level]}
      tag
      color={SAFETY_COLORS[level]}
    />
  );
}

export function PerformanceBadge({
  changePercent,
}: {
  changePercent: number | null;
}) {
  if (changePercent === null) {
    return (
      <ContentBadge
        label="—"
        tag
        color="badge-neutral-muted"
        className="min-w-14 justify-center"
      />
    );
  }

  const formatted = `${changePercent >= 0 ? "+" : ""}${changePercent.toFixed(2)}%`;
  const color =
    changePercent > 0
      ? "bg-emerald-100/90 text-emerald-950"
      : changePercent < 0
        ? "bg-rose-100/90 text-rose-950"
        : "badge-neutral-muted";

  return (
    <ContentBadge
      label={formatted}
      tag
      color={color}
      className="min-w-16 justify-center tabular-nums"
    />
  );
}
