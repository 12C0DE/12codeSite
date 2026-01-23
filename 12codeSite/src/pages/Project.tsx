import { useEffect } from "react";
import { useProject } from "../context/useProject";
import { ImageWithFallback, PageContainer } from "../components";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold">
            {selectedProject.title}
          </h1>
          <div className="flex justify-between my-8 gap-16 md:gap-32">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                Overview
              </h2>
            </div>
            <div className="w-5/8 text-left">
              <p className="text-white/70 text-lg leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>
          <div className="mb-24">
            <div className="h-px bg-white/20 w-12 mb-8"></div>
            <h2 className="text-3xl md:text-4xl text-white mb-12 md:mb-16 tracking-tight">
              The Process
            </h2>

            <div className="space-y-16 md:space-y-24">
              {selectedProject?.images?.map((img, idx) => (
                <div
                  key={idx}
                  className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`${idx % 2 === 1 ? "md:order-2" : "md:order-1"}`}
                  >
                    <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-zinc-900">
                      <ImageWithFallback
                        src={img.url}
                        alt={img.caption}
                        // className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Caption/Description */}
                  <div
                    className={`${idx % 2 === 1 ? "md:order-1" : "md:order-2"} flex flex-col justify-center`}
                  >
                    <div className="space-y-3 md:space-y-4">
                      <h3 className="text-xl md:text-2xl lg:text-3xl text-white leading-tight">
                        {img.caption}
                      </h3>
                      <div className="h-px bg-white/20 w-12"></div>
                      <p className="text-sm md:text-base text-white/60 leading-relaxed">
                        {/* Generate contextual description based on index */}
                        {idx === 0 &&
                          "Starting with user research and information architecture, we mapped out the core user flows and identified key pain points through interviews and competitive analysis."}
                        {idx === 1 &&
                          "Translating insights into high-fidelity designs, we explored multiple visual directions while ensuring consistency with established design patterns and accessibility standards."}
                        {idx === 2 &&
                          "Finalizing the design system with reusable components, comprehensive documentation, and interactive prototypes ready for development handoff and user testing."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            {selectedProject.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 border border-white/20 rounded-full text-sm text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
          {selectedProject?.url && (
            <div className="pt-6">
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-white/50 rounded text-white hover:bg-white/10 transition-colors"
              >
                Visit Project
              </a>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => navigate("/#projects")}
        className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors my-16 "
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
