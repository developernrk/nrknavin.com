"use client";

import { SkillType } from "@/types";
import Image from "next/image";
import { getIconComponent } from "@/app/utils/icon-mapper";

interface SkillsByCategoryProps {
  skills: SkillType[];
}

const categoryConfig = {
  frontend: {
    title: "Frontend Development",
    icon: "🎨",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  backend: {
    title: "Backend Development",
    icon: "⚙️",
    color: "from-purple-500/10 to-pink-500/10",
  },
  mobile: {
    title: "Mobile Development",
    icon: "📱",
    color: "from-orange-500/10 to-red-500/10",
  },
  ai: {
    title: "AI & Machine Learning",
    icon: "🤖",
    color: "from-violet-500/10 to-fuchsia-500/10",
  },
  architecture: {
    title: "Architecture & Patterns",
    icon: "🏗️",
    color: "from-rose-500/10 to-orange-500/10",
  },
  tools: {
    title: "Tools & Platforms",
    icon: "🛠️",
    color: "from-yellow-500/10 to-amber-500/10",
  },
  databases: {
    title: "Databases",
    icon: "🗄️",
    color: "from-green-500/10 to-emerald-500/10",
  },
  devops: {
    title: "DevOps & Cloud",
    icon: "☁️",
    color: "from-indigo-500/10 to-blue-500/10",
  },
  other: {
    title: "Other Skills",
    icon: "✨",
    color: "from-slate-500/10 to-gray-500/10",
  },
};

export default function SkillsByCategory({ skills }: SkillsByCategoryProps) {
  // Group skills by category
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, SkillType[]>
  );

  // Sort skills within each category by order
  Object.keys(groupedSkills).forEach((category) => {
    groupedSkills[category].sort((a, b) => (a.order || 0) - (b.order || 0));
  });

  // Sort categories in a specific order
  const categoryOrder = [
    "frontend",
    "backend",
    "mobile",
    "ai",
    "architecture",
    "tools",
    "databases",
    "devops",
    "other",
  ];
  const sortedCategories = categoryOrder.filter((cat) => groupedSkills[cat]);

  return (
    <div className="space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-16">
      {sortedCategories.map((category) => {
        const config = categoryConfig[category as keyof typeof categoryConfig];
        const categorySkills = groupedSkills[category];

        return (
          <div key={category}>
            {/* Category Header */}
            <div className="space-y-3 xs:space-y-4 mb-6 xs:mb-8">
              <h3 className="text-heading-md flex items-center gap-2 xs:gap-3">
                <span className="text-2xl">{config.icon}</span>
                {config.title}
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-primary-color to-secondary-color rounded-full" />
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5">
              {categorySkills.map((skill) => (
                <div
                  key={skill._id}
                  className={`group relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br ${config.color} p-3 xs:p-4 sm:p-5 transition-all duration-300 hover:border-primary-color/50 dark:hover:border-primary-color/30 hover:shadow-card-light dark:hover:shadow-card-dark`}
                >
                  {/* Skill Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-2 xs:gap-3 mb-3">
                      {/* Icon */}
                      {skill.icon?.image ? (
                        <div className="relative w-10 h-10 flex-shrink-0 rounded-lg bg-white/50 dark:bg-white/10 p-2">
                          <Image
                            src={skill.icon.image}
                            alt={skill.icon.alt || skill.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : skill.iconName ? (
                        <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-to-br from-primary-color to-secondary-color flex items-center justify-center text-white text-lg">
                          {getIconComponent(skill.iconName)}
                        </div>
                      ) : (
                        <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-to-br from-primary-color to-secondary-color flex items-center justify-center text-white text-sm font-bold">
                          {skill.name.charAt(0).toUpperCase()}
                        </div>
                      )}

                      {/* Skill Name & Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-xs xs:text-sm sm:text-base text-zinc-900 dark:text-white truncate group-hover:text-primary-color transition-colors">
                          {skill.name}
                        </h4>
                        {skill.yearsOfExperience !== undefined && (
                          <p className="text-xs xs:text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                            {skill.yearsOfExperience} year{skill.yearsOfExperience !== 1 ? "s" : ""} exp
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Proficiency Badge */}
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/50 dark:bg-white/10 text-zinc-700 dark:text-zinc-200">
                        {getProficiencyLabel(skill.proficiency)}
                      </span>
                      {skill.proficiency === "expert" && (
                        <span className="text-lg">🌟</span>
                      )}
                    </div>

                    {/* Description */}
                    {skill.description && (
                      <p className="text-xs xs:text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 xs:mt-3 line-clamp-2 group-hover:line-clamp-3 transition-all">
                        {skill.description}
                      </p>
                    )}
                  </div>

                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-color/5 to-secondary-color/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function getProficiencyLabel(level: string): string {
  const labels = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert",
  };
  return labels[level as keyof typeof labels] || level;
}