import type { ProjectMilestone } from "@/types/project";

export function getProjectProgressPercent(milestones: ProjectMilestone[]) {
  if (milestones.length === 0) return 0;

  const completed = milestones.filter((milestone) => milestone.completed).length;
  return Math.round((completed / milestones.length) * 100);
}
