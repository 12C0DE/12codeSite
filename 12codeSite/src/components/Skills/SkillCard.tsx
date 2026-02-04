import { getIcon } from "../../utils";
import type { SkillBreakdownProps } from "../../types";

export const SkillCard = ({
  name,
  color,
  accentColor,
  textColor,
  borderColor,
  icon,
  experience,
  desc,
  use,
  type,
  years,
  // close = () => {},
  isSelected,
  isMobile,
  cardIndex,
}: SkillBreakdownProps) => {
  return (
    <>
      <div
        className="absolute inset-0 p-4 shadow-lg flex flex-col justify-between overflow-hidden md:h-auto"
        style={{
          backgroundColor: color,
          border: borderColor,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden", //Safari
          transform: "rotateY(0deg)",
        }}
      >
        <div className="flex items-start justify-between mb-auto">
          <div className="space-y-1.5">
            <div
              className="text-[10px] uppercase tracking-[0.2em] font-medium leading-none"
              style={{
                color: textColor,
                opacity: 0.5,
              }}
            >
              {type}
            </div>
            <div
              className="h-0.5 w-1/2 md:w-full"
              style={{
                backgroundColor: textColor,
                opacity: 0.2,
              }}
            />
          </div>
          {/* <div
            className="text-[10px] font-mono tabular-nums"
            style={{
              color: textColor,
              opacity: 0.4,
            }}
          >
            {String((cardIndex ?? 0) + 1).padStart(2, "0")}
          </div> */}
        </div>
        <div className="flex items-center justify-center mb-2">
          <div
            className="w-18 h-18 lg:w-24 lg:h-24 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              color: color === "#FFFFFF" ? "#000" : "#fff",
            }}
          >
            {getIcon(icon)}
          </div>
        </div>
        <div className="mb-auto mt-4 lg:mt-8 px-2 lg:px-4">
          <h3
            className="text-lg md:text-4xl leading-none mb-2 tracking-light font-hero"
            style={{ color: textColor, fontWeight: 500 }}
          >
            {name}
          </h3>
          <div
            className="h-0.5 w-full mb-3"
            style={{ backgroundColor: textColor, opacity: 0.15 }}
          />
        </div>
      </div>
      <div
        id="backofCard"
        className="absolute inset-0 rounded-xl p-3 shadow-xl flex flex-col justify-between lg:content-between overflow-hidden h-62 md:h-auto"
        style={{
          backgroundColor: "#1a1a1a",
          border: "2px solid rgba(255, 255, 255, 0.1)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden", //Safari
          transform: "rotateY(180deg) translateZ(0)",
          pointerEvents: isSelected ? "auto" : "none",
          WebkitFontSmoothing: "antialiased",
          fontSmooth: "always",
          textRendering: "optimizeLegibility",
        }}
      >
        <div className="relative z-10">
          <article className="mb-2">
            <div
              className="w-12 h-12 lg:w-20 lg:h-20 lg:mr-4 -ml-2 rounded-full flex items-center justify-center text-2xl lg:text-6xl float-left mr-1"
              style={{ backgroundColor: color }}
            >
              {getIcon(icon)}
            </div>
            <h3 className="text-sm lg:text-xl text-white mb-1 md:font-bold">
              {name}
            </h3>
            <p className="text-white/60 text-[8px] md:text-sm">{desc}</p>
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
