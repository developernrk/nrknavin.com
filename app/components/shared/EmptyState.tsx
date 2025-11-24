import Image from "next/image";
import duckImage from "@/public/searching-duck.gif";

type stateType = {
  value?: string;
  icon?: React.ReactNode;
  title?: string;
  message?: string;
};

export default function EmptyState({ value, title, icon, message }: stateType) {
  const funnyTitles: Record<string, string> = {
    'blog post': 'Plot twist: There\'s nothing here yet! 🎬',
    'project': 'Plot twist: There\'s nothing here yet! 🎬',
    'projects': 'Plot twist: There\'s nothing here yet! 🎬',
  };

  const funnyMessages: Record<string, string> = {
    'blog post': 'Tumbleweeds rolling through here 🌵. I promise content is coming (probably 😅)',
    'project': 'Sometimes even developers take a break. Check back soon for fresh magic ✨',
    'projects': 'Sometimes even developers take a break. Check back soon for fresh magic ✨',
  };

  const defaultTitle = title ?? funnyTitles[value?.toLowerCase() ?? ''] ?? `No ${value} available, will publish soon`;
  const defaultMessage = message ?? funnyMessages[value?.toLowerCase() ?? ''] ?? `Patience is a virtue. ${value} is coming soon! 🎪`;

  return (
    <div className="w-full flex flex-col items-center text-center dark:bg-primary-bg bg-zinc-100 border border-dashed dark:border-zinc-700 border-zinc-200 rounded-md px-3 xs:px-4 sm:px-6 py-6 xs:py-8 sm:py-12">
      <div className="mb-3 xs:mb-4 sm:mb-6 text-xl xs:text-2xl sm:text-4xl text-zinc-500">
        {icon || (
          <Image
            width={80}
            height={80}
            src={duckImage}
            alt="Searching"
            className="w-14 xs:w-16 sm:w-20 h-14 xs:h-16 sm:h-20"
          />
        )}
      </div>
      <h3 className="font-bold tracking-tight text-base xs:text-lg sm:text-xl mb-2 xs:mb-2.5 sm:mb-3">
        {defaultTitle}
      </h3>
      <p className="text-xs xs:text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-3 xs:mb-4 sm:mb-6 max-w-sm leading-relaxed">
        {defaultMessage}
      </p>
    </div>
  );
}
