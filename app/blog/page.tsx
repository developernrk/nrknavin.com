import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";

export const metadata: Metadata = {
  title: "Technical Blog & Programming Insights",
  description: "Read in-depth articles about full-stack development, Java programming, React best practices, AI/ML implementation, cloud architecture, and software engineering insights from Navin Barange.",
  keywords: "Programming blog, Java tutorials, React development, Full stack articles, AI ML blog, Software engineering, Technical writing, Development insights, Coding best practices, Technology blog",
  openGraph: {
    title: "Technical Blog & Programming Insights | Navin Barange",
    url: "https://nrknavin.in/blog",
    description: "Read in-depth articles about full-stack development, Java programming, React best practices, AI/ML implementation, and software engineering insights.",
    images: [
      {
        url: "https://pbwebdev.co.uk/wp-content/uploads/2018/12/blogs.jpg",
        width: 1200,
        height: 630,
        alt: "Navin Barange Technical Blog and Programming Articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Blog & Programming Insights | Navin Barange",
    description: "In-depth articles about full-stack development, Java, React, AI/ML, and software engineering insights.",
  },
};

export default async function Blog() {
  return (
    <main className="min-h-screen flex flex-col">
      <PageHeading
        title="Blogs"
        description="Welcome to my blog where I overthink problems at 2 AM and share the chaosy thoughts that come with it. Fair warning: reading my posts may cause sudden 'aha!' moments or nosebleeds."
      >
         {/*<Social type="publication" />*/}
      </PageHeading>

      <section className="container-safe section-padding">
        <Slide delay={0.1}>
          <div className="space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12">
            <div className="flex flex-col gap-y-2 xs:gap-y-2.5 sm:gap-y-3">
              <h2 className="text-heading-md">My Collection of Overthought Musings 📚</h2>
              <p className="text-xs xs:text-sm sm:text-base dark:text-zinc-400 text-zinc-600">
                Where I explain things the hard way so you don&apos;t have to ✨
              </p>
            </div>
            <Posts />
          </div>
        </Slide>
      </section>
    </main>
  );
}
