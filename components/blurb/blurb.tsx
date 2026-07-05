"use client"

import type { ReactNode } from "react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from "@/lib/utils"

type BlurbProps = {
  trigger: ReactNode
  children: ReactNode
  className?: string
  contentClassName?: string
}

export function Blurb({
  trigger,
  children,
  className,
  contentClassName,
}: BlurbProps) {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <span className={cn("cursor-default", className)}>{trigger}</span>
      </HoverCardTrigger>
      <HoverCardContent className={contentClassName}>{children}</HoverCardContent>
    </HoverCard>
  )
}
