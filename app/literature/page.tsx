import { FadeIn } from "@/animations/fade-in";
import { LiteratureTable } from "@/components/literature";
import { PageLayout } from "@/components/page";
import { AVATARS } from "@/lib/avatars";
import { FAVORITE_READS, READING_LIST } from "@/lib/literature-data";

export default function LiteraturePage() {
  return (
    <PageLayout
      title="Literature"
      description="Active reading and favorite books across fiction and non-fiction — strategy, technology, history, and the ideas that shape how I build."
      avatar={{
        src: AVATARS.reading,
        alt: "Mark Schmidt reading",
      }}
      wide
    >
      <FadeIn delay={180}>
        <LiteratureTable
          title="Reading List"
          description="Books currently in rotation, spanning fiction and non-fiction."
          rows={READING_LIST}
          showClassification
        />
      </FadeIn>

      <FadeIn delay={260}>
        <LiteratureTable
          title="Favorite Reads"
          description="Books already read and worth revisiting or recommending."
          rows={FAVORITE_READS}
        />
      </FadeIn>
    </PageLayout>
  );
}
