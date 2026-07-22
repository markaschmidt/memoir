import type { StaticImageData } from "next/image";
import type { ContentBadgeProps } from "@/types/content-badge";

export type ProjectBlogBlock =
  | { type: "paragraph"; content: string }
  | { type: "youtube"; videoId: string; title?: string };

export type MilestoneStatus = "completed" | "in-progress" | "pending";

export type ProjectMilestone = {
  label: string;
  status: MilestoneStatus;
  details: string;
};

export type ProjectStatus = {
  milestones: ProjectMilestone[];
};

export type ProjectCollaborator = {
  name: string;
  role?: string;
};

export type ProjectSkill = {
  name: string;
  category: string;
};

export type ProjectTech = {
  name: string;
  category: string;
  notes?: string;
};

export type ProjectProps = {
  slug: string;
  title: string;
  description: string;
  githubUrl: string;
  logo: string | StaticImageData;
  startDate: string;
  endDate?: string;
  status: ProjectStatus;
  skills: ProjectSkill[];
  blog?: ProjectBlogBlock[];
  collaborators?: ProjectCollaborator[];
  techStack: ProjectTech[];
  tags?: ContentBadgeProps[];
  className?: string;
};
