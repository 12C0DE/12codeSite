import { createContext } from "react";
import type { ProjectContextType } from "./ProjectTypes";

export const ProjectContext = createContext<ProjectContextType | undefined>(
  undefined,
);
