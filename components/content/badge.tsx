import Image from "next/image";
import type { ContentBadgeProps } from "@/types/content-badge";
import { cn } from "@/lib/utils";

export function ContentBadge({
  label,
  color,
  logo,
  icon,
  iconOnly = false,
  href,
  tag = false,
  download,
  className,
}: ContentBadgeProps) {
  const content = (
    <>
      {icon ? (
        icon
      ) : logo ? (
        <Image
          src={logo}
          alt=""
          width={14}
          height={14}
          className="size-3.5 shrink-0 rounded-sm object-contain"
        />
      ) : null}
      {!iconOnly ? <span>{label}</span> : null}
      {download ? (
        <a
          href={download.href}
          download={download.filename}
          className="ml-0.5 opacity-70 transition-opacity hover:opacity-100"
          aria-label={`Download ${download.filename ?? label}`}
          onClick={(event) => event.stopPropagation()}
        >
          ↓
        </a>
      ) : null}
    </>
  );

  const styles = cn(
    "badge-base",
    iconOnly ? "size-6 justify-center px-0" : "px-2.5",
    color,
    className
  );

  if (href && !tag) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={iconOnly ? label : undefined}
        className={cn(styles, "hover:brightness-95")}
      >
        {content}
      </a>
    );
  }

  return <span className={styles}>{content}</span>;
}

export type { ContentBadgeProps } from "@/types/content-badge";
