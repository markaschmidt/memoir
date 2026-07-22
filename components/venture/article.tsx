import Image from "next/image";
import type { VentureArticleBlock } from "@/types/venture-article";
import { StackedScreenshots } from "./stacked-screenshots";

type VentureArticleProps = {
  blocks: VentureArticleBlock[];
};

export function VentureArticle({ blocks }: VentureArticleProps) {
  return (
    <article className="venture-article space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={index} className="type-section-title text-2xl md:text-3xl">
                {block.content}
              </h2>
            );
          case "paragraph":
            return (
              <p key={index} className="type-body">
                {block.content}
              </p>
            );
          case "image":
            return (
              <figure key={index} className="space-y-3">
                <div className="surface-media overflow-hidden">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={1280}
                    height={720}
                    className="h-auto w-full"
                  />
                </div>
                {block.caption ? (
                  <figcaption className="type-caption-muted text-center">
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          case "stacked-images":
            return (
              <StackedScreenshots
                key={index}
                images={block.images}
                alt={block.alt}
                caption={block.caption}
              />
            );
          default:
            return null;
        }
      })}
    </article>
  );
}
