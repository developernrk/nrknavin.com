import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { projectsQuery } from "@/lib/sanity.query";
import type { ProjectType } from "@/types";
import EmptyState from "../components/shared/EmptyState";
import { Slide } from "../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import PageHeading from "../components/shared/PageHeading";
import { HeroParallax } from "../components/shared/hero-parallax";

export const metadata: Metadata = {
  title: "Software Development Projects & Portfolio",
  description: "Explore my full-stack development projects featuring Java, React, Python, AI/ML applications, microservices, and cloud-based solutions. Real-world applications showcasing modern software engineering practices.",
  keywords: "Software projects, Full stack projects, Java applications, React projects, Python development, AI ML projects, Microservices architecture, Cloud applications, Open source projects, Portfolio projects",
  openGraph: {
    title: "Software Development Projects & Portfolio | Navin Barange",
    url: "https://nrknavin.in/projects",
    description: "Explore my full-stack development projects featuring Java, React, Python, AI/ML applications, microservices, and cloud-based solutions.",
    images: [
      {
        url: "https://www.officetimer.com/wp-content/uploads/2017/06/project.jpg",
        width: 1200,
        height: 630,
        alt: "Navin Barange Software Development Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Projects & Portfolio | Navin Barange",
    description: "Explore my full-stack development projects featuring Java, React, Python, AI/ML applications, and cloud solutions.",
  },
};

export default async function Project() {
  const projects: ProjectType[] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });

  // Transform projects data for HeroParallax component
  const parallaxProducts = projects
    .filter((project) => project.coverImage?.image) // Only include projects with cover images
    .map((project) => ({
      title: project.name,
      link: `/projects/${project.slug}`,
      thumbnail: project.coverImage!.image,
    }));

  return (
    <main className="min-h-screen flex flex-col">
      {parallaxProducts.length >= 3 && <HeroParallax products={[...parallaxProducts, ...parallaxProducts, ...parallaxProducts]} />}

      <section className="container-safe py-12 md:py-20 flex-1">
        <Slide delay={0.1}>
          {projects.length > 0 ? (
            <div className="space-y-8 md:space-y-12">
              <div className="flex flex-col gap-y-3 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary-color via-accent-cyan to-accent-purple bg-clip-text text-transparent">
                  Featured Projects
                </h2>
                <p className="text-base md:text-lg dark:text-zinc-400 text-zinc-600">
                  Crafted with passion, powered by modern tech 🚀
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, index) => (
                  <Link
                    href={`/projects/${project.slug}`}
                    key={project._id}
                    className="group relative"
                  >
                    {/* Gradient border effect */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-primary-color via-accent-cyan to-accent-purple rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />

                    {/* Card content */}
                    <div className="relative h-full backdrop-blur-xl dark:bg-zinc-900/80 bg-white/80 rounded-2xl p-6 border dark:border-zinc-800/50 border-zinc-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col group-hover:scale-[1.02]">
                      {/* Logo and Name Row */}
                      <div className="flex items-start gap-4 mb-4">
                        {project.logo ? (
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-color/20 to-accent-purple/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                            <Image
                              src={project.logo}
                              width={56}
                              height={56}
                              alt={project.name}
                              className="relative w-14 h-14 dark:bg-zinc-800/80 bg-zinc-100/80 rounded-xl p-2.5 flex-shrink-0 object-cover backdrop-blur-sm border dark:border-zinc-700/50 border-zinc-300/50"
                            />
                          </div>
                        ) : (
                          <div className="w-14 h-14 dark:bg-gradient-to-br dark:from-zinc-800/80 dark:to-zinc-900/80 bg-gradient-to-br from-zinc-100/80 to-zinc-200/80 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 backdrop-blur-sm border dark:border-zinc-700/50 border-zinc-300/50">
                            🪴
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold dark:text-white text-zinc-900 group-hover:text-primary-color transition-colors duration-300 leading-tight">
                            {project.name}
                          </h3>
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className="text-sm md:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed flex-1 mb-6 line-clamp-3">
                        {project.tagline}
                      </p>

                      {/* CTA with animated arrow */}
                      <div className="flex items-center gap-2 text-primary-color font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        <span>Explore Project</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>

                      {/* Decorative gradient orb */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-color/10 to-accent-purple/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
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
