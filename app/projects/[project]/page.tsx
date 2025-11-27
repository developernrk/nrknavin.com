import Image from "next/image";
import { Metadata } from "next";
import { singleProjectQuery } from "@/lib/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "@/app/components/shared/CustomPortableText";
import { Slide } from "../../animation/Slide";
import { urlFor } from "@/lib/sanity.image";
import { sanityFetch } from "@/lib/sanity.client";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import StructuredData from "@/app/components/seo/StructuredData";

type Props = {
  params: {
    project: string;
  };
};

const fallbackImage: string =
  "https://www.officetimer.com/wp-content/uploads/2017/06/project.jpg";

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await sanityFetch({
    query: singleProjectQuery,
    tags: ["project"],
    qParams: { slug },
  });

  return {
    title: `${project.name} - Software Development Project`,
    description: `${project.tagline} - A software development project by Navin Barange showcasing full-stack development, modern technologies, and best practices.`,
    keywords: `${project.name}, Software project, Full stack development, ${project.tagline}, Navin Barange project, Web development, Programming project`,
    openGraph: {
      type: "website",
      url: `https://nrknavin.in/projects/${project.slug}`,
      title: `${project.name} - Software Development Project`,
      description: `${project.tagline} - A software development project by Navin Barange.`,
      images: [
        {
          url: project.coverImage
            ? urlFor(project.coverImage.image).width(1200).height(630).url()
            : fallbackImage,
          width: 1200,
          height: 630,
          alt: `${project.name} - Software Development Project`,
        },
      ],
      siteName: "Navin Barange Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} - Software Development Project`,
      description: `${project.tagline} - A software development project by Navin Barange.`,
      images: [
        project.coverImage
          ? urlFor(project.coverImage.image).width(1200).height(630).url()
          : fallbackImage,
      ],
    },
    alternates: {
      canonical: `https://nrknavin.in/projects/${project.slug}`,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await sanityFetch({
    query: singleProjectQuery,
    tags: ["project"],
    qParams: { slug },
  });

  return (
    <main className="container-safe section-padding">
      <StructuredData type="project" data={project} />
      <Slide>
        <div className="container-narrow">
          <div className="flex items-start justify-between flex-wrap gap-3 xs:gap-4 mb-6 xs:mb-8 sm:mb-10">
            <h1 className="font-incognito font-black tracking-tight text-2xl xs:text-3xl sm:text-4xl lg:text-5xl flex-grow">
              {project.name}
            </h1>

            <div className="flex items-center gap-1.5 xs:gap-2 flex-wrap">
              <a
                href={project.projectUrl}
                rel="noreferrer noopener"
                target="_blank"
                className={`btn-primary inline-flex items-center gap-x-1.5 xs:gap-x-2 text-xs transition-all duration-300 ${
                  !project.projectUrl
                    ? "cursor-not-allowed opacity-60"
                    : "hover:shadow-lg"
                }`}
              >
                <BiLinkExternal aria-hidden="true" />
                <span>{project.projectUrl ? "Live URL" : "Coming Soon"}</span>
              </a>

              <a
                href={project.repository}
                rel="noreferrer noopener"
                target="_blank"
                className={`btn-secondary inline-flex items-center gap-x-1.5 xs:gap-x-2 text-xs transition-all duration-300 ${
                  !project.repository
                    ? "cursor-not-allowed opacity-60"
                    : "hover:shadow-lg"
                }`}
              >
                <BiLogoGithub aria-hidden="true" />
                <span>{project.repository ? "GitHub" : "No Repo"}</span>
              </a>
            </div>
          </div>

          <div className="relative w-full h-auto pt-[52.5%] rounded-lg sm:rounded-xl overflow-hidden my-6 xs:my-8 sm:my-10 border dark:border-zinc-800 border-zinc-100">
            <Image
              className="object-cover"
              fill
              src={project.coverImage?.image ?? fallbackImage}
              alt={project.coverImage?.alt ?? project.name}
              quality={100}
              placeholder={project.coverImage?.lqip ? `blur` : "empty"}
              blurDataURL={project.coverImage?.lqip || ""}
            />
          </div>

          <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed space-y-3 xs:space-y-4 text-sm xs:text-base sm:text-lg">
            <PortableText
              value={project.description}
              components={CustomPortableText}
            />
          </div>
        </div>
      </Slide>
    </main>
  );
}
