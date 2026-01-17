import { getIcon } from "../../utils";
import type { SkillBreakdownProps } from "../../types";

export const SkillCard = ({
  name,
  color,
  icon,
  desc,
  type,
  close,
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
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon/Logo Area */}
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

          {/* Decorative elements */}
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

          {/* Text info */}
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

        {/* Card Footer */}
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

        {/* Hover indicator */}
        {/* {isHovered && !isSelected && (
                    <motion.div
                      className="absolute inset-0 border-4 rounded-2xl pointer-events-none"
                      style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )} */}
      </div>

      <div
        id="backofCard"
        className="absolute inset-0 w-64 h-96 rounded-2xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: "#1a1a1a",
          border: "2px solid rgba(255, 255, 255, 0.1)",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ backgroundColor: color }}
            >
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl text-white mb-1">{name}</h3>
              <p className="text-white/60 text-xs">{desc}</p>
            </div>
          </div>

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
                        level <= 4 ? color : "rgba(255, 255, 255, 0.1)",
                    }}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-wider mb-2">
                Primary Use
              </h4>
              <p className="text-white/80 text-sm">
                UI/UX Design, Prototyping, User Research
              </p>
            </div>

            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-wider mb-2">
                Years Using
              </h4>
              <p className="text-white/80 text-sm">3+ years</p>
            </div>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            close;
            // setSelectedCard(null);
          }}
          className="relative z-10 w-full py-3 rounded-lg text-white text-sm transition-colors"
          style={{
            backgroundColor: color,
            color: color === "#FFFFFF" ? "#000" : "#fff",
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};
