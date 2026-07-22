import type { StaticImageData } from "next/image";
import type { ContentBadgeProps } from "@/types/content-badge";

export type VentureStatus = "current" | "past";

export type VentureProps = {
  slug: string;
  name: string;
  description: string;
  websiteUrl: string;
  logo: string | StaticImageData;
  category: string;
  period: string;
  status: VentureStatus;
  tags?: ContentBadgeProps[];
  className?: string;
};
