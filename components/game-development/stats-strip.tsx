import type { GameDevStat } from "@/lib/game-development-data";

type StatsStripProps = {
  stats: GameDevStat[];
};

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-ink/10 bg-paper-elevated/80 px-4 py-3"
        >
          <dt className="type-caption-muted">{stat.label}</dt>
          <dd className="type-card-title-sm mt-1 tabular-nums">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
