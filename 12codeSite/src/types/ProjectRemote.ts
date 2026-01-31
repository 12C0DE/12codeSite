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

  mainImageKey: string; // <-- string key to S3 object
  images: { key: string; caption?: string }[];

  challenges: string;
  solution: string;
  impact: string;
};

export type ProjectResolved = Omit<ProjectRemote, "mainImageKey" | "images"> & {
  mainImageUrl: string;
  images: { url: string; caption?: string }[];
};
