import { TableRow } from "@sanity/table";
import { PortableTextBlock } from "sanity";

export interface Table {
  rows?: TableRow[];
  title?: string;
}

export interface TableValueProps {
  table?: Table;
  caption?: string;
}

export interface QuizValueProps {
  _key: string;
  question: string;
  answer: string;
}

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    image: string;
    lqip: string;
    alt: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  og: string;
  usage: PortableTextBlock[];
  skills?: SkillType[];
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type ProjectType = {
  _id: string;
  _createdAt?: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl?: string;
  repository?: string;
  logo?: string;
  coverImage?: {
    image: string;
    alt: string | null;
    lqip: string;
  };
  description?: PortableTextBlock[];
};

export type PostType = {
  _id: string;
  _createdAt: string;
  _updatedAt?: string;
  title: string;
  slug: string;
  description: string;
  canonicalLink?: string;
  date?: string;
  coverImage: {
    image: string;
    lqip: string;
    alt: string | null;
  };
  tags: string[];
  author: {
    name: string;
    photo: {
      image: string;
      alt: string;
    };
    twitterUrl: string;
  };
  body: PortableTextBlock[];
  featured: boolean;
  isPublished: boolean;
};
export type SkillType = {
  _id: string;
  name: string;
  category: "frontend" | "backend" | "mobile" | "ai" | "architecture" | "tools" | "databases" | "devops" | "other";
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: {
    image: string;
    alt: string;
  };
  iconName?: string; // react-icons icon name (e.g., 'FaReact', 'SiTypescript')
  yearsOfExperience?: number;
  description?: string;
  order?: number;
};
