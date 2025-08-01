import { LinkItem } from '@/Types/types';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
  IconTerminal2,
} from '@tabler/icons-react';

export const socialMedialinks: LinkItem[] = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
    bgColor: "#F3F4F6", // light neutral gray
  },
  {
    title: "Projects",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/projects",
    bgColor: "#EDEEF0", // subtle background tone
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/mohammad-haris-385828238",
    bgColor: "#E6F0F8", // LinkedIn light blue
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
    bgColor: "#E8F5FD", // Twitter light sky blue
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/haris-al-hanafi",
    bgColor: "#F6F8FA", // GitHub light gray
  },
];


export const iconsgrp1 = [
  { icon: '/images/aws-svgrepo-com.svg', label: 'AWS', description: 'Cloud computing services by Amazon', color: '#FF9900' },
  { icon: '/images/git-svgrepo-com.svg', label: 'Git', description: 'Version control system for tracking code changes', color: '#F05032' },
  { icon: '/images/github-142-svgrepo-com.svg', label: 'GitHub', description: 'Platform for hosting and collaborating on code', color: '#181717' },
  { icon: '/images/javascript-svgrepo-com.svg', label: 'JavaScript', description: 'Programming language for web development', color: '#F7DF1E' },
  { icon: '/images/linux-svgrepo-com.svg', label: 'Linux', description: 'Open-source operating system used for servers and systems', color: '#FCC624' },
  { icon: '/images/mongo-svgrepo-com.svg', label: 'MongoDB', description: 'NoSQL database for high-volume data storage', color: '#47A248' },
  { icon: '/images/mysql-svgrepo-com.svg', label: 'MySQL', description: 'Relational database management system', color: '#4479A1' },
];

export const iconsgrp2 = [
  { icon: '/images/next-js-svgrepo-com.svg', label: 'Next.js', description: 'React framework for server-rendered applications', color: '#000000' },
  { icon: '/images/node-js-svgrepo-com.svg', label: 'Node.js', description: "JavaScript runtime built on Chrome's V8 engine", color: '#339933' },
  { icon: '/images/prisma-svgrepo-com.svg', label: 'Prisma', description: 'Next-generation ORM for Node.js and TypeScript', color: '#2D3748' },
  { icon: '/images/python-svgrepo-com.svg', label: 'Python', description: 'Versatile programming language known for simplicity', color: '#3776AB' },
  { icon: '/images/react-javascript-js-framework-facebook-svgrepo-com.svg', label: 'React', description: 'JavaScript library for building UIs', color: '#61DAFB' },
  { icon: '/images/typescript-svgrepo-com.svg', label: 'TypeScript', description: 'Statically typed superset of JavaScript', color: '#3178C6' },
];