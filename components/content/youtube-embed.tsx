import { youtubeEmbedSrc } from "@/lib/youtube";
import { cn } from "@/lib/utils";

type YoutubeEmbedProps = {
  src: string;
  title: string;
  className?: string;
};

export function YoutubeEmbed({ src, title, className }: YoutubeEmbedProps) {
  const embedSrc = youtubeEmbedSrc(src);
  if (!embedSrc) return null;

  return (
    <div className={cn("surface-media aspect-video overflow-hidden", className)}>
      <iframe
        src={embedSrc}
        title={title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
