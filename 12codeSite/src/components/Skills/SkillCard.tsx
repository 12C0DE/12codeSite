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
  close = () => {},
  isSelected,
  isMobile,
}: SkillBreakdownProps) => {
  return (
    <>
      <div
        className="absolute inset-0 rounded-xl p-4 shadow-xl flex flex-col justify-between overflow-hidden md:h-auto"
        style={{
          backgroundColor: color,
          border: "3px solid #000",
          backfaceVisibility: "hidden",
        }}
      >
        <div
          id="backgroundPattern"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)`,
          }}
        />
        <div id="content" className="relative z-10">
          <div className="flex items-center justify-center mb-2">
            <div
              className="w-18 h-18 lg:w-32 lg:h-32 rounded-full flex items-center justify-center text-4xl lg:text-6xl"
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
          {!isMobile && (
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
          )}
        </div>
        <div id="cardFooter" className="relative z-10">
          <h3
            className="text-xl lg:text-2xl mb-1"
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
      <div
        id="backofCard"
        className="absolute inset-0 rounded-xl p-3 shadow-xl flex flex-col justify-between lg:content-between overflow-hidden "
        style={{
          backgroundColor: "#1a1a1a",
          border: "2px solid rgba(255, 255, 255, 0.1)",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg) translateZ(0)",
          pointerEvents: isSelected ? "auto" : "none", // Add this
          WebkitFontSmoothing: "antialiased",
          fontSmooth: "always",
          textRendering: "optimizeLegibility",
        }}
      >
        <div className="relative z-10">
          <article className="mb-2">
            <div
              className="w-14 h-14 lg:w-20 lg:h-20 lg:mr-4 -ml-2 rounded-full flex items-center justify-center text-2xl lg:text-6xl float-left mr-1"
              style={{ backgroundColor: color }}
            >
              {getIcon(icon)}
            </div>
            <h3 className="invisible md: visible text-md lg:text-xl text-white mb-1 font-bold">
              {name}
            </h3>
            <p className="text-white/60 text-[10px] md:text-sm">{desc}</p>
          </article>
          <div className="space-y-3 lg:space-y-4">
            <div>
              <h4 className="text-white/40 text-[10px] md:text-sm uppercase tracking-wider mb-1 md:mb-2 lg:mt-4">
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
              <h4 className="text-white/40 text-[10px] md:text-sm uppercase tracking-wider mb-1 md:mb-2">
                Primary Use
              </h4>
              <p className="text-white/80 text-[10px] md:text-sm">{use}</p>
            </div>

            <div>
              <h4 className="text-white/40 text-[10px] md:text-sm uppercase tracking-wide mb-1 md:mb-2">
                Years Using
              </h4>
              <p className="text-white/80 text-sm">
                <b>{years}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
