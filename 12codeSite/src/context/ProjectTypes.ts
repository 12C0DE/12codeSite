// import type { ProjectData } from "../types/ProjectData";
import type { ProjectResolved } from "../types";

export interface ProjectContextType {
  selectedProject: ProjectResolved | null;
  setSelectedProject: (project: ProjectResolved | null) => void;
}
