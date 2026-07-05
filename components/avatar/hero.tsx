import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarHeroProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function AvatarHero({
  src,
  alt,
  className,
  priority = false,
}: AvatarHeroProps) {
  return (
    <div
      className={cn(
        "surface-avatar",
        "h-[clamp(14rem,42vh,26rem)] sm:h-[clamp(16rem,45vh,28rem)]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-contain object-bottom"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper/50 via-paper/5 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,oklch(0.99_0.01_92/0.5),transparent_60%)]" />
    </div>
  );
}
