import { ImageWithFallback } from "./ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
}

export const ProjectCard = ({
  title,
  category,
  description,
  image,
  tags,
  index,
}: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-sm mb-6 aspect-[4/3] bg-zinc-900">
        <ImageWithFallback src={image} alt={title} />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute top-6 right-6 size-12 border border-white/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
          <ArrowUpRight className="size-6 text-white" />
        </div>
        {/* Project Number */}
        <div className="absolute bottom-6 left-6 text-white/50 text-6xl font-light">
          0{index + 1}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/50 uppercase tracking-[0.2em]">
            {category}
          </span>
          <div className="h-px bg-white/20 flex-1"></div>
        </div>
        <h3 className="text-3xl text-white">{title}</h3>
        <p className="text-white/60 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
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
