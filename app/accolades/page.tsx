import { FadeIn } from "@/animations/fade-in";
import { PageLayout } from "@/components/page";
import { AccoladeCard } from "@/components/accolade";
import { AVATARS } from "@/lib/avatars";
import { accolades } from "@/lib/portfolio-data";

export default function AccoladesPage() {
  return (
    <PageLayout
      title="Accolades"
      description="Recognition, achievements, and milestones earned through academic and professional pursuits."
      avatar={{
        src: AVATARS.thinking,
        alt: "Mark Schmidt thinking",
      }}
      wide
    >
      {accolades.map((accolade, index) => (
        <FadeIn key={accolade.name} delay={180 + index * 140}>
          <AccoladeCard {...accolade} />
        </FadeIn>
      ))}
    </PageLayout>
  );
}
