#!/usr/bin/env node

/**
 * Seed Skills Script for Sanity
 * Populates Sanity with predefined skills using react-icons
 * 
 * Usage:
 *   npm run seed:skills
 * 
 * Make sure to set these environment variables:
 *   - NEXT_PUBLIC_SANITY_PROJECT_ID
 *   - NEXT_PUBLIC_SANITY_DATASET
 *   - NEXT_PUBLIC_SANITY_ACCESS_TOKEN
 */

require('dotenv').config({ path: '.env.local' });

const { createClient } = require('@sanity/client');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-07-21';

if (!projectId || !dataset || !token) {
  console.error('❌ Missing Sanity credentials. Please check your .env.local file');
  console.error('Required: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, NEXT_PUBLIC_SANITY_ACCESS_TOKEN');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

// Sample skills data with react-icons
const skillsData = [
  // Frontend
  {
    name: 'React',
    category: 'frontend',
    proficiency: 'expert',
    iconName: 'FaReact',
    yearsOfExperience: 5,
    description: 'Building modern, interactive UIs with React and Next.js',
    order: 1,
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 'advanced',
    iconName: 'SiTypescript',
    yearsOfExperience: 4,
    description: 'Type-safe JavaScript for scalable applications',
    order: 2,
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    proficiency: 'expert',
    iconName: 'SiTailwindcss',
    yearsOfExperience: 4,
    description: 'Utility-first CSS for rapid UI development',
    order: 3,
  },
  {
    name: 'Next.js',
    category: 'frontend',
    proficiency: 'advanced',
    iconName: 'SiNextdotjs',
    yearsOfExperience: 3,
    description: 'Full-stack React framework with SSR and SSG',
    order: 4,
  },
  {
    name: 'HTML/CSS',
    category: 'frontend',
    proficiency: 'expert',
    iconName: 'FiCode',
    yearsOfExperience: 7,
    description: 'Semantic HTML and modern CSS techniques',
    order: 5,
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    proficiency: 'expert',
    iconName: 'SiJavascript',
    yearsOfExperience: 7,
    description: 'ES6+ and modern JavaScript patterns',
    order: 6,
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    proficiency: 'advanced',
    iconName: 'BiLogoNodejs',
    yearsOfExperience: 4,
    description: 'Server-side JavaScript runtime for scalable applications',
    order: 1,
  },
  {
    name: 'Express.js',
    category: 'backend',
    proficiency: 'advanced',
    iconName: 'SiExpress',
    yearsOfExperience: 3,
    description: 'Minimalist web framework for Node.js APIs',
    order: 2,
  },
  {
    name: 'Java',
    category: 'backend',
    proficiency: 'advanced',
    iconName: 'SiJava',
    yearsOfExperience: 4,
    description: 'Enterprise-grade object-oriented programming language',
    order: 3,
  },
  {
    name: 'Spring Boot',
    category: 'backend',
    proficiency: 'advanced',
    iconName: 'SiSpringboot',
    yearsOfExperience: 3,
    description: 'Rapid application development framework for Java',
    order: 4,
  },
  {
    name: 'REST APIs',
    category: 'backend',
    proficiency: 'advanced',
    iconName: 'BiNetworkChart',
    yearsOfExperience: 4,
    description: 'Building RESTful web services and integrations',
    order: 5,
  },
  {
    name: 'GraphQL',
    category: 'backend',
    proficiency: 'intermediate',
    iconName: 'SiGraphql',
    yearsOfExperience: 2,
    description: 'Query language for flexible API design',
    order: 6,
  },
  {
    name: 'Apache',
    category: 'backend',
    proficiency: 'intermediate',
    iconName: 'SiApache',
    yearsOfExperience: 2,
    description: 'Web server and HTTP framework',
    order: 7,
  },
  {
    name: 'RabbitMQ',
    category: 'backend',
    proficiency: 'intermediate',
    iconName: 'SiRabbitmq',
    yearsOfExperience: 2,
    description: 'Message broker for asynchronous communication',
    order: 8,
  },

  // Mobile
  {
    name: 'React Native',
    category: 'mobile',
    proficiency: 'intermediate',
    iconName: 'FaReact',
    yearsOfExperience: 2,
    description: 'Cross-platform mobile development',
    order: 1,
  },
  {
    name: 'Flutter',
    category: 'mobile',
    proficiency: 'beginner',
    iconName: 'SiFlutter',
    yearsOfExperience: 1,
    description: 'UI framework for iOS and Android',
    order: 2,
  },

  // AI & Machine Learning
  {
    name: 'AI & LLMs',
    category: 'ai',
    proficiency: 'intermediate',
    iconName: 'SiPython',
    yearsOfExperience: 2,
    description: 'Working with Large Language Models and AI systems',
    order: 1,
  },
  {
    name: 'Retrieval Augmented Generation (RAG)',
    category: 'ai',
    proficiency: 'intermediate',
    iconName: 'BiNetworkChart',
    yearsOfExperience: 1,
    description: 'Building RAG systems for knowledge-enhanced AI applications',
    order: 2,
  },
  {
    name: 'Agentic AI',
    category: 'ai',
    proficiency: 'beginner',
    iconName: 'SiPython',
    yearsOfExperience: 1,
    description: 'Autonomous agents with decision-making and planning capabilities',
    order: 3,
  },
  {
    name: 'Machine Learning',
    category: 'ai',
    proficiency: 'intermediate',
    iconName: 'SiPython',
    yearsOfExperience: 2,
    description: 'ML algorithms and data science implementations',
    order: 4,
  },

  // Architecture & Patterns
  {
    name: 'Microservices Architecture',
    category: 'architecture',
    proficiency: 'advanced',
    iconName: 'BiNetworkChart',
    yearsOfExperience: 3,
    description: 'Building scalable systems with microservices patterns',
    order: 1,
  },
  {
    name: 'System Design',
    category: 'architecture',
    proficiency: 'advanced',
    iconName: 'BiNetworkChart',
    yearsOfExperience: 4,
    description: 'Designing large-scale distributed systems',
    order: 2,
  },
  {
    name: 'API Architecture',
    category: 'architecture',
    proficiency: 'advanced',
    iconName: 'BiNetworkChart',
    yearsOfExperience: 4,
    description: 'RESTful and GraphQL API design patterns',
    order: 3,
  },
  {
    name: 'Database Design',
    category: 'architecture',
    proficiency: 'advanced',
    iconName: 'SiPostgresql',
    yearsOfExperience: 3,
    description: 'Schema design and database optimization strategies',
    order: 4,
  },
  {
    name: 'Event-Driven Architecture',
    category: 'architecture',
    proficiency: 'intermediate',
    iconName: 'SiRabbitmq',
    yearsOfExperience: 2,
    description: 'Building event-driven systems with message brokers',
    order: 5,
  },

  // Tools & Platforms
  {
    name: 'Git',
    category: 'tools',
    proficiency: 'advanced',
    iconName: 'FaGit',
    yearsOfExperience: 6,
    description: 'Version control and collaborative development',
    order: 1,
  },
  {
    name: 'GitHub',
    category: 'tools',
    proficiency: 'advanced',
    iconName: 'FaGithub',
    yearsOfExperience: 6,
    description: 'Repository hosting and collaboration platform',
    order: 2,
  },
  {
    name: 'Figma',
    category: 'tools',
    proficiency: 'intermediate',
    iconName: 'SiFigma',
    yearsOfExperience: 2,
    description: 'UI/UX design and prototyping',
    order: 3,
  },
  {
    name: 'VS Code',
    category: 'tools',
    proficiency: 'expert',
    iconName: 'SiVisualstudiocode',
    yearsOfExperience: 5,
    description: 'Code editor with powerful extensions',
    order: 4,
  },
  {
    name: 'Sanity CMS',
    category: 'tools',
    proficiency: 'advanced',
    iconName: 'SiSanity',
    yearsOfExperience: 2,
    description: 'Headless CMS for structured content',
    order: 5,
  },
  {
    name: 'Vercel',
    category: 'tools',
    proficiency: 'advanced',
    iconName: 'SiVercel',
    yearsOfExperience: 3,
    description: 'Next.js deployment and hosting platform',
    order: 6,
  },

  // Databases
  {
    name: 'PostgreSQL',
    category: 'databases',
    proficiency: 'advanced',
    iconName: 'SiPostgresql',
    yearsOfExperience: 3,
    description: 'Relational database with powerful features',
    order: 1,
  },
  {
    name: 'MongoDB',
    category: 'databases',
    proficiency: 'intermediate',
    iconName: 'SiMongodb',
    yearsOfExperience: 2,
    description: 'NoSQL document database',
    order: 2,
  },
  {
    name: 'Firebase',
    category: 'databases',
    proficiency: 'intermediate',
    iconName: 'SiFirebase',
    yearsOfExperience: 2,
    description: 'Backend-as-a-Service platform by Google',
    order: 3,
  },
  {
    name: 'Redis',
    category: 'databases',
    proficiency: 'intermediate',
    iconName: 'SiRedis',
    yearsOfExperience: 1,
    description: 'In-memory data structure store',
    order: 4,
  },

  // DevOps & Cloud
  {
    name: 'Docker',
    category: 'devops',
    proficiency: 'intermediate',
    iconName: 'SiDocker',
    yearsOfExperience: 2,
    description: 'Containerization for consistent environments',
    order: 1,
  },
  {
    name: 'Kubernetes',
    category: 'devops',
    proficiency: 'intermediate',
    iconName: 'SiKubernetes',
    yearsOfExperience: 2,
    description: 'Orchestration and management of containerized applications',
    order: 2,
  },
  {
    name: 'AWS',
    category: 'devops',
    proficiency: 'intermediate',
    iconName: 'SiAmazonaws',
    yearsOfExperience: 2,
    description: 'Cloud computing services and infrastructure',
    order: 3,
  },
  {
    name: 'Google Cloud Platform (GCP)',
    category: 'devops',
    proficiency: 'intermediate',
    iconName: 'SiGooglecloud',
    yearsOfExperience: 2,
    description: 'Google cloud services and infrastructure',
    order: 4,
  },
  {
    name: 'CI/CD',
    category: 'devops',
    proficiency: 'intermediate',
    iconName: 'BiNetworkChart',
    yearsOfExperience: 2,
    description: 'Continuous integration and deployment pipelines',
    order: 5,
  },
  {
    name: 'Linux',
    category: 'devops',
    proficiency: 'advanced',
    iconName: 'SiLinux',
    yearsOfExperience: 4,
    description: 'Server administration and command line',
    order: 6,
  },
  {
    name: 'Splunk',
    category: 'devops',
    proficiency: 'intermediate',
    iconName: 'SiSplunk',
    yearsOfExperience: 2,
    description: 'Log management, monitoring, and analytics platform',
    order: 7,
  },
];

async function seedSkills() {
  console.log('🌱 Seeding skills to Sanity...\n');

  try {
    // Check if skills already exist
    const existingSkills = await client.fetch('count(*[_type == "skill"])');
    
    if (existingSkills > 0) {
      console.log(`⚠️  Found ${existingSkills} existing skills.`);
      console.log('Would you like to:');
      console.log('1. Add new skills (keeping existing ones)');
      console.log('2. Delete all and start fresh');
      console.log('\nContinuing with option 1 (adding new skills)...\n');
    }

    // Create operations for each skill
    const operations = skillsData.map((skill) => ({
      create: skill,
    }));

    // Batch upload with error handling
    let createdCount = 0;
    const errors = [];

    for (const skill of skillsData) {
      try {
        const result = await client.create({
          _type: 'skill',
          ...skill,
        });
        console.log(`✅ Created: ${skill.name} (${skill.category})`);
        createdCount++;
      } catch (error) {
        const errorMsg = `❌ Failed to create ${skill.name}: ${error.message}`;
        console.log(errorMsg);
        errors.push(errorMsg);
      }
    }

    console.log(`\n✨ Seeding complete!`);
    console.log(`📊 Summary:`);
    console.log(`   • Successfully created: ${createdCount} skills`);
    console.log(`   • Failed: ${errors.length} skills`);

    if (createdCount > 0) {
      console.log(`\n📝 Next steps:`);
      console.log(`   1. Go to your Sanity Studio`);
      console.log(`   2. Open Profile document`);
      console.log(`   3. Add skills to the "Skills" field`);
      console.log(`   4. Publish the changes`);
    }

    process.exit(createdCount > 0 ? 0 : 1);
  } catch (error) {
    console.error('❌ Error seeding skills:', error.message);
    process.exit(1);
  }
}

seedSkills();