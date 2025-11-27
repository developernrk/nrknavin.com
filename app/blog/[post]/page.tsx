import Image from "next/legacy/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import type { PostType } from "@/types";
import { singlePostQuery } from "@/lib/sanity.query";
import { PortableText, toPlainText } from "@portabletext/react";
import { CustomPortableText } from "../../components/shared/CustomPortableText";
import { BiChevronRight, BiSolidTime, BiTime } from "react-icons/bi";
import { formatDate } from "../../utils/date";
import SharePost from "../../components/shared/SharePost";
import FeaturedPosts from "../../components/pages/FeaturedPosts";
import { Slide } from "../../animation/Slide";
import { urlFor } from "@/lib/sanity.image";
import Buymeacoffee from "@/app/components/shared/Buymeacoffee";
import Comments from "@/app/components/shared/Comments";
import { HiCalendar, HiChat } from "react-icons/hi";
import { sanityFetch } from "@/lib/sanity.client";
import { readTime } from "@/app/utils/readTime";
import PageHeading from "@/app/components/shared/PageHeading";
import StructuredData from "@/app/components/seo/StructuredData";

type Props = {
  params: {
    post: string;
  };
};

const fallbackImage: string =
  "https://pbwebdev.co.uk/wp-content/uploads/2018/12/blogs.jpg";

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.post;
  const post: PostType = await sanityFetch({
    query: singlePostQuery,
    tags: ["Post"],
    qParams: { slug },
  });

  if (!post) {
    notFound();
  }

  return {
    title: `${post.title}`,
    metadataBase: new URL(`https://nrknavin.in/blog/${post.slug}`),
    description: post.description,
    publisher: post.author.name,
    keywords: post.tags,
    alternates: {
      canonical:
        post.canonicalLink || `https://nrknavin.in/blog/${post.slug}`,
    },
    openGraph: {
      images:
        urlFor(post.coverImage?.image).width(1200).height(630).url() ||
        fallbackImage,
      url: `https://nrknavin.in/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      type: "article",
      siteName: "nrknavin.in",
      authors: post.author.name,
      tags: post.tags,
      publishedTime: post._createdAt,
      modifiedTime: post._updatedAt || "",
    },
    twitter: {
      title: post.title,
      description: post.description,
      images:
        urlFor(post.coverImage?.image).width(680).height(340).url() ||
        fallbackImage,
      creator: `@${post.author.twitterUrl.split("twitter.com/")[1]}`,
      site: `@${post.author.twitterUrl.split("twitter.com/")[1]}`,
      card: "summary_large_image",
    },
  };
}

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post: PostType = await sanityFetch({
    query: singlePostQuery,
    tags: ["Post"],
    qParams: { slug },
  });

  const words = toPlainText(post.body);

  if (!post) {
    notFound();
  }

  return (
    <main className="container-safe mx-auto min-h-screen py-6 xs:py-8 sm:py-10">
      <StructuredData type="article" data={post} />
      <header>
        <Slide className="relative flex items-center gap-x-2 border-b dark:border-zinc-800 border-zinc-200 pb-6 xs:pb-8">
          <Link
            href="/blog"
            className="whitespace-nowrap dark:text-zinc-400 text-zinc-400 hover:dark:text-white hover:text-zinc-700 text-xs xs:text-sm border-b dark:border-zinc-700 border-zinc-200"
          >
            cd ..
          </Link>
          <BiChevronRight />
          <p className="text-zinc-400 text-xs xs:text-sm truncate">{post.title}</p>
        </Slide>
      </header>

      <article>
        <Slide
          className="grid lg:grid-cols-[75%,25%] grid-cols-1 relative"
          delay={0.1}
        >
          <div className="min-h-full lg:border-r border-r-0 dark:border-zinc-800 border-zinc-200 pt-6 xs:pt-8 sm:pt-10 pb-4 lg:pr-6 px-0">
            <div className="flex items-center flex-wrap gap-2 xs:gap-3 sm:gap-4 text-xs xs:text-sm sm:text-base mb-6 xs:mb-8 dark:text-zinc-400 text-zinc-600">
              <div className="flex items-center gap-x-2">
                <HiCalendar className="text-base" />
                <time dateTime={post.date ? post.date : post._createdAt}>
                  {post.date
                    ? formatDate(post.date)
                    : formatDate(post._createdAt)}
                </time>
              </div>
              <Link
                href="#comments"
                className="flex items-center gap-x-2 dark:text-primary-color text-tertiary-color hover:underline"
              >
                <HiChat className="text-base" />
                <div className="#comments">Comments</div>
              </Link>
              <div className="flex items-center gap-x-2">
                <BiSolidTime className="text-base" />
                <div className="">{readTime(words)}</div>
              </div>
            </div>

            <PageHeading title={post.title} description={post.description} />

            <div className="relative w-full h-auto pt-[52.5%] rounded-lg sm:rounded-xl overflow-hidden my-6 xs:my-8 sm:my-10 border dark:border-zinc-800 border-zinc-100">
              <Image
                className="object-cover"
                layout="fill"
                src={post.coverImage?.image || fallbackImage}
                alt={post.coverImage?.alt || post.title}
                quality={100}
                placeholder={post.coverImage?.lqip ? `blur` : "empty"}
                blurDataURL={post.coverImage?.lqip || ""}
              />
            </div>

            <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed tracking-tight text-sm xs:text-base sm:text-lg">
              <PortableText value={post.body} components={CustomPortableText} />
            </div>
          </div>

          <aside className="flex flex-col lg:max-h-full h-max gap-y-6 xs:gap-y-8 sticky top-2 bottom-auto right-0 py-6 xs:py-8 sm:py-10 lg:px-6 px-0">
            <section className="border-b dark:border-zinc-800 border-zinc-200 pb-4 xs:pb-6 sm:pb-10">
              <p className="dark:text-zinc-400 text-zinc-500 text-xs">
                Written By
              </p>
              <address className="flex items-center gap-x-2 xs:gap-x-3 mt-2 xs:mt-3 sm:mt-4 not-italic">
                <div className="relative w-10 xs:w-12 sm:w-14 h-10 xs:h-12 sm:h-14 flex-shrink-0">
                  <Image
                    src={urlFor(post.author.photo.image)
                      .width(80)
                      .height(80)
                      .url()}
                    alt={post.author.photo.alt}
                    layout="fill"
                    className="dark:bg-zinc-800 bg-zinc-300 rounded-full object-cover"
                  />
                </div>
                <div rel="author">
                  <h3 className="font-semibold text-sm xs:text-base sm:text-lg tracking-tight">
                    {post.author.name}
                  </h3>
                  <a
                    href={post.author.twitterUrl}
                    className="text-blue-500 text-xs hover:underline"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {`@${post.author.twitterUrl.split("x.com/")[1]}`}
                  </a>
                </div>
              </address>
            </section>

            <section className="border-b dark:border-zinc-800 border-zinc-200 pb-4 xs:pb-6 sm:pb-10">
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold tracking-tight mb-2 xs:mb-3 sm:mb-4">
                Tags
              </h3>
              <ul className="flex flex-wrap items-center gap-1.5 xs:gap-2 sm:gap-3 tracking-tight">
                {post.tags.map((tag, id) => (
                  <li
                    key={id}
                    className="dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 sm:py-2 text-xs"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </section>

            <SharePost
              title={post.title}
              slug={post.slug}
              description={post.description}
            />

            <section className="border-b dark:border-zinc-800 border-zinc-200 pb-4 xs:pb-6 sm:pb-10">
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold tracking-tight mb-2 xs:mb-3 sm:mb-4">
                Featured
              </h3>
              <FeaturedPosts params={params.post} />
            </section>
          </aside>
        </Slide>
      </article>

      {/*<section*/}
      {/*  id="comments"*/}
      {/*  className="max-w-3xl mt-10 lg:border-t dark:border-zinc-800 border-zinc-200 lg:py-10 pt-0"*/}
      {/*>*/}
      {/*  <h3 className="lg:text-4xl text-3xl font-semibold tracking-tight mb-8">*/}
      {/*    Comments*/}
      {/*  </h3>*/}
      {/*  <Comments />*/}
      {/*</section>*/}

      <section className="max-w-3xl lg:py-10 pt-0">
        <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4 xs:mb-6 sm:mb-8">
          Support
        </h3>
        <Buymeacoffee />
      </section>
    </main>
  );
}
