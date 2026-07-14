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
  avatarClassName?: string;
  headerExtra?: React.ReactNode;
  wide?: boolean;
  children: React.ReactNode;
};

export function PageLayout({
  title,
  description,
  avatar,
  avatarClassName,
  headerExtra,
  wide,
  children,
}: PageLayoutProps) {
  const heroBalanced = avatar && headerExtra;

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
              "grid gap-8",
              avatar && "md:grid-cols-2 md:gap-10 lg:gap-12",
              heroBalanced ? "md:items-stretch" : avatar && "md:items-center"
            )}
          >
            <header
              className={cn(
                "text-center md:text-left",
                heroBalanced
                  ? "flex h-full flex-col justify-between gap-6"
                  : "space-y-3"
              )}
            >
              <div className="space-y-3">
                <h1 className="type-display">{title}</h1>
                {description ? (
                  <p className="type-body mx-auto max-w-md md:mx-0">
                    {description}
                  </p>
                ) : null}
              </div>

              {headerExtra ? <div>{headerExtra}</div> : null}
            </header>

            {avatar ? (
              <AvatarHero
                src={avatar.src}
                alt={avatar.alt}
                priority
                className={cn(
                  "mx-auto w-full md:mx-0",
                  heroBalanced && "md:h-full md:min-h-[22rem]",
                  avatarClassName
                )}
              />
            ) : null}
          </div>
        </FadeIn>

        <div className="space-y-6">{children}</div>
      </div>
    </main>
  );
}
