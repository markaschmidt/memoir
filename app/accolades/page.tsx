import { FadeIn } from "@/animations/fade-in";
import { AccoladesSection } from "@/components/accolade";
import { PageLayout } from "@/components/page";
import { AVATARS } from "@/lib/avatars";
import { accolades } from "@/lib/portfolio-data";

export default function AccoladesPage() {
  return (
    <PageLayout
      title="Accolades"
      description="Recognition across academics, Reef Media, hackathons, and other competitions."
      avatar={{
        src: AVATARS.thinking,
        alt: "Mark Schmidt thinking",
      }}
      wide
    >
      <FadeIn delay={180}>
        <AccoladesSection accolades={accolades} />
      </FadeIn>
    </PageLayout>
  );
}
