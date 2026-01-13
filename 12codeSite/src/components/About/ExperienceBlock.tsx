interface ExperienceProps {
  role: string;
  company: string;
  timeline: string;
}

export const ExperienceBlock = ({
  role,
  company,
  timeline,
}: ExperienceProps) => {
  return (
    <div className="border-l border-white/20 pl-6">
      <div className="flex flex-col gap-2 mb-2">
        <span className="text-xl text-white">{role}</span>
        <span className="text-sm text-white/40 uppercase tracking-wider">
          {company}
        </span>
      </div>
      <p className="text-sm text-white/50">{timeline}</p>
    </div>
  );
};
