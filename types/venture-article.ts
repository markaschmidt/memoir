export type VentureArticleBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: "stacked-images";
      images: readonly string[];
      alt: string;
      caption?: string;
    };

export type VentureArticle = {
  slug: string;
  subtitle: string;
  blocks: VentureArticleBlock[];
};
