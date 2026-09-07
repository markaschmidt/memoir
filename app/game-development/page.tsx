import { FadeIn } from "@/animations/fade-in";
import { StatsStrip, WorkshopGrid } from "@/components/game-development";
import { PageLayout } from "@/components/page";
import { AVATARS } from "@/lib/avatars";
import {
  GAME_DEV_DESCRIPTION,
  GAME_DEV_STATS,
  GAME_DEV_SUBHEADER,
} from "@/lib/game-development-data";

export default function GameDevelopmentPage() {
  return (
    <PageLayout
      title="Game Development"
      description={GAME_DEV_SUBHEADER}
      avatar={{
        src: AVATARS.gameDev,
        alt: "Mark Schmidt building a game world",
      }}
      headerExtra={<StatsStrip stats={GAME_DEV_STATS} />}
      wide
    >
      <FadeIn delay={180}>
        <section className="space-y-4">
          <h2 className="type-section-title">How it started</h2>
          <p className="font-body text-lg leading-relaxed text-ink-muted">
            {GAME_DEV_DESCRIPTION[0]}
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={260}>
        <section className="section-stack">
          <div className="section-header">
            <h2 className="type-section-title">Steam Workshop</h2>
            <p className="type-section-desc">
              Garry&apos;s Mod addons as Arden — live from Steam.
            </p>
          </div>
          <WorkshopGrid />
        </section>
      </FadeIn>
    </PageLayout>
  );
}
