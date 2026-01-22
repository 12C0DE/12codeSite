export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

export interface ProjectContextType {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}
