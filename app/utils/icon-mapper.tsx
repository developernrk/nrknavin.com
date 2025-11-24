/**
 * Icon Mapper Utility
 * Maps icon names to react-icons components
 * 
 * Usage:
 *   getIconComponent('FaReact') returns React.ReactNode with React icon
 */

import React from 'react';

// Import all the icons we use
import {
  FaReact,
  FaGit,
  FaGithub,
  FaNode as FaNodeOld,
} from 'react-icons/fa';

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiFlutter,
  SiFigma,
  SiVisualstudiocode,
  SiSanity,
  SiVercel,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiDocker,
  SiAmazonaws,
  SiLinux,
  SiJavascript,
  SiSpringboot,
  SiGooglecloud,
  SiKubernetes,
  SiPython,
  SiApache,
  SiSplunk,
  SiGit,
  SiRabbitmq,
} from 'react-icons/si';

import {
  BiLogoNodejs,
  BiNetworkChart,
} from 'react-icons/bi';

import {
  FiCode,
  FiDatabase,
} from 'react-icons/fi';

// Icon map: maps icon names to components
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  // FontAwesome Icons
  FaReact,
  FaGit,
  FaGithub,
  
  // Simple Icons
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiFlutter,
  SiFigma,
  SiVisualstudiocode,
  SiSanity,
  SiVercel,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiDocker,
  SiAmazonaws,
  SiLinux,
  SiJavascript,
  SiSpringboot,
  SiGooglecloud,
  SiKubernetes,
  SiPython,
  SiApache,
  SiSplunk,
  SiGit,
  SiRabbitmq,
  
  // Bootstrap Icons
  BiLogoNodejs,
  BiNetworkChart,
  
  // Feather Icons
  FiCode,
  FiDatabase,
};

/**
 * Get icon component by name
 * @param iconName - The icon name (e.g., 'FaReact', 'SiTypescript')
 * @returns React component or fallback
 */
export function getIconComponent(
  iconName: string
): React.ReactNode {
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    console.warn(`Icon not found: ${iconName}. Using fallback.`);
    return <DefaultIcon />;
  }

  return <IconComponent className="w-full h-full" />;
}

/**
 * Fallback icon component
 */
function DefaultIcon() {
  return (
    <svg
      className="w-full h-full"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
      <path
        fillRule="evenodd"
        d="M4 5a2 2 0 012-2 1 1 0 000 2H6a6 6 0 100 12H5a1 1 0 100 2 2 2 0 002-2v-1a7 7 0 100-14 1 1 0 000 2h1a2 2 0 00-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/**
 * List of all available icons (for reference)
 */
export const availableIcons = Object.keys(iconMap);