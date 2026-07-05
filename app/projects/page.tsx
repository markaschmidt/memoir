import { PageLayout } from "@/components/page";
import { ProjectsSection } from "@/components/project";
import { AVATARS } from "@/lib/avatars";
import { projects } from "@/lib/portfolio-data";

export default function ProjectsPage() {
  return (
    <PageLayout
      title="Projects"
      description="Selected work spanning systems programming, game modding, and applied software engineering."
      avatar={{
        src: AVATARS.thinking,
        alt: "Mark Schmidt thinking",
      }}
      wide
    >
      <ProjectsSection projects={projects} />
    </PageLayout>
  );
}
