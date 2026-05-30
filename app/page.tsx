import { Section } from "@/components/section";

export default function Home() {
  return (
    <main className="flex-1">
      <Section id="about" title="About">
        <p>
          A computer science graduate developing web applications and building
          toward a scalable agentic platform for misinformation mitigation, alongside
          revolutionary 3D model synthesis software for game development.
        </p>
      </Section>

      <Section id="projects" title="Projects">
        <p>
          Selected work spanning systems programming, game modding, and applied
          software engineering — from linear algebra libraries to interactive
          Garry&apos;s Mod addons.
        </p>
      </Section>

      <Section id="ventures" title="Ventures">
        <p>
          Current and emerging initiatives at the intersection of AI, media
          literacy, and creative tooling for developers and researchers.
        </p>
      </Section>

      <Section id="accolades" title="Accolades">
        <p>
          Recognition, achievements, and milestones earned through academic and
          professional pursuits.
        </p>
      </Section>

      <Section id="literature" title="Literature">
        <p>
          Essays, notes, and written work on software, systems thinking, and the
          craft of building durable technology.
        </p>
      </Section>
    </main>
  );
}
