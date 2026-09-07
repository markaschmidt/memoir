import { cn } from "@/lib/utils";
import type { IconProps } from "./types";

const strokeProps = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function EmailIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-4", className)}
      {...strokeProps}
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="0" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}
