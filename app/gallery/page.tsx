import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";

const images = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1585618256754-241cfe4e8113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=100",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1585619203238-70e7631cc672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1585619443911-c2bb23fb2a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
];

export const metadata: Metadata = {
  title: "Photo Gallery & Visual Portfolio",
  description: "Explore the visual side of Navin Barange - a collection of photography, design work, and creative projects showcasing artistic perspective alongside technical expertise.",
  keywords: "Photo gallery, Photography, Visual portfolio, Creative work, Design portfolio, Navin Barange photography, Visual arts, Creative projects",
  openGraph: {
    title: "Photo Gallery & Visual Portfolio | Navin Barange",
    url: "https://nrknavin.in/gallery",
    description: "Explore the visual side of Navin Barange - photography, design work, and creative projects.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585618256754-241cfe4e8113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Navin Barange Photo Gallery and Visual Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery & Visual Portfolio | Navin Barange",
    description: "Explore the visual side of Navin Barange - photography, design work, and creative projects.",
  },
};

export default function Photos() {
  return (
    <main className="container-safe section-padding">
      <PageHeading
        title="Gallery"
        description="Coming Soon™ (patience is a virtue I'm still developing 🎨 ... much like my photography skills 📸)"
      />
      {/* <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="playing guitar"
              width={350}
              height={800}
              className="dark:bg-primary-bg bg-secondary-bg"
            />
          ))}
        </Slide>
      </figure> */}
    </main>
  );
}
