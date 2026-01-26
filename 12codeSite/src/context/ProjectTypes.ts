import type { ProjectData } from "../types/ProjectData";

export interface ProjectContextType {
  selectedProject: ProjectData | null;
  setSelectedProject: (project: ProjectData | null) => void;
}
