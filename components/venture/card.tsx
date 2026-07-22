import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentBadge } from "@/components/content";
import { LinkIcon } from "@/icons";
import type { VentureProps } from "@/types/venture";
import { cn } from "@/lib/utils";

export function VentureCard({
  slug,
  name,
  description,
  websiteUrl,
  logo,
  category,
  tags,
  className,
}: VentureProps) {
  return (
    <Card
      className={cn(
        "surface-card group relative cursor-pointer overflow-hidden transition-[transform,box-shadow,border-color] duration-300 ease-out",
        "hover:-translate-y-1 hover:border-ink/20 hover:shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <Link
        href={`/ventures/${slug}`}
        className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:ring-offset-2"
        aria-label={`Read more about ${name}`}
      />

      <CardHeader className="relative z-0 gap-4 pointer-events-none">
        <div className="flex items-start gap-4">
          <div className="surface-logo-lg">
            <Image src={logo} alt={`${name} logo`} fill className="object-contain p-2" />
          </div>
          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="type-card-title transition-colors group-hover:text-ink">
                {name}
              </CardTitle>
              <ContentBadge
                label={category}
                tag
                color="bg-amber-100/80 text-amber-950"
              />
            </div>
            <div className="pointer-events-auto">
              <ContentBadge
                label={`Visit ${name} website`}
                href={websiteUrl}
                icon={<LinkIcon className="size-3.5" />}
                iconOnly
                color="badge-neutral"
              />
            </div>
          </div>
        </div>
        {tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <ContentBadge key={tag.label} {...tag} tag />
            ))}
          </div>
        ) : null}
      </CardHeader>

      <CardContent className="relative z-0 pointer-events-none">
        <p className="type-body">{description}</p>
        <p className="type-caption-muted mt-4 transition-colors group-hover:text-ink-muted">
          Read more <span aria-hidden>→</span>
        </p>
      </CardContent>
    </Card>
  );
}

export type { VentureProps } from "@/types/venture";
