import type { ContentBadgeProps } from "@/types/content-badge";

export type AccoladeCategory =
  | "academic"
  | "reef-media"
  | "hackathons"
  | "other";

export type AccoladeMediaLink = {
  label: string;
  href: string;
};

export type AccoladeProjectLink = {
  label: string;
  href: string;
};

export type AccoladeProps = {
  iconSrc: string;
  name: string;
  description?: string;
  location?: string;
  year?: number | string;
  category: AccoladeCategory;
  images?: string[];
  videoUrl?: string;
  mediaLinks?: AccoladeMediaLink[];
  projectLink?: AccoladeProjectLink;
  tags?: ContentBadgeProps[];
  className?: string;
};

export const ACCOLADE_CATEGORY_LABELS: Record<AccoladeCategory, string> = {
  academic: "Academic",
  "reef-media": "Reef Media",
  hackathons: "Hackathons",
  other: "Other",
};
