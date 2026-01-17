import { getIcon } from "../../utils";

interface SkillBreakdownProps {
  name: string;
  color: string;
  experience: number;
  use: string;
  years: number;
  desc: string;
  icon: string;
  type: string;
}

// const getIcon = (icon: string): React.JSX.Element | null => {
//   switch (icon) {
//     case "react":
//       return <FaReact className="size-[64px] md:size-[80px]" />;
//     default:
//       return null;
//   }
// };

export const SkillCard = ({ name, color, icon, type }: SkillBreakdownProps) => {
  return (
    <div
      className="w-64 h-96 rounded-2xl p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden"
      style={{
        backgroundColor: color,
        border: `2px solid ${color === "#FFFFFF" ? "#333" : "transparent"}`,
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)`,
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6">
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center text-6xl"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              color: color === "#FFFFFF" ? "#000" : "#fff",
            }}
          >
            {getIcon(icon)}
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          <div
            className="w-12 h-12 rounded-lg"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          />
          <div
            className="w-12 h-12 rounded-lg"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
          />
          <div
            className="w-12 h-12 rounded-lg"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          />
        </div>
        <div className="space-y-1">
          <div
            className="h-2 w-32 rounded"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          />
          <div
            className="h-2 w-24 rounded"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
          />
          <div
            className="h-2 w-28 rounded"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          />
        </div>
      </div>
      <div className="relative z-10">
        <h3
          className="text-2xl mb-1"
          style={{
            color: color === "#FFFFFF" ? "#000" : "#fff",
            fontWeight: 600,
          }}
        >
          {name}
        </h3>
        <p
          className="text-sm"
          style={{
            color: color === "#FFFFFF" ? "#666" : "rgba(255,255,255,0.8)",
          }}
        >
          {type}
        </p>
      </div>
    </div>
  );
};
