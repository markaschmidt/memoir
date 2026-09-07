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
        src: AVATARS.about,
        alt: "Mark Schmidt standing",
        // Pin to the top so the head fills space under the nav; contain avoids cropping.
        imageClassName: "object-contain object-top",
      }}
      avatarClassName="w-full md:h-full md:min-h-[28rem]"
      headerExtra={
        <FadeIn delay={180}>
          <CredentialsCard />
        </FadeIn>
      }
      wide
    >
      <FadeIn delay={260}>
        <section className="surface-prose-block">
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="type-body-inverted">
              A computer science graduate developing agentic software for local and
              enterprise AI. My fascination extends to how new forms of hardware can
              benefit for AI augmentation. My prior experiences include building a
              scalable agentic platform for misinformation mitigation that worked
              across any media format, an agentic remote trader for portfolio and
              financial management, and currently, a revolutionary agentic 3D asset
              synthesis software for game development.
            </p>
            <p className="type-body-inverted">
              My fascinations span beyond tech. Browse the carousel below for the
              passions I chase outside day-to-day shipping — each with a short note
              on how I pursue it, and links to related projects when they exist.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={340}>
        <InterestCarousel interests={interests} />
      </FadeIn>
    </PageLayout>
  );
}
