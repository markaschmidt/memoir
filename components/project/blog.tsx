import type { ProjectBlogBlock } from "@/types/project";

type ProjectBlogProps = {
  blocks: ProjectBlogBlock[];
};

export function ProjectBlog({ blocks }: ProjectBlogProps) {
  return (
    <article className="type-body space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={index}>{block.content}</p>;
        }

        return (
          <figure key={index} className="space-y-3">
            {block.title ? (
              <figcaption className="type-label font-medium">
                {block.title}
              </figcaption>
            ) : null}
            <div className="surface-media aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${block.videoId}`}
                title={block.title ?? "Project video"}
                className="size-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </figure>
        );
      })}
    </article>
  );
}
