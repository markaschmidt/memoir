import { AvatarHero } from "@/components/avatar";
import { FadeIn } from "@/animations/fade-in";
import { cn } from "@/lib/utils";

type PageLayoutProps = {
  title: string;
  description?: string;
  avatar?: {
    src: string;
    alt: string;
  };
  wide?: boolean;
  children: React.ReactNode;
};

export function PageLayout({
  title,
  description,
  avatar,
  wide,
  children,
}: PageLayoutProps) {
  return (
    <main className="flex-1 py-12 md:py-16">
      <div
        className={cn(
          "mx-auto space-y-10 px-6",
          wide || avatar ? "max-w-6xl" : "max-w-3xl"
        )}
      >
        <FadeIn>
          <div
            className={cn(
              "grid items-center gap-8",
              avatar && "md:grid-cols-2 md:gap-10 lg:gap-12"
            )}
          >
            <header className="space-y-3 text-center md:text-left">
              <h1 className="type-display">{title}</h1>
              {description ? (
                <p className="type-body mx-auto max-w-md md:mx-0">{description}</p>
              ) : null}
            </header>

            {avatar ? (
              <AvatarHero
                src={avatar.src}
                alt={avatar.alt}
                priority
                className="mx-auto w-full md:mx-0"
              />
            ) : null}
          </div>
        </FadeIn>

        <div className="space-y-6">{children}</div>
      </div>
    </main>
  );
}
