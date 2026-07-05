import type { ContentBadgeProps } from "@/types/content-badge";

export type AccoladeMediaLink = {
  label: string;
  href: string;
};

export type AccoladeProps = {
  iconSrc: string;
  name: string;
  description?: string;
  location?: string;
  year?: number | string;
  images?: string[];
  mediaLinks?: AccoladeMediaLink[];
  tags?: ContentBadgeProps[];
  className?: string;
};
