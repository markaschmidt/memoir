"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentBadge } from "@/components/content";
import type { AccoladeProps } from "@/types/accolade";
import { cn } from "@/lib/utils";

export function AccoladeCard({
  iconSrc,
  name,
  description,
  location,
  year,
  images,
  mediaLinks,
  tags,
  className,
}: AccoladeProps) {
  const [carouselOpen, setCarouselOpen] = useState(Boolean(images?.length));

  return (
    <Card className={cn("surface-card", className)}>
      <CardHeader className="gap-4">
        <div className="flex items-start gap-4">
          <div className="surface-logo-md">
            <Image
              src={iconSrc}
              alt=""
              fill
              className="object-contain p-1.5"
              sizes="48px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="type-card-title">{name}</CardTitle>
            {location || year ? (
              <p className="type-caption mt-1">
                {[location, year].filter(Boolean).join(" · ")}
              </p>
            ) : null}
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

      <CardContent className="space-y-5">
        {description ? <p className="type-body">{description}</p> : null}

        {images?.length ? (
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setCarouselOpen((open) => !open)}
              className="type-action"
            >
              {carouselOpen ? "Hide gallery" : "Show gallery"} ({images.length})
            </button>
            <div
              className={cn(
                "grid transition-all duration-700 transition-expo",
                carouselOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {images.map((src, index) => (
                    <div
                      key={src}
                      className="surface-gallery-thumb"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <Image
                        src={src}
                        alt={`${name} image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {mediaLinks?.length ? (
          <div className="space-y-2">
            <p className="type-eyebrow">Media</p>
            <div className="flex flex-wrap gap-2">
              {mediaLinks.map((link) => (
                <ContentBadge
                  key={link.href}
                  label={link.label}
                  href={link.href}
                  color="badge-neutral"
                />
              ))}
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export type { AccoladeProps, AccoladeMediaLink } from "@/types/accolade";
