import Link from "next/link";
import Image from "next/legacy/image";
import { postsQuery } from "@/lib/sanity.query";
import type { PostType } from "@/types";
import { sanityFetch } from "@/lib/sanity.client";

export default async function FeaturedPosts({ params }: { params?: string }) {
  const featuredPosts: PostType[] = await sanityFetch({
    query: postsQuery,
    tags: ["Post"],
  });

  return (
    <>
      {featuredPosts.map((post) =>
        post.featured !== true || post.isPublished !== true ? null : (
          <article
            key={post._id}
            className={`${
              post.slug === params ? "hidden" : "block"
            }`}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="card-interactive flex flex-col gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-3 sm:p-5 h-full transition-all duration-300 group"
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden dark:bg-zinc-800 bg-zinc-100">
                <Image
                  src={post.coverImage?.image}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={post.coverImage?.alt || post.title}
                  width={400}
                  height={230}
                  placeholder={post.coverImage ? "blur" : "empty"}
                  blurDataURL={post.coverImage?.lqip || ""}
                  quality={100}
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xs xs:text-sm sm:text-base font-semibold tracking-tight mb-1 xs:mb-2 line-clamp-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="dark:text-zinc-400 text-zinc-600 text-xs line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          </article>
        )
      )}
    </>
  );
}
