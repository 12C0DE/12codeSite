import { ExternalLink } from "lucide-react";
interface ExperienceProps {
  role: string;
  company: string;
  timeline: string;
  link?: string;
}

export const ExperienceBlock = ({
  role,
  company,
  timeline,
  link,
}: ExperienceProps) => {
  return (
    <div className="border-l border-white/20 pl-6">
      <div className="flex flex-col gap-2 mb-2">
        <span className="text-xl text-white">{role}</span>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:text-base text-white/40 uppercase hover:text-white transition-colors group"
          >
            <span className="text-sm">{company}</span>
            <ExternalLink className="size-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        ) : (
          <span className="text-sm text-white/40 uppercase tracking-wider">
            {company}
          </span>
        )}
      </div>
      <p className="text-sm text-white/50">{timeline}</p>
    </div>
  );
};
