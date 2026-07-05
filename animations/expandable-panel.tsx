"use client";

import { cn } from "@/lib/utils";

type ExpandablePanelProps = {
  open: boolean;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export function ExpandablePanel({
  open,
  children,
  className,
  contentClassName,
}: ExpandablePanelProps) {
  return (
    <div
      data-state={open ? "open" : "closed"}
      className={cn("expand-panel", className)}
      aria-hidden={!open}
    >
      <div className="expand-panel-inner">
        <div className={cn("expand-panel-content", contentClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
}
