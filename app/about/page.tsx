import { CredentialsCard } from "@/components/credential";
import { ContentBadge } from "@/components/content";
import { FadeIn } from "@/animations/fade-in";
import { PageLayout } from "@/components/page";
import { AVATARS } from "@/lib/avatars";

const INTERESTS = [
  "Quantum Computing",
  "Ternary Computing",
  "European & Asian History",
  "Astronomy & Cosmology",
  "Prehistory & Anthropology",
] as const;

export default function AboutPage() {
  return (
    <PageLayout
      title="About"
      description="Welcome to my memoir. I'm a startup founder and builder fascinated by local AI applications, synthesis models, and agents for social good."
      avatar={{
        src: AVATARS.standing,
        alt: "Mark Schmidt standing",
      }}
    >
      <FadeIn delay={180}>
        <CredentialsCard />
      </FadeIn>

      <FadeIn delay={260}>
        <div className="space-y-5 font-serif text-lg leading-relaxed text-ink-muted">
          <p>
            A computer science graduate developing agentic software for local and enterprise AI. My fascination extends to how new forms of hardware can benefit for AI augmentation.
             My prior experiences include building a scalable agentic platform for misinformation mitigation that worked across any media format, an agentic remote trader for portfolio and financial management,
            and currently, a revolutionary agentic 3D asset synthesis software for game development.
          </p>
          <p>
            My fascinations span beyond tech. Below you can find my other
            passions accompanied by different ways I entertain or pursue those interests.
          </p>
          <ul className="flex flex-wrap gap-2.5 pt-1">
            {INTERESTS.map((topic) => (
              <li key={topic}>
                <ContentBadge
                  label={topic}
                  tag
                  color="bg-ink/8 text-ink"
                  className="h-auto min-h-8 px-4 py-2 text-sm sm:text-base"
                />
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </PageLayout>
  );
}
