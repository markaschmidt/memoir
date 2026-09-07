"use client";

import { Blurb } from "@/components/blurb";

const APIPHANI_ARTICLE_URL =
  "https://www.insightpartners.com/ideas/apiphani-raises-25m-series-a-led-by-insight-partners-to-help-redefine-mission-critical-application-management-with-ai/";

function ApiphaniLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={APIPHANI_ARTICLE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="link-subtle font-medium text-inherit not-italic"
      onClick={(event) => event.stopPropagation()}
    >
      {children}
    </a>
  );
}

/** Inline Apiphani name + hover blurb for the credentials row. */
export function ApiphaniCredential() {
  return (
    <Blurb
      contentClassName="w-96 max-w-[calc(100vw-2rem)] p-5"
      trigger={
        <button
          type="button"
          className="cursor-pointer border-0 bg-transparent p-0 font-inherit text-inherit underline decoration-ink/25 underline-offset-2 transition-colors hover:text-breeze-deep hover:decoration-breeze-deep"
        >
          Apiphani
        </button>
      }
    >
      <p className="type-body text-base leading-relaxed sm:text-lg">
        Contributing to the frontend and backend of{" "}
        <ApiphaniLink>Apiphani&apos;s</ApiphaniLink> flagship product Luumen, an
        AI-powered SSH client for engineers who manage Linux and Windows
        infrastructure.
      </p>
    </Blurb>
  );
}
