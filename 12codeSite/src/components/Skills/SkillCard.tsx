import { getIcon } from "../../utils";
import type { SkillBreakdownProps } from "../../types";

const grainTexture = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E`;

export const SkillCard = ({
  name,
  color,
  textColor,
  borderColor,
  icon,
  experience,
  desc,
  use,
  type,
  cardIndex,
}: SkillBreakdownProps) => {
  const sectionTitleClasses =
    "text-[8px] md:text-[10px] uppercase tracking-[0.15em] md:mb-1 font-medium text-[#56514d]";

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
          <div className="space-y-2">
            <div
              className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-medium leading-none"
              style={{
                color: textColor,
                opacity: 0.5,
              }}
            >
              {type}
            </div>
            <div
              className="h-0.5 w-3/4 md:w-full"
              style={{
                backgroundColor: textColor,
                opacity: 0.2,
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mb-2">
          <div
            className="w-18 h-18 lg:w-32 lg:h-32 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              color: color === "#FFFFFF" ? "#000" : "#fff",
              border: "#1f1f1f",
            }}
          >
            {getIcon(icon)}
          </div>
        </div>
        <div className="mb-auto mt-4 lg:mt-8 md:px-2 lg:px-4">
          <h3
            className="text-lg md:text-4xl leading-none mb-2 md:mb-4 tracking-light font-bold md:font-medium font-hero"
            style={{ color: textColor }}
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
          backgroundImage: `url("${grainTexture}")`,
          backgroundRepeat: "repeat",
          fontSmooth: "always",
          textRendering: "optimizeLegibility",
        }}
      >
        <div className="relative z-10 text-black">
          <div>
            <div
              id="headerSC"
              className="flex items-start justify-between mb-1 md:mb-4"
            >
              <div>
                <h3 className="text-sm md:text-lg mb-1 leading-tight tracking-tight font-bold">
                  {name}
                </h3>
                <p className="text-[6px] md:text-[8px] text-[#56514d] uppercase tracking-[0.15em]">
                  {type}
                </p>
              </div>
              <div className="text-[10px] md:text-[12px] font-mono tabular-nums text-[#56514d]">
                {String((cardIndex ?? 0) + 1).padStart(2, "0")}
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#8B7E9B] mb-2 md:mb-4" />
            <div id="details" className="space-y-3 md:space-y-6">
              <div>
                <h4 className={sectionTitleClasses}>Description</h4>
                <p className="text-[8px] md:text-[12px] leading-relaxed">
                  {desc}
                </p>
              </div>
              <div>
                <h4 className={sectionTitleClasses}>Experience</h4>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className="h-3 flex-1"
                      style={{
                        backgroundColor:
                          experience >= level ? textColor : borderColor,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h4 className={sectionTitleClasses}>Primary Use</h4>
                <p className="text-[8px] md:text-[12px]">{use}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
