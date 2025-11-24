import Image from "next/image";
import { jobQuery } from "@/lib/sanity.query";
import type { JobType } from "@/types";
import { formatDate } from "../../utils/date";
import { Slide } from "../../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import RefLink from "../shared/RefLink";

export default async function Job() {
  const job: JobType[] = await sanityFetch({
    query: jobQuery,
    tags: ["job"],
  });

  return (
    <section className="container-safe section-padding">
      <Slide delay={0.16}>
        <div className="space-y-1.5 xs:space-y-2 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-heading-lg">Where I Leveled Up My Skills</h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg dark:text-zinc-400 text-zinc-600">
            Places that trusted me with their codebase (and I didn&apos;t break prod... mostly)
          </p>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
          {job.map((data) => (
            <div
              key={data._id}
              className="card-base card-interactive group"
            >
              {/* Logo and Company Info */}
              <div className="flex items-start gap-2 xs:gap-3 sm:gap-4 mb-4">
                <RefLink
                  href={data.url}
                  className="flex-shrink-0 grid place-items-center from-primary-color/10 to-secondary-color/10 border dark:border-zinc-700/50 border-zinc-300/50 h-14 w-14 sm:h-16 sm:w-16 p-2 rounded-lg overflow-hidden relative group/logo hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={data.logo}
                    className="object-cover w-full h-full"
                    alt={`${data.name} logo`}
                    width={64}
                    height={64}
                    unoptimized={false}
                  />
                </RefLink>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-heading-sm mb-0.5 group-hover:text-primary-color transition-colors duration-300">
                    {data.name}
                  </h3>
                  <p className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 font-medium mb-1">
                    {data.jobTitle}
                  </p>
                  <time className="text-xs dark:text-zinc-500 text-zinc-500 tracking-wide uppercase font-semibold">
                    {formatDate(data.startDate)} —{" "}
                    {data.endDate ? (
                      formatDate(data.endDate)
                    ) : (
                      <span className="dark:text-primary-color text-secondary-color font-bold">
                        Present
                      </span>
                    )}
                  </time>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                {data.description}
              </p>

              {/* Visit Button */}
              <RefLink
                href={data.url}
                className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary-color dark:hover:text-secondary-color hover:text-secondary-color transition-colors duration-300"
              >
                Learn More →
              </RefLink>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
