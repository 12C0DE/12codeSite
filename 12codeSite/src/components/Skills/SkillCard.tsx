import { getIcon } from "../../utils";
import type { SkillBreakdownProps } from "../../types";

export const SkillCard = ({
  name,
  color,
  accentColor,
  icon,
  experience,
  desc,
  use,
  type,
  years,
  close = () => {}, // Add default here
  isSelected,
}: SkillBreakdownProps) => {
  return (
    <>
      <div
        className="absolute inset-0 w-64 h-96 rounded-2xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: color,
          border: `2px solid ${color === "#FFFFFF" ? "#333" : "transparent"}`,
          backfaceVisibility: "hidden",
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
            Design Tool
          </p>
        </div>
      </div>
      <div
        id="backofCard"
        className="absolute inset-0 w-64 h-96 rounded-2xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: "#1a1a1a",
          border: "2px solid rgba(255, 255, 255, 0.1)",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          pointerEvents: isSelected ? "auto" : "none", // Add this
        }}
      >
        <div className="relative z-10">
          <article className="mb-6">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 float-left mr-2"
              style={{ backgroundColor: color }}
            >
              {getIcon(icon)}
            </div>
            <h3 className="text-xl text-white mb-1">{name}</h3>
            <p className="text-white/60 text-xs">{desc}</p>
          </article>
          <div className="space-y-4">
            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-wider mb-2">
                Experience Level
              </h4>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className="h-2 flex-1 rounded-full"
                    style={{
                      backgroundColor:
                        experience >= level
                          ? (accentColor ?? color)
                          : "rgba(255, 255, 255, 0.1)",
                    }}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-wider mb-2">
                Primary Use
              </h4>
              <p className="text-white/80 text-sm">{use}</p>
            </div>

            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-wider mb-2">
                Years Using
              </h4>
              <p className="text-white/80 text-sm">
                <b>{years}</b>
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            close();
          }}
          className="relative z-10 w-full py-3 rounded-lg text-white text-sm transition-colors underline underline-offset-4 hover:text-blue-400"
          style={{
            color: color === "#FFFFFF" ? "#000" : "#fff",
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};
