import { useState } from "react";
import type { ReactNode } from "react";
import type { Project } from "./ProjectTypes";
import { ProjectContext } from "./ProjectContextInstance";

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
