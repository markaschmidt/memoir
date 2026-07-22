import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/animations/fade-in";
import { ContentBadge } from "@/components/content";
import { PageLayout } from "@/components/page";
import { VentureArticle } from "@/components/venture";
import { LinkIcon } from "@/icons";
import { ventureArticlesBySlug } from "@/lib/venture-articles";
import { venturesBySlug } from "@/lib/portfolio-data";

type VentureDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(venturesBySlug).map((slug) => ({ slug }));
}

export default async function VentureDetailPage({ params }: VentureDetailPageProps) {
  const { slug } = await params;
  const venture = venturesBySlug[slug];
  const article = ventureArticlesBySlug[slug];

  if (!venture || !article) {
    notFound();
  }

  return (
    <PageLayout
      title={venture.name}
      description={article.subtitle}
      headerExtra={
        <FadeIn delay={120}>
          <div className="flex flex-wrap items-center gap-3">
            <ContentBadge
              label={venture.category}
              tag
              color="bg-amber-100/80 text-amber-950"
            />
            <ContentBadge
              label={venture.status === "current" ? "Current venture" : "Past venture"}
              tag
              color={
                venture.status === "current"
                  ? "bg-teal-100/80 text-teal-950"
                  : "bg-stone-200/80 text-stone-900"
              }
            />
            <span className="type-caption-muted">{venture.period}</span>
            <ContentBadge
              label={`Visit ${venture.name} website`}
              href={venture.websiteUrl}
              icon={<LinkIcon className="size-3.5" />}
              color="badge-neutral"
            />
          </div>
        </FadeIn>
      }
    >
      <FadeIn delay={180}>
        <Link href="/ventures" className="type-action link-subtle inline-flex items-center gap-1.5">
          <span aria-hidden>←</span> All ventures
        </Link>
      </FadeIn>

      <FadeIn delay={220}>
        <VentureArticle blocks={article.blocks} />
      </FadeIn>
    </PageLayout>
  );
}
