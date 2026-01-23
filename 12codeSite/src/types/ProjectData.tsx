export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  detailedDescription: string;
  role: string;
  team: string[];
  timeline: string;
  links: { label: string; url: string }[];
  mainImage: string;
  images?: { url: string; caption: string }[];
  challenges: string;
  solution: string;
  impact: string;
  url?: string;
}
