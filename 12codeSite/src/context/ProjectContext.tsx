import { useState } from "react";
import type { ReactNode } from "react";
import type { ProjectResolved } from "../types";
import { ProjectContext } from "./ProjectContextInstance";

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectResolved | null>(null);

  return (
    <ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
