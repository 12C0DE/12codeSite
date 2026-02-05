import { getIcon } from "../../utils";
import type { SkillBreakdownProps } from "../../types";

const grainTexture = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E`;

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
          border: `1px solid ${borderColor}`,
          backfaceVisibility: "hidden",
          backgroundImage: `url("${grainTexture}")`,
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
        className="absolute inset-0 p-5 shadow-lg flex flex-col justify-between lg:content-between overflow-hidden"
        style={{
          backgroundColor: color,
          border: `1px solid ${borderColor}`,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden", //Safari
          transform: "rotateY(180deg) translateZ(0)",
          WebkitFontSmoothing: "antialiased",
          // pointerEvents: isSelected ? "auto" : "none",
          backgroundImage: `url("${grainTexture}")`,
          backgroundRepeat: 'repeat',
          fontSmooth: "always",
          textRendering: "optimizeLegibility",
        }}
      >
        <div className="relative z-10 text-black">
          <div>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-sm mb-1 leading-tight tracking-tight font-medium">
                            {name}
                          </h3>
                          <p className="text-[9px] uppercase tracking-[0.15em]">
                            {type}
                          </p>
                        </div>
                        <div className="text-[10px] font-mono tabular-nums">
                          {String((cardIndex ?? 0) + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="h-[1px] w-full bg-white/10 mb-4" />
                      <div id="details" className="space-y-3">
                        <div>
                          <h4 className=" text-[9px] uppercase tracking-[0.15em] mb-1.5 font-medium">
                            Description
                          </h4>
                          <p className="text-[11px] leading-relaxed">
                            {desc}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-[9px] uppercase tracking-[0.15em] mb-1.5 font-medium">
                            Proficiency
                          </h4>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((level) => (
                              <div
                                key={level}
                                className="h-1 flex-1"
                                style={{
                                  backgroundColor:
                                    level <= 4
                                      ? textColor
                                      : "rgba(255, 255, 255, 0.2)",
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-[9px] uppercase tracking-[0.15em] mb-1.5 font-medium">
                            Applications
                          </h4>
                          <p className="text-[11px] leading-relaxed">

                          </p>
                        </div>
                      </div>
                    </div>
        </div>
      </div>
    </>
  );
};
