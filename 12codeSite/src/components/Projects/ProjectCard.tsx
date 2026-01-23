import { ImageWithFallback } from "./index";
import { ArrowUpRight, Globe } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
import { useProject } from "../../context/useProject";
import type { ProjectData } from "../../types/ProjectData";

export const ProjectCard = (props: ProjectData) => {
  const navigate = useNavigate();
  const { setSelectedProject } = useProject();

  const handleViewProject = () => {
    setSelectedProject({
      id: props.id,
      title: props.title,
      category: props.category,
      description: props.description,
      mainImage: props.mainImage,
      tags: props.tags,
      detailedDescription: props.detailedDescription,
      role: props.role,
      team: props.team,
      timeline: props.timeline,
      links: props.links,
      images: props.images,
      challenges: props.challenges,
      solution: props.solution,
      impact: props.impact,
      url: props.url,
    });
    navigate("/project");
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-sm mb-6 aspect-4/3 bg-zinc-900">
        <ImageWithFallback src={props.mainImage} alt={props.title} />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        <div
          className="absolute top-6 right-6 size-12 border border-white/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45"
          onClick={handleViewProject}
          data-tooltip-id={`project-view-${props.title}-tip`}
        >
          <ArrowUpRight className="size-6 text-white" />
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
          {props.url && (
            <>
              <a
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                className=""
                data-tooltip-id={`project-${props.title}-tip`}
              >
                <Globe size={32} className=" hover:text-blue-400" />
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
            <span
              key={tag}
              className="px-4 py-1.5 border border-white/20 rounded-full text-sm text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
