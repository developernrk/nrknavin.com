import job from "./job";
import profile from "./profile";
import project from "./project";
import post from "./post";
import author from "./author";
import heroe from "./heroe";
import { youtube } from "./youtube";
import { table } from "./table";
import blockContent from "./blockContent";
import quiz from "./quiz";
import { SchemaTypeDefinition } from "sanity";

export const schemaTypes:SchemaTypeDefinition[] = [
  profile,
  job,
  project,
  post,
  author,
  heroe,


  blockContent,
  youtube,
  table,
  quiz,
];
