import { ProjectCard } from "./ProjectCard";
import { projects } from "../assets/projects/projects";

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-6">
            <div className="h-px bg-white/20 w-16"></div>
            <span className="text-xs text-white/50 uppercase tracking-[0.3em]">
              Selected Work
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl text-white tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
