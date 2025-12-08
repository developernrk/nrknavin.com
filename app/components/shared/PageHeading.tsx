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
    <header className="w-full min-h-[20vh] md:min-h-[40vh] mt-5 flex items-center justify-center border-b dark:border-zinc-800 border-zinc-200 bg-gradient-to-b dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 from-white via-zinc-50 to-white">
      <Slide>
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="space-y-4 md:space-y-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 from-zinc-900 via-zinc-700 to-zinc-600 bg-clip-text text-transparent">
              {title}
            </h1>
            {description && (
              <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl dark:text-zinc-400 text-zinc-600 leading-relaxed">
                {description}
              </p>
            )}
            {children && (
              <div className="pt-4 md:pt-6">
                {children}
              </div>
            )}
          </div>
        </div>
      </Slide>
    </header>
  );
}
