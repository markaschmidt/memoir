import { cn } from "@/lib/utils";

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
};

export function PageSection({ children, className, wide }: PageSectionProps) {
  return (
    <section
      className={cn(
        "page-section",
        wide ? "page-section-wide" : "page-section-narrow",
        className
      )}
    >
      {children}
    </section>
  );
}
