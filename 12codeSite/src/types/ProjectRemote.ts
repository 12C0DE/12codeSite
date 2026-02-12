import type { ProjectData } from "./ProjectData";

export type ProjectLink = { label: string; url: string };

export type ProjectRemote = {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  role: string[];
  team: string[];
  timeline: string;
  links: ProjectLink[];
  mainImageKey: string;
  images: { key?: string; url?: string; caption?: string }[];
  challenges: string;
  solution: string;
  impact: string;
  url?: string;
};

export type ProjectResolved = ProjectData & {
  mainImageUrl: string;
  images: { key: string; url: string; caption?: string }[];
};
