import { ImageWithFallback, ProjectBadge } from "./index";
import { ArrowDown, ExternalLink } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
import { useProject } from "../../context/useProject";
// import type { ProjectData } from "../../types/ProjectData";
import type { ProjectResolved } from "../../types/ProjectRemote";

export const ProjectCard = (props: ProjectResolved) => {
  const navigate = useNavigate();
  const { setSelectedProject } = useProject();

  const handleViewProject = () => {
    setSelectedProject(props);
    navigate("/project");
  };

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-sm mb-6 aspect-4/3 bg-zinc-900">
        <ImageWithFallback src={props.mainImageUrl} alt={props.title} />
        <div className="absolute bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        <div
          className="absolute top-6 right-6 size-12 border border-white/50 rounded-full flex items-center justify-center -rotate-90 md:rotate-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 group-hover:-rotate-90 hover:cursor-pointer"
          onClick={handleViewProject}
          data-tooltip-id={`project-view-${props.title}-tip`}
        >
          <ArrowDown className="size-6 text-white" />
        </div>
        <Tooltip
          id={`project-view-${props.title}-tip`}
          place="left"
          content="See more"
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/50 uppercase tracking-[0.2em]">
            {props.category}
          </span>
          <div className="h-px bg-white/20 flex-1"></div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-3xl text-white">{props.title}</h3>
          {props.links[0].label === "Live Site" && (
            <>
              <a
                href={props.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                data-tooltip-id={`project-${props.title}-tip`}
              >
                <ExternalLink size={24} className=" hover:text-blue-400" />
              </a>
              <Tooltip
                id={`project-${props.title}-tip`}
                place="top"
                content={props.url}
              />
            </>
          )}
        </div>
        <p className="text-white/60 leading-relaxed">{props.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {props.tags.map((tag: string) => (
            <ProjectBadge key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};
