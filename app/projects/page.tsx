import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { projectsQuery } from "@/lib/sanity.query";
import type { ProjectType } from "@/types";
import EmptyState from "../components/shared/EmptyState";
import { Slide } from "../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import PageHeading from "../components/shared/PageHeading";

export const metadata: Metadata = {
  title: "Project | Nrk Navin",
  metadataBase: new URL("https://nrknavin.in/projects"),
  description: "Explore projects built by Navin Barange",
  openGraph: {
    title: "Projects | Nrk Navin",
    url: "https://nrknavin.in/projects",
    description: "Explore projects built by Navin",
    images:
      "https://www.officetimer.com/wp-content/uploads/2017/06/project.jpg",
  },
};

export default async function Project() {
  const projects: ProjectType[] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });

  return (
    <main className="min-h-screen flex flex-col">
      <PageHeading
        title="Projects"
        description="Here are the projects that didn't destroy my confidence (or my laptop 💻). Most are open-source because apparently I like sharing my mistakes with the world 😄"
      />

      <section className="container-safe section-padding flex-1">
        <Slide delay={0.1}>
          {projects.length > 0 ? (
            <div className="space-y-12">
              <div className="flex flex-col gap-y-3">
                <h2 className="text-heading-md">Things I Built That Actually Work™ 🎯</h2>
                <p className="text-base dark:text-zinc-400 text-zinc-600">
                  The cream of my creative chaos—tested on my machine, your mileage may vary 🚀
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
                {projects.map((project) => (
                  <Link
                    href={`/projects/${project.slug}`}
                    key={project._id}
                    className="card-base card-interactive flex flex-col"
                  >
                    <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-3 xs:mb-4 sm:mb-6">
                      {project.logo ? (
                        <Image
                          src={project.logo}
                          width={56}
                          height={56}
                          alt={project.name}
                          className="w-12 sm:w-14 h-12 sm:h-14 dark:bg-zinc-800/60 bg-zinc-100/60 rounded-lg p-2 flex-shrink-0 object-cover"
                        />
                      ) : (
                        <div className="w-12 sm:w-14 h-12 sm:h-14 dark:bg-zinc-800/60 bg-zinc-100/60 rounded-lg flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                          🪴
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-heading-sm group-hover:text-primary-color transition-colors duration-300 truncate">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-sm sm:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed flex-1 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {project.tagline}
                    </p>

                    <div className="mt-4 pt-4 border-t dark:border-zinc-700/50 border-zinc-300/50">
                      <span className="inline-flex text-primary-color font-semibold text-sm group-hover:gap-2 gap-1 transition-all duration-300">
                        Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <EmptyState value="Projects" />
          )}
        </Slide>
      </section>
    </main>
  );
}
