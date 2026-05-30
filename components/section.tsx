import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 animate-section-enter border-t border-ink/6 py-20 first:border-t-0",
        className
      )}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-8 font-serif text-3xl font-medium tracking-tight text-ink">
          {title}
        </h2>
        <div className="font-serif text-lg leading-relaxed text-ink-muted">
          {children}
        </div>
      </div>
    </section>
  );
}
