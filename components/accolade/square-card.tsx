"use client";

import Image from "next/image";
import { ContentBadge, LinksDropdown, YoutubeEmbed } from "@/components/content";
import type { AccoladeProps } from "@/types/accolade";
import { cn } from "@/lib/utils";

export function AccoladeSquareCard({
  iconSrc,
  name,
  description,
  location,
  year,
  category,
  videoUrl,
  mediaLinks,
  projectLink,
  tags,
  className,
}: AccoladeProps) {
  const isHackathon = category === "hackathons";
  const links = [
    ...(projectLink ? [projectLink] : []),
    ...(mediaLinks ?? []),
  ];
  const inlineMedia = isHackathon ? mediaLinks ?? [] : [];
  const dropdownLinks = isHackathon ? (projectLink ? [projectLink] : []) : links;

  return (
    <article
      className={cn(
        "surface-card flex flex-col p-4 md:p-5",
        isHackathon
          ? "md:col-span-2 md:flex-row md:items-stretch md:gap-8"
          : "aspect-square",
        isHackathon && "ring-1 ring-breeze/25",
        className
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="relative mx-auto size-14 shrink-0 overflow-hidden rounded-sm border border-ink/10 bg-paper md:size-16">
          <Image
            src={iconSrc}
            alt=""
            fill
            className="object-contain p-2"
            sizes="64px"
          />
        </div>

        <div className="mt-4 flex min-h-0 flex-1 flex-col gap-2 text-center md:text-left">
          {isHackathon ? (
            <p className="type-eyebrow text-center text-breeze-deep md:text-left">
              Hackathon
            </p>
          ) : null}
          <h3 className="type-card-title-sm line-clamp-3 text-balance md:line-clamp-none">
            {name}
          </h3>
          {location || year ? (
            <p className="type-caption-muted">
              {[location, year].filter(Boolean).join(" · ")}
            </p>
          ) : null}
          {isHackathon && description ? (
            <p className="type-caption text-pretty">{description}</p>
          ) : null}
          {inlineMedia.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 md:justify-start">
              {inlineMedia.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-action link-subtle"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-auto flex flex-wrap justify-center gap-1.5 pt-3 md:justify-start">
          {tags?.map((tag) => (
            <ContentBadge key={tag.label} {...tag} tag />
          ))}
          <LinksDropdown links={dropdownLinks} />
        </div>
      </div>

      {videoUrl ? (
        <div className="mt-4 w-full min-w-0 md:mt-0 md:max-w-xl md:flex-1">
          <YoutubeEmbed src={videoUrl} title={`${name} recap`} />
        </div>
      ) : null}
    </article>
  );
}

/*
 * Previous horizontal accolade card (disabled — replaced by square grid).
 *
 * "use client";
 * export function AccoladeCard({ ... }) { ... }
 */
