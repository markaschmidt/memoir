import { FadeIn } from "@/animations/fade-in";
import { PageLayout } from "@/components/page";
import { VentureCard } from "@/components/venture";
import { AVATARS } from "@/lib/avatars";
import { ventures } from "@/lib/portfolio-data";

export default function VenturesPage() {
  return (
    <PageLayout
      title="Ventures"
      description="Below you can find my active and emerging initiatives at the intersection of AI and media."
      avatar={{
        src: AVATARS.standing,
        alt: "Mark Schmidt standing",
      }}
      wide
    >
      <div className="grid gap-6 md:grid-cols-2">
        {ventures.map((venture, index) => (
          <FadeIn key={venture.name} delay={180 + index * 140}>
            <VentureCard {...venture} />
          </FadeIn>
        ))}
      </div>
    </PageLayout>
  );
}
