export const ProjectBadge = ({
  key,
  label,
}: {
  key?: string;
  label: string;
}) => {
  return (
    <span
      key={key}
      className="px-4 py-1.5 border border-white/20 rounded-full text-sm text-white/70"
    >
      {label}
    </span>
  );
};
