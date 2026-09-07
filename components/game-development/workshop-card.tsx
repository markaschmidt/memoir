import Image from "next/image";
import Link from "next/link";

export type WorkshopCardItem = {
  id: string;
  title: string;
  previewUrl?: string;
  subscriptions: number;
  views: number;
};

function workshopUrl(id: string) {
  return `https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`;
}

function formatCount(value: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact" }).format(value);
}

export function WorkshopCard({ item }: { item: WorkshopCardItem }) {
  const url = workshopUrl(item.id);

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-card group flex h-full flex-col overflow-hidden transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-ink/25"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-ink/10 bg-ink/5">
        {item.previewUrl ? (
          <Image
            src={item.previewUrl}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center">
            <span className="type-caption-muted line-clamp-3">{item.title}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="type-card-title-sm line-clamp-2 transition-colors group-hover:text-breeze-deep">
          {item.title}
        </h3>
        <p className="type-caption-muted mt-auto tabular-nums">
          {formatCount(item.subscriptions)} subs · {formatCount(item.views)} views
        </p>
      </div>
    </Link>
  );
}
