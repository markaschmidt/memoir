"use client";

import { useState } from "react";
import { ExpandablePanel } from "@/animations/expandable-panel";
import { ProjectSkillsTable } from "./skills-table";
import type { ProjectSkill, ProjectStatus } from "@/types/project";
import { getProjectProgressPercent } from "@/lib/project-progress";
import { cn } from "@/lib/utils";

function completionColor(percent: number) {
  const clamped = Math.min(100, Math.max(0, percent));
  const hue = 27 + (145 - 27) * (clamped / 100);
  return `oklch(0.58 0.19 ${hue})`;
}

type ProjectStatusBarProps = {
  status: ProjectStatus;
  skills: ProjectSkill[];
};

export function ProjectStatusBar({ status, skills }: ProjectStatusBarProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const percent = getProjectProgressPercent(status.milestones);
  const fillColor = completionColor(percent);

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <span className="type-eyebrow">Progress</span>
          <span className="type-caption tabular-nums">{percent}%</span>
        </div>
        <div
          className="status-bar-track"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Project completion ${percent}%`}
        >
          <div
            className="status-bar-fill transition-expo"
            style={{ width: `${percent}%`, backgroundColor: fillColor }}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setDetailsOpen((open) => !open)}
        className="type-action flex w-full items-center justify-between rounded-xl border border-ink/10 bg-paper/50 px-3 py-2"
        aria-expanded={detailsOpen}
      >
        <span>Details</span>
        <span aria-hidden="true">{detailsOpen ? "−" : "+"}</span>
      </button>

      <ExpandablePanel open={detailsOpen}>
        <div className="space-y-6 pt-2">
          <ul className="space-y-4">
            {status.milestones.map((milestone) => (
              <li key={milestone.label} className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-semibold",
                    milestone.completed
                      ? "bg-emerald-100/90 text-emerald-950"
                      : "bg-rose-100/90 text-rose-950"
                  )}
                  aria-hidden="true"
                >
                  {milestone.completed ? "✓" : "○"}
                </span>
                <div className="min-w-0 flex-1 space-y-1">
                  <p className="type-label">{milestone.label}</p>
                  <p className="type-table-body">{milestone.details}</p>
                </div>
              </li>
            ))}
          </ul>

          <ProjectSkillsTable skills={skills} />
        </div>
      </ExpandablePanel>
    </div>
  );
}
