import { defineField, SchemaTypeDefinition } from "sanity";

const skill: SchemaTypeDefinition = {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Skill Name",
      type: "string",
      validation: (rule) => rule.required(),
      description: "Name of the skill (e.g., React, TypeScript, Node.js)",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "Mobile", value: "mobile" },
          { title: "AI & Machine Learning", value: "ai" },
          { title: "Architecture & Patterns", value: "architecture" },
          { title: "Tools & Platforms", value: "tools" },
          { title: "Databases", value: "databases" },
          { title: "DevOps & Cloud", value: "devops" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (rule) => rule.required(),
      description: "Category for organizing skills",
    }),
    defineField({
      name: "proficiency",
      title: "Proficiency Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
          { title: "Expert", value: "expert" },
        ],
      },
      validation: (rule) => rule.required(),
      description: "Your proficiency level with this skill",
    }),
    defineField({
      name: "icon",
      title: "Icon/Logo (Image)",
      type: "image",
      description: "Optional: Upload skill icon or logo (use iconName if using react-icons instead)",
      options: {
        hotspot: false,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "iconName",
      title: "Icon Name (react-icons)",
      type: "string",
      description: 'Icon from react-icons. Examples: FaReact, SiTypescript, BiLogoNodejs, FiDatabase, etc. See https://react-icons.github.io/react-icons/',
    }),
    defineField({
      name: "yearsOfExperience",
      title: "Years of Experience",
      type: "number",
      validation: (rule) => rule.min(0).max(50),
      description: "How many years have you been using this skill?",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Brief description of your experience with this skill",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which to display skills within the category",
    }),
  ],
  preview: {
    select: {
      title: "name",
      category: "category",
      proficiency: "proficiency",
    },
    prepare(selection) {
      const { title, category, proficiency } = selection;
      return {
        title: title,
        subtitle: `${category} • ${proficiency}`,
      };
    },
  },
};

export default skill;