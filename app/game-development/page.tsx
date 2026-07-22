import { FadeIn } from "@/animations/fade-in";
import { StatsStrip, WorkshopGrid } from "@/components/game-development";
import { PageLayout } from "@/components/page";
import { AVATARS } from "@/lib/avatars";
import {
  GAME_DEV_DESCRIPTION,
  GAME_DEV_STATS,
  GAME_DEV_SUBHEADER,
  WORKSHOP_ITEM_IDS,
} from "@/lib/game-development-data";

export default function GameDevelopmentPage() {
  return (
    <PageLayout
      title="Game Development"
      description={GAME_DEV_SUBHEADER}
      avatar={{
        src: AVATARS.thinking,
        alt: "Mark Schmidt thinking",
      }}
      headerExtra={<StatsStrip stats={GAME_DEV_STATS} />}
      wide
    >
      <FadeIn delay={180}>
        <section className="space-y-4">
          <h2 className="type-section-title">How it started</h2>
          <div className="space-y-4 font-serif text-lg leading-relaxed text-ink-muted">
            {GAME_DEV_DESCRIPTION.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={260}>
        <section className="section-stack">
          <div className="section-header">
            <h2 className="type-section-title">Steam Workshop</h2>
            <p className="type-section-desc">
              A selection of Garry&apos;s Mod addons published as Arden — sorted by
              subscribers. Stats update live from Steam.
            </p>
          </div>
          <WorkshopGrid itemIds={WORKSHOP_ITEM_IDS} />
        </section>
      </FadeIn>
    </PageLayout>
  );
}
