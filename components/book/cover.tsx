"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type BookCoverProps = {
  title: string;
  coverUrl: string;
  coverFallbackUrls?: string[];
  className?: string;
};

function isPlaceholderCover(image: HTMLImageElement) {
  return image.naturalWidth <= 1 || image.naturalHeight <= 1;
}

export function BookCover({
  title,
  coverUrl,
  coverFallbackUrls,
  className,
}: BookCoverProps) {
  const sources = useMemo(
    () => [coverUrl, ...(coverFallbackUrls ?? [])].filter(Boolean),
    [coverFallbackUrls, coverUrl]
  );
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(sources.length === 0);
  const activeSrc = sources[sourceIndex];

  function tryNextSource() {
    setSourceIndex((current) => {
      const next = current + 1;
      if (next >= sources.length) {
        setFailed(true);
        return current;
      }

      return next;
    });
  }

  function handleImageIssue(image: HTMLImageElement) {
    if (isPlaceholderCover(image)) {
      tryNextSource();
    }
  }

  return (
    <div className={cn("surface-book-cover", className)}>
      {failed || !activeSrc ? (
        <div className="type-fallback-label flex h-full items-center justify-center px-1 text-center">
          {title}
        </div>
      ) : (
        <Image
          key={activeSrc}
          src={activeSrc}
          alt={`${title} cover`}
          fill
          className="object-cover"
          sizes="44px"
          onLoad={(event) => handleImageIssue(event.currentTarget)}
          onError={tryNextSource}
        />
      )}
    </div>
  );
}
