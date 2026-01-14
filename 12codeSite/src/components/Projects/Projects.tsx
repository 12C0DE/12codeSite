import { ProjectCard } from "./ProjectCard";
import { projects } from "../../assets/projects/projects";
import { Heading, PageTitle } from "../Layout";

export const Projects = () => {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="max-w-6xl">
        <div className="mb-20">
          <PageTitle title="Selected Work" />
          <Heading text="Featured Projects" />
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
