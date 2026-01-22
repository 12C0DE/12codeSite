import { useProject } from "../context/useProject";

export const Project = () => {
  const { selectedProject } = useProject();

  if (!selectedProject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white/60">No project selected</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full rounded-lg mb-8"
        />
        <div className="space-y-4">
          <span className="text-xs text-white/50 uppercase tracking-[0.2em]">
            {selectedProject.category}
          </span>
          <h1 className="text-4xl font-bold">{selectedProject.title}</h1>
          <p className="text-white/70 text-lg leading-relaxed">
            {selectedProject.description}
          </p>
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
          {selectedProject.url && (
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
    </div>
  );
};
