export const ProjectBadge = ({
  tag,
  label,
}: {
  tag?: string;
  label: string;
}) => {
  return (
    <span
      key={tag}
      className="px-4 py-1.5 border border-white/20 rounded-full text-sm text-white/70 hover:border-white/50 hover:transition-all"
    >
      {label}
    </span>
  );
};
