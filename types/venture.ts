import type { StaticImageData } from "next/image";
import type { ContentBadgeProps } from "@/types/content-badge";

export type VentureProps = {
  name: string;
  description: string;
  websiteUrl: string;
  logo: string | StaticImageData;
  category: string;
  tags?: ContentBadgeProps[];
  className?: string;
};
