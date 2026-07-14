import { CredentialsCard } from "@/components/credential";
import { InterestCarousel } from "@/components/interest";
import { FadeIn } from "@/animations/fade-in";
import { PageLayout } from "@/components/page";
import { AVATARS } from "@/lib/avatars";
import { interests } from "@/lib/interests-data";

export default function AboutPage() {
  return (
    <PageLayout
      title="About"
      description="Welcome to my memoir. I'm a startup founder and builder fascinated by local AI applications, synthesis models, and agents for social good."
      avatar={{
        src: AVATARS.standing,
        alt: "Mark Schmidt standing",
      }}
      avatarClassName="h-[clamp(18rem,50vh,34rem)] sm:h-[clamp(20rem,55vh,38rem)]"
      headerExtra={
        <FadeIn delay={180}>
          <CredentialsCard />
        </FadeIn>
      }
    >
      <FadeIn delay={260}>
        <div className="space-y-5 font-serif text-lg leading-relaxed text-ink-muted">
          <p>
            A computer science graduate developing agentic software for local and
            enterprise AI. My fascination extends to how new forms of hardware can
            benefit for AI augmentation. My prior experiences include building a
            scalable agentic platform for misinformation mitigation that worked
            across any media format, an agentic remote trader for portfolio and
            financial management, and currently, a revolutionary agentic 3D asset
            synthesis software for game development.
          </p>
          <p>
            My fascinations span beyond tech. Browse the carousel below for the
            passions I chase outside day-to-day shipping — each with a short note
            on how I pursue it, and links to related projects when they exist.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={340}>
        <InterestCarousel interests={interests} />
      </FadeIn>
    </PageLayout>
  );
}
