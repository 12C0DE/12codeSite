import type React from "react";

interface ProjectMetaProps {
  title: string;
  content: string | string[] | React.ReactNode;
  icon?: React.ReactNode;
}

export const ProjectMeta = ({
  title,
  content,
  icon,
}: ProjectMetaProps): React.JSX.Element => {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-[0.3em] mb-3">
        {icon}
        <span>{title}</span>
      </div>
      <div className="text-md md:text-lg text-white">
        {Array.isArray(content) ? (
            <div className="whitespace-pre-line">{content.join("\n")}</div>
        ) : (
            content
        )}
      </div>
    </div>
  );
};
