import { cn } from "@/lib/utils";

type PageBandProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "breeze" | "elevated";
  bleed?: boolean;
};

const TONE_CLASS: Record<NonNullable<PageBandProps["tone"]>, string> = {
  paper: "page-band-paper",
  breeze: "page-band-breeze",
  elevated: "page-band-elevated",
};

export function PageBand({
  children,
  className,
  tone = "breeze",
  bleed = true,
}: PageBandProps) {
  return (
    <section
      className={cn(bleed && "page-band page-band-bleed", TONE_CLASS[tone], className)}
    >
      <div className="page-band-inner">{children}</div>
    </section>
  );
}
