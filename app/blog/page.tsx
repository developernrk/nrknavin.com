import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";

export const metadata: Metadata = {
  title: "Blog | Nrk Navin",
  metadataBase: new URL("https://nrknavin.com/blog"),
  description: "Read latest stories from Navin Barange's Blog",
  openGraph: {
    title: "Blog | NRK Navin",
    url: "https://nrknavin.com/blog",
    description: "Read latest stories from Navin Barange's Blog",
    images:
      "https://pbwebdev.co.uk/wp-content/uploads/2018/12/blogs.jpg",
  },
};

export default async function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Blogs"
        description="Welcome to my blog, where I share personal stories and lessons I've learned along the way. I also contribute to other publications, bringing you diverse insights and perspectives."
      >
         <Social type="publication" />
      </PageHeading>

      <Slide delay={0.1}>
         <div className="flex items-center gap-x-3 mb-8">
          {/*<BiDetail />*/}
          <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        <Posts />
      </Slide>
    </main>
  );
}
