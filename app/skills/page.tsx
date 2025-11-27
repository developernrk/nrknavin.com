import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity.client";
import { skillsQuery } from "@/lib/sanity.query";
import type { SkillType } from "@/types";
import PageHeading from "../components/shared/PageHeading";
import SkillsByCategory from "../components/pages/SkillsByCategory";
import { Slide } from "../animation/Slide";
import EmptyState from "../components/shared/EmptyState";

export const metadata: Metadata = {
  title: "Skills | Nrk Navin",
  metadataBase: new URL("https://nrknavin.in/skills"),
  description: "Explore the tech stack and skills that power my development work",
  openGraph: {
    title: "Skills | Nrk Navin",
    url: "https://nrknavin.in/skills",
    description: "Explore the tech stack and skills that power my development work",
    images: "https://nrknavin.in/project.png",
  },
};

export default async function SkillsPage() {
  const skills: SkillType[] = await sanityFetch({
    query: skillsQuery,
    tags: ["skill"],
  });

  return (
    <main className="min-h-screen flex flex-col">
      <PageHeading
        title="Skills & Expertise"
        description="The tech stack I've mastered, and the ones I'm still Googling 😄. Here's what I can bring to your projects."
      />

      <section className="container-safe section-padding flex-1">
        <Slide delay={0.1}>
          {skills.length > 0 ? (
            <div className="space-y-12">
              <div className="flex flex-col gap-y-3">
                <h2 className="text-heading-md">My Digital Toolkit</h2>
                <p className="text-base dark:text-zinc-400 text-zinc-600">
                  Organized by category with proficiency levels, years of experience, and real-world insights.
                </p>
              </div>

              <SkillsByCategory skills={skills} />
            </div>
          ) : (
            <EmptyState value="Skills" />
          )}
        </Slide>
      </section>
    </main>
  );
}