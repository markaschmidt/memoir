import Image from "next/image";

type StackedScreenshotsProps = {
  images: readonly string[];
  alt: string;
  caption?: string;
};

export function StackedScreenshots({ images, alt, caption }: StackedScreenshotsProps) {
  return (
    <figure className="space-y-3">
      <div className="surface-media overflow-hidden">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={index === 0 ? alt : ""}
            aria-hidden={index > 0 ? true : undefined}
            width={1280}
            height={720}
            className="block h-auto w-full"
          />
        ))}
      </div>
      {caption ? (
        <figcaption className="type-caption-muted text-center">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
