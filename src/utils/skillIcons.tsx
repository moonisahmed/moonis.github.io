import { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiMui,
  SiWebpack,
  SiNodedotjs,
  SiApollographql,
  SiSocketdotio,
  SiPostgresql,
  SiPuppeteer,
  SiSelenium,
  SiJest,
  SiWebdriverio,
  SiJenkins,
  SiGithubcopilot,
  SiHtml5,
} from 'react-icons/si';
import {
  FaAws,
  FaInfinity,
  FaRobot,
  FaServer,
  FaWandMagicSparkles,
  FaArrowsRotate,
  FaUniversalAccess,
  FaFlag,
  FaCode,
  FaCloud,
  FaDatabase,
  FaToggleOn,
} from 'react-icons/fa6';

const skillIconMap: Record<string, IconType> = {
  // Frontend
  'React': SiReact,
  'TypeScript': SiTypescript,
  'Material UI': SiMui,
  'Webpack': SiWebpack,

  // Backend & APIs
  'Node.js': SiNodedotjs,
  'Apollo GraphQL': SiApollographql,
  'WebSockets': SiSocketdotio,
  'PostgreSQL': SiPostgresql,

  // Testing
  'Puppeteer': SiPuppeteer,
  'Selenium': SiSelenium,
  'Jest': SiJest,
  'WebdriverIO': SiWebdriverio,

  // Cloud & DevOps
  'AWS': FaAws,
  'Jenkins': SiJenkins,
  'CI/CD': FaInfinity,
  'S3': FaDatabase,
  'Lambda': FaCloud,
  'AWS Device Farm': FaAws,

  // AI Tools
  'Claude Code': FaRobot,
  'Copilot': SiGithubcopilot,
  'MCP Servers': FaServer,
  'Prompt Engineering': FaWandMagicSparkles,

  // Process
  'Agile': FaArrowsRotate,
  'WCAG': FaUniversalAccess,
  'LaunchDarkly': FaToggleOn,
  'Feature Flags': FaFlag,

  // Other
  'SharePoint': SiHtml5,
  'HTML/CSS/JS': SiHtml5,
};

export function getSkillIcon(skill: string): IconType | null {
  return skillIconMap[skill] || null;
}

export function SkillIcon({ skill, className }: { skill: string; className?: string }) {
  const Icon = getSkillIcon(skill);
  if (!Icon) {
    return <FaCode className={className} aria-hidden="true" />;
  }
  return <Icon className={className} aria-hidden="true" />;
}
