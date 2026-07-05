import { cn } from "@/lib/utils";
import type { IconProps } from "./types";

export function TrophyIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M5 5H3v1a3 3 0 0 0 3 3" />
      <path d="M19 5h2v1a3 3 0 0 1-3 3" />
    </svg>
  );
}
