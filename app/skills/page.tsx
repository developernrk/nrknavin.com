import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity.client";
import { skillsQuery } from "@/lib/sanity.query";
import type { SkillType } from "@/types";
import PageHeading from "../components/shared/PageHeading";
import SkillsByCategory from "../components/pages/SkillsByCategory";
import { Slide } from "../animation/Slide";
import EmptyState from "../components/shared/EmptyState";

export const metadata: Metadata = {
  title: "Technical Skills & Expertise",
  description: "Comprehensive overview of my technical skills including Java, React, Python, Spring Boot, AI/ML, cloud architecture, and full-stack development expertise with years of experience.",
  keywords: "Java skills, React expertise, Python development, Spring Boot, Microservices, Cloud Architecture, AI ML skills, Full Stack Developer skills, Technical expertise, Software engineering skills",
  openGraph: {
    title: "Technical Skills & Expertise | Navin Barange",
    url: "https://nrknavin.in/skills",
    description: "Comprehensive overview of my technical skills including Java, React, Python, Spring Boot, AI/ML, cloud architecture, and full-stack development expertise.",
    images: [
      {
        url: "https://nrknavin.in/project.png",
        width: 1200,
        height: 630,
        alt: "Navin Barange Technical Skills and Expertise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Skills & Expertise | Navin Barange",
    description: "Comprehensive overview of my technical skills including Java, React, Python, Spring Boot, AI/ML, and cloud architecture.",
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