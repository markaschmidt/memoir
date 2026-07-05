"use client"

import Image from "next/image"
import { Blurb } from "@/components/blurb"
import { cn } from "@/lib/utils"

const APIPHANI_ARTICLE_URL =
  "https://www.insightpartners.com/ideas/apiphani-raises-25m-series-a-led-by-insight-partners-to-help-redefine-mission-critical-application-management-with-ai/"

function ApiphaniLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={APIPHANI_ARTICLE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="link-subtle font-medium text-inherit"
      onClick={(event) => event.stopPropagation()}
    >
      {children}
    </a>
  )
}

export function ApiphaniCredential() {
  return (
    <Blurb
      contentClassName="w-96 max-w-[calc(100vw-2rem)] p-5"
      trigger={
        <span
          className={cn(
            "badge-base h-auto min-h-7 px-3 py-1.5 text-xs sm:text-sm",
            "bg-[#0a0a0a] text-white"
          )}
        >
          <Image
            src="/work/apiphani.webp"
            alt=""
            width={14}
            height={14}
            className="size-3.5 shrink-0 rounded-sm object-contain"
          />
          <span>
            Current Position: Software Engineer at <ApiphaniLink>Apiphani</ApiphaniLink>
          </span>
        </span>
      }
    >
      <p className="type-body text-base leading-relaxed sm:text-lg">
        Contributing to the frontend and backend of{" "}
        <ApiphaniLink>Apiphani&apos;s</ApiphaniLink> flagship product Luumen, an
        AI-powered SSH client for engineers who manage Linux and Windows
        infrastructure.
      </p>
    </Blurb>
  )
}
