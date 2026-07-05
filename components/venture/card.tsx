import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentBadge } from "@/components/content";
import { LinkIcon } from "@/icons";
import type { VentureProps } from "@/types/venture";
import { cn } from "@/lib/utils";

export function VentureCard({
  name,
  description,
  websiteUrl,
  logo,
  category,
  tags,
  className,
}: VentureProps) {
  return (
    <Card className={cn("surface-card", className)}>
      <CardHeader className="gap-4">
        <div className="flex items-start gap-4">
          <div className="surface-logo-lg">
            <Image src={logo} alt={`${name} logo`} fill className="object-contain p-2" />
          </div>
          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="type-card-title">{name}</CardTitle>
              <ContentBadge
                label={category}
                tag
                color="bg-amber-100/80 text-amber-950"
              />
            </div>
            <ContentBadge
              label={`Visit ${name} website`}
              href={websiteUrl}
              icon={<LinkIcon className="size-3.5" />}
              iconOnly
              color="badge-neutral"
            />
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

      <CardContent>
        <p className="type-body">{description}</p>
      </CardContent>
    </Card>
  );
}

export type { VentureProps } from "@/types/venture";
