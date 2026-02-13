import { useEffect, useState } from "react";
import type { ProjectResolved } from "../../types";
import { getProjects } from "../../data/projects";
import { Heading, PageTitle, ProjectCard, Spinner } from "../index";

export const Projects = () => {
  const [projects, setProjects] = useState<ProjectResolved[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch((err) =>
        setError(
          err instanceof Error ? err.message : "Failed to load projects",
        ),
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section id="projects" className="px-4 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <PageTitle title="Selected Work" />
          <Heading text="Featured Projects" />
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          {error ? (
            <div className="text-red-500">Error: {error}</div>
          ) : (
            projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
