// import { defineConfig } from "sanity";
// // import { deskTool } from "sanity/desk";
// import { visionTool } from "@sanity/vision";
// import { codeInput } from "@sanity/code-input";
// import { table } from "@sanity/table";
// import { projectId, dataset } from "./lib/env.api";

// export default defineConfig({
//   name: "default",
//   title: "nrknavin.com",
//   basePath: "/studio",
//   projectId,
//   dataset,
//   plugins: [visionTool(), codeInput(), table()],
//   schema: { types: schemaTypes },
// });

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from "./schemas";
import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";



export default defineConfig({
  name: 'default',
  title: 'nrknavin',

  projectId: 'l532eyv2',
  dataset: 'production',
  basePath: "/studio",
  plugins: [structureTool(), visionTool(), codeInput(), table()],

  schema: {
    types: schemaTypes,
  },
})

