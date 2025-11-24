import Image from "next/image";
import duckImage from "@/public/searching-duck.gif";
import FeaturedPosts from "../pages/FeaturedPosts";

type props = {
  title: string;
  description: string;
};

export default function NotFoundComponent({ title, description }: props) {
  return (
    <main className="container-safe section-padding min-h-[60vh] flex flex-col">
      <header className="mb-8 xs:mb-10 sm:mb-12 md:mb-16">
        <Image
          width={80}
          height={80}
          src={duckImage}
          alt="Yellow duck searching"
          className="animate-bounce"
        />
        <h1 className="font-incognito font-black tracking-tight text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 mb-3 xs:mb-4 sm:mb-5 md:mb-6 max-w-3xl">
          {title}
        </h1>
        <p className="max-w-2xl text-xs xs:text-sm sm:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          {description}
        </p>
      </header>

      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
          <FeaturedPosts />
        </div>
      </div>
    </main>
  );
}
