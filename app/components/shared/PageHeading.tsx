import { Slide } from "@/app/animation/Slide";

type HeadingType = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function PageHeading({
  title,
  description,
  children,
}: HeadingType) {
  return (
    <header className="container-safe section-padding border-b dark:border-zinc-800 border-zinc-200">
      <Slide>
        <div className="space-y-3 xs:space-y-4 sm:space-y-6">
          <h1 className="text-hero">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-sm xs:text-base sm:text-lg dark:text-zinc-400 text-zinc-600 leading-relaxed">
              {description}
            </p>
          )}
          {children && (
            <div className="pt-1 xs:pt-2">
              {children}
            </div>
          )}
        </div>
      </Slide>
    </header>
  );
}
