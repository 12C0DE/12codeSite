export type ProjectImage = {
  key: string;
  caption?: string;
};

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  role: string[];
  team: string[];
  timeline: string;
  links: { label: string; url: string }[];
  mainImageKey: string;
  images: ProjectImage[];
  challenges: string;
  solution: string;
  impact: string;
}
