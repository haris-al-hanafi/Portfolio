import { ReactNode } from 'react';

export type LinkItem = {
  title: string;
  icon: ReactNode | string;
  href: string;
  bgColor: string; // Background color for the link item
};