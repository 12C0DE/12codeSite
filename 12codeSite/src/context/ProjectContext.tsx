import { useState } from "react";
import type { ReactNode } from "react";
import type { ProjectData } from "../types";
import { ProjectContext } from "./ProjectContextInstance";

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );

  return (
    <ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
