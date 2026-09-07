import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarHeroProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function AvatarHero({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
}: AvatarHeroProps) {
  return (
    <div
      className={cn(
        "surface-avatar relative isolate overflow-hidden",
        "h-[clamp(16rem,45vh,30rem)] sm:h-[clamp(18rem,48vh,32rem)]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized={src.startsWith("/avatars/")}
        className={cn(
          "object-contain object-bottom drop-shadow-[0_18px_40px_rgb(14_14_14/0.12)]",
          imageClassName
        )}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-paper via-paper/30 to-transparent" />
    </div>
  );
}
