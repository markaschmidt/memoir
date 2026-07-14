"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { projectsBySlug } from "@/lib/portfolio-data";
import { projectSectionHref } from "@/lib/project-slug";
import type { Interest, InterestMedia } from "@/types/interest";
import { cn } from "@/lib/utils";

type InterestCarouselProps = {
  interests: Interest[];
  className?: string;
};

function youtubeEmbedUrl(src: string): string | null {
  try {
    const url = new URL(src);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (url.pathname.startsWith("/embed/")) {
        return `https://www.youtube-nocookie.com${url.pathname}${url.search}`;
      }
      const id = url.searchParams.get("v");
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }

    return null;
  } catch {
    return null;
  }
}

function InterestMediaFrame({ media }: { media: InterestMedia }) {
  if (media.type === "video") {
    const embedSrc = youtubeEmbedUrl(media.src);

    if (!embedSrc) {
      return (
        <a
          href={media.src}
          target="_blank"
          rel="noopener noreferrer"
          className="type-action flex h-full items-center justify-center px-6 text-center"
        >
          Open video: {media.title}
        </a>
      );
    }

    return (
      <iframe
        src={embedSrc}
        title={media.title}
        className="absolute inset-0 size-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 72rem"
    />
  );
}

export function InterestCarousel({
  interests,
  className,
}: InterestCarouselProps) {
  const labelId = useId();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const count = interests.length;
  const active = interests[index];

  if (!active || count === 0) return null;

  function go(delta: number) {
    setDirection(delta >= 0 ? "next" : "prev");
    setIndex((current) => (current + delta + count) % count);
  }

  function goTo(nextIndex: number) {
    setDirection(nextIndex >= index ? "next" : "prev");
    setIndex(nextIndex);
  }

  return (
    <section
      className={cn("space-y-5 outline-none", className)}
      aria-labelledby={labelId}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(1);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(-1);
        }
      }}
    >
      <div className="space-y-2">
        <p className="type-eyebrow">Interests</p>
        <h2 id={labelId} className="type-section-title">
          What else I chase
        </h2>
        <p className="type-section-desc max-w-2xl">
          Each slide is a short field note — what draws me in, how I work at it,
          and any projects that grew out of the curiosity.
        </p>
      </div>

      <div
        className="flex gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label="Interest topics"
      >
        {interests.map((interest, interestIndex) => {
          const selected = interestIndex === index;
          return (
            <button
              key={interest.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`interest-panel-${interest.id}`}
              id={`interest-tab-${interest.id}`}
              onClick={() => goTo(interestIndex)}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-1.5 font-serif text-sm transition-colors duration-300",
                selected
                  ? "border-ink/25 bg-ink text-paper-elevated"
                  : "border-ink/10 bg-paper/40 text-ink-muted hover:border-ink/20 hover:text-ink"
              )}
            >
              {interest.title}
            </button>
          );
        })}
      </div>

      <div
        id={`interest-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`interest-tab-${active.id}`}
        className="surface-panel"
      >
        <div
          key={active.id}
          className={cn(
            "interest-slide",
            direction === "next"
              ? "interest-slide-from-right"
              : "interest-slide-from-left"
          )}
        >
          <div className="relative aspect-[16/9] overflow-hidden border-b border-ink/10 bg-ink/5">
            <InterestMediaFrame media={active.media} />
            {active.media.type === "image" && active.media.credit ? (
              <span className="absolute bottom-3 right-3 rounded-md bg-paper/80 px-2 py-1 font-serif text-xs text-ink-muted backdrop-blur-sm">
                {active.media.credit}
              </span>
            ) : null}
          </div>

          <div className="space-y-5 p-6 md:p-8">
            <header className="space-y-2">
              <h3 className="type-card-title">{active.title}</h3>
              <p className="type-caption max-w-3xl">{active.lede}</p>
            </header>

            <div className="space-y-4 font-serif text-lg leading-relaxed text-ink-muted">
              {active.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            {active.projects?.length ? (
              <div className="space-y-3 border-t border-ink/10 pt-5">
                <p className="type-eyebrow">Related projects</p>
                <ul className="flex flex-wrap gap-2.5">
                  {active.projects.map((projectLink) => {
                    const project = projectsBySlug[projectLink.slug];
                    if (!project) return null;

                    return (
                      <li key={projectLink.slug}>
                        <Link
                          href={projectSectionHref(projectLink.slug)}
                          className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper/50 px-3.5 py-2 font-serif text-sm text-ink transition-colors duration-300 hover:border-ink/25 hover:bg-paper"
                        >
                          <span>{project.title}</span>
                          <span aria-hidden="true" className="text-ink/35">
                            →
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Previous interest"
          onClick={() => go(-1)}
          className="rounded-full border-ink/15 bg-paper/50"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
        </Button>

        <div className="flex items-center gap-2">
          {interests.map((interest, interestIndex) => (
            <button
              key={interest.id}
              type="button"
              aria-label={`Go to ${interest.title}`}
              onClick={() => goTo(interestIndex)}
              className={cn(
                "size-2 rounded-full transition-all duration-300",
                interestIndex === index
                  ? "w-6 bg-ink"
                  : "bg-ink/25 hover:bg-ink/45"
              )}
            />
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Next interest"
          onClick={() => go(1)}
          className="rounded-full border-ink/15 bg-paper/50"
        >
          <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
        </Button>
      </div>

      <p className="type-caption-muted text-center md:text-left">
        {index + 1} of {count}
        <span className="mx-2 text-ink/20">·</span>
        Topic chips, arrows, or ← → when this section is focused
      </p>
    </section>
  );
}
