export type InterestMedia =
  | {
      type: "image";
      src: string;
      alt: string;
      credit?: string;
    }
  | {
      type: "video";
      /** YouTube watch URL, youtu.be link, or embed URL */
      src: string;
      title: string;
    };

export type InterestProjectLink = {
  /** Matches `slug` on the project card at /projects#slug */
  slug: string;
};

export type Interest = {
  id: string;
  title: string;
  media: InterestMedia;
  /** One-line framing under the title */
  lede: string;
  /** Short article: what you do, how you pursue it */
  body: string[];
  projects?: InterestProjectLink[];
};
