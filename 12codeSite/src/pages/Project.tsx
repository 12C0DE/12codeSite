import { useEffect } from "react";
import { useProject } from "../context/useProject";
import {
  ImageWithFallback,
  PageContainer,
  ProjectBadge,
  ProjectMeta,
} from "../components";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, ExternalLink, Users } from "lucide-react";

export const Project = () => {
  const { selectedProject } = useProject();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!selectedProject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white/60">No project selected</p>
      </div>
    );
  }

  return (
    <PageContainer>
      <div className="max-w-4xl px-4">
        <div className="space-y-4">
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold -ml-1 tracking-tight">
            {selectedProject.title}
          </h1>
          <div className="flex justify-between my-8 gap-16 md:gap-32">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Overview
            </h2>
            <div className="w-5/8 text-left">
              <p className="text-white/70 text-lg leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24 mt-24">
            <ProjectMeta title="My Role" content={selectedProject.role} />
            <ProjectMeta
              title="Team"
              content={selectedProject.team}
              icon={<Users className="size-3" />}
            />
            <ProjectMeta
              title="Timeline"
              content={selectedProject.timeline}
              icon={<Calendar className="size-3" />}
            />
            <ProjectMeta
              title="Links"
              content={
                <div className="space-y-2">
                  {selectedProject.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm md:text-base text-white/80 hover:text-white transition-colors group"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="size-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  ))}
                </div>
              }
            />
          </div>

          <div className="my-24">
            <div className="h-px bg-white/20 w-12 mb-8"></div>
            <div className="flex flex-wrap justify-between items-baseline">
              <h2 className="text-3xl md:text-4xl text-white mb-12 md:mb-16 tracking-tight">
                The Process
              </h2>
              <div className="flex flex-nowrap mb-8 md:mb-0 gap-2 ">
                {selectedProject.tags.map((tag) => (
                  <ProjectBadge key={tag} label={tag} />
                ))}
              </div>
            </div>
            <div className="space-y-16 md:space-y-24">
              {selectedProject?.images?.map((img, idx) => (
                <div
                  key={idx}
                  className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    id="imageContainer"
                    className={`${idx % 2 === 1 ? "md:order-2" : "md:order-1"}`}
                  >
                    <div className="relative overflow-hidden rounded-sm aspect-4/3 bg-zinc-900">
                      <ImageWithFallback
                        src={img.url}
                        alt={`${selectedProject.title}_${idx}`}
                      />
                    </div>
                  </div>

                  <div
                    className={`${idx % 2 === 1 ? "md:order-1" : "md:order-2"} flex flex-col justify-center`}
                  >
                    <div className="space-y-3 md:space-y-4">
                      <p className="text-sm md:text-base text-white/60 leading-relaxed">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate("/#projects")}
        className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors my-16 ml-4"
      >
        <div className="size-10 border border-white/30 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
          <ArrowLeft className="size-5" />
        </div>
        <span className="text-sm uppercase tracking-[0.2em]">
          Back to Projects
        </span>
      </button>
    </PageContainer>
  );
};
