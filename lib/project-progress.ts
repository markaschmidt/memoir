import type { MilestoneStatus, ProjectMilestone } from "@/types/project";

const MILESTONE_WEIGHT: Record<MilestoneStatus, number> = {
  completed: 1,
  "in-progress": 0.25,
  pending: 0,
};

export function getProjectProgressPercent(milestones: ProjectMilestone[]) {
  if (milestones.length === 0) return 0;

  const weighted = milestones.reduce(
    (sum, milestone) => sum + MILESTONE_WEIGHT[milestone.status],
    0
  );
  return Math.round((weighted / milestones.length) * 100);
}
