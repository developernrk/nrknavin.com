import Image from "next/legacy/image";
import Link from "next/link";
import { postsQuery } from "@/lib/sanity.query";
import { PostType } from "@/types";
import EmptyState from "../shared/EmptyState";
import { BiSolidTime, BiTime } from "react-icons/bi";
import { formatDate } from "../../utils/date";
import { HiCalendar } from "react-icons/hi";
import { sanityFetch } from "@/lib/sanity.client";
import { readTime } from "@/app/utils/readTime";
import { toPlainText } from "@portabletext/react";

const fallbackImage: string =
  "https://pbwebdev.co.uk/wp-content/uploads/2018/12/blogs.jpg";

export default async function Posts() {
  const posts: PostType[] = await sanityFetch({
    query: postsQuery,
    tags: ["Post"],
  });

  return (
    <section>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-8 mb-12">
          {posts.map((post) =>
            post.isPublished !== true ? null : (
              <article key={post._id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-base card-interactive h-full flex flex-col overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative w-[calc(100%+1.5rem)] h-32 xs:h-40 sm:h-48 overflow-hidden xs:w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+4rem)] -mx-3 xs:-mx-4 sm:-mx-6 md:-mx-8 mb-3 xs:mb-4 sm:mb-6">
                    <Image
                      src={post.coverImage?.image || fallbackImage}
                      className="dark:bg-zinc-800 bg-zinc-100 object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      alt={post.coverImage?.alt || post.title}
                      layout="fill"
                      placeholder={post.coverImage ? "blur" : "empty"}
                      blurDataURL={post.coverImage?.lqip || ""}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1">
                    <h2 className="text-heading-sm mb-1.5 xs:mb-2 sm:mb-3 group-hover:text-primary-color transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="dark:text-zinc-400 text-zinc-600 text-xs xs:text-sm sm:text-base leading-relaxed flex-1 mb-3 xs:mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {post.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-2 xs:gap-3 sm:gap-4 pt-3 xs:pt-4 border-t dark:border-zinc-700/50 border-zinc-300/50 text-xs dark:text-zinc-400 text-zinc-600">
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <HiCalendar className="text-sm" />
                        <time dateTime={post.date ? post.date : post._createdAt} className="text-xs">
                          {post.date
                            ? formatDate(post.date)
                            : formatDate(post._createdAt)}
                        </time>
                      </div>
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <BiSolidTime className="text-sm" />
                        <span className="text-xs">{readTime(toPlainText(post.body))}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            )
          )}
        </div>
      ) : (
        <EmptyState value="Blog Post" />
      )}
    </section>
  );
}
