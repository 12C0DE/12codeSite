import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SkillCard } from "./index";
import { skills } from "../../assets/skills";

export const ThreeSkills = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const totalCards = skills.length;
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile: Horizontal scrolling layout
  if (isMobile) {
    return (
      <div className="relative w-full py-16">
        <div className="overflow-x-auto pb-8">
          <div className="flex gap-4 px-4">
            {skills.map((skill, index) => {
              const isSelected = selectedCard === index;

              return (
                <motion.div
                  key={skill.name}
                  className="cursor-pointer flex-shrink-0"
                  style={{
                    perspective: "1000px",
                  }}
                  initial={false}
                  animate={{
                    scale: isSelected ? 1.05 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={() => setSelectedCard(isSelected ? null : index)}
                >
                  <motion.div
                    className="relative w-56 h-80 sm:w-64 sm:h-96"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{ rotateY: isSelected ? 180 : 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Front of Card */}
                    <div
                      className="absolute inset-0 rounded-2xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden"
                      style={{
                        backgroundColor: skill.color,
                        border: `2px solid ${skill.color === "#FFFFFF" ? "#333" : "transparent"}`,
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
                            className="w-24 h-24 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-5xl sm:text-4xl"
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.2)",
                              color:
                                skill.color === "#FFFFFF" ? "#000" : "#fff",
                            }}
                          >
                            {skill.icon}
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="flex gap-2 mb-4">
                          <div
                            className="w-10 h-10 sm:w-8 sm:h-8 rounded-lg"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                          />
                          <div
                            className="w-10 h-10 sm:w-8 sm:h-8 rounded-lg"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
                          />
                          <div
                            className="w-10 h-10 sm:w-8 sm:h-8 rounded-lg"
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
                          className="text-2xl sm:text-xl mb-1"
                          style={{
                            color: skill.color === "#FFFFFF" ? "#000" : "#fff",
                            fontWeight: 600,
                          }}
                        >
                          {skill.name}
                        </h3>
                        <p
                          className="text-sm"
                          style={{
                            color:
                              skill.color === "#FFFFFF"
                                ? "#666"
                                : "rgba(255,255,255,0.8)",
                          }}
                        >
                          Design Tool
                        </p>
                      </div>
                    </div>

                    {/* Back of Card - Details */}
                    <div
                      className="absolute inset-0 rounded-2xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden"
                      style={{
                        backgroundColor: "#1a1a1a",
                        border: "2px solid rgba(255, 255, 255, 0.1)",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg) translateZ(0)",
                        WebkitFontSmoothing: "antialiased",
                        fontSmooth: "always",
                        textRendering: "optimizeLegibility",
                      }}
                    >
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-6">
                          <div
                            className="w-14 h-14 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-lg flex-shrink-0"
                            style={{ backgroundColor: skill.color }}
                          >
                            {skill.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-base text-white mb-1">
                              {skill.name}
                            </h3>
                            <p className="text-white/60 text-xs">
                              {skill.desc}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
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
                                      level <= 4
                                        ? skill.color
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
                            <p className="text-white/80 text-xs sm:text-xs">
                              UI/UX Design, Prototyping, User Research
                            </p>
                          </div>

                          <div>
                            <h4 className="text-white/40 text-xs uppercase tracking-wider mb-2">
                              Years Using
                            </h4>
                            <p className="text-white/80 text-xs sm:text-xs">
                              3+ years
                            </p>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCard(null);
                        }}
                        className="relative z-10 w-full py-3 rounded-lg text-white text-sm transition-colors"
                        style={{
                          backgroundColor: skill.color,
                          color: skill.color === "#FFFFFF" ? "#000" : "#fff",
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Instruction text */}
        {selectedCard === null && (
          <div className="text-center px-4 mt-4">
            <p className="text-white/40 text-sm">
              Swipe to explore • Tap to view details
            </p>
          </div>
        )}
      </div>
    );
  }

  // Desktop: Fan layout
  return (
    <div className="relative w-full min-h-[700px] flex items-center justify-center py-16">
      {/* Card Fan */}
      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
        {skills.map((skill, index) => {
          // Calculate fan spread
          const angle = ((index - (totalCards - 1) / 2) / totalCards) * 60; // Spread angle
          const isHovered = hoveredCard === index;
          const isSelected = selectedCard === index;

          return (
            <motion.div
              key={skill.name}
              className="absolute cursor-pointer"
              style={{
                zIndex: isSelected ? 100 : isHovered ? 50 : index,
                perspective: "1000px",
              }}
              initial={false}
              animate={{
                rotate: isSelected ? 0 : angle,
                y: isSelected ? -50 : 0,
                scale: isSelected ? 1.3 : isHovered ? 1.05 : 1,
                x: isSelected ? 0 : angle * 8,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedCard(isSelected ? null : index)}
            >
              <motion.div
                className="relative w-64 h-96"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isSelected ? 180 : 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 w-64 h-96 rounded-2xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden"
                  style={{
                    backgroundColor: skill.color,
                    border: `2px solid ${skill.color === "#FFFFFF" ? "#333" : "transparent"}`,
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
                          color: skill.color === "#FFFFFF" ? "#000" : "#fff",
                        }}
                      >
                        {skill.icon}
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
                        color: skill.color === "#FFFFFF" ? "#000" : "#fff",
                        fontWeight: 600,
                      }}
                    >
                      {skill.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color:
                          skill.color === "#FFFFFF"
                            ? "#666"
                            : "rgba(255,255,255,0.8)",
                      }}
                    >
                      Design Tool
                    </p>
                  </div>

                  {/* Hover indicator */}
                  {isHovered && !isSelected && (
                    <motion.div
                      className="absolute inset-0 border-4 rounded-2xl pointer-events-none"
                      style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>

                {/* Back of Card - Details */}
                <div
                  className="absolute inset-0 w-64 h-96 rounded-2xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden"
                  style={{
                    backgroundColor: "#1a1a1a",
                    border: "2px solid rgba(255, 255, 255, 0.1)",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg) translateZ(0)",
                    WebkitFontSmoothing: "antialiased",
                    fontSmooth: "always",
                    textRendering: "optimizeLegibility",
                  }}
                >
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ backgroundColor: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl text-white mb-1">
                          {skill.name}
                        </h3>
                        <p className="text-white/60 text-xs">{skill.desc}</p>
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
                                  level <= 4
                                    ? skill.color
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
                      setSelectedCard(null);
                    }}
                    className="relative z-10 w-full py-3 rounded-lg text-white text-sm transition-colors"
                    style={{
                      backgroundColor: skill.color,
                      color: skill.color === "#FFFFFF" ? "#000" : "#fff",
                    }}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Instruction text */}
      {selectedCard === null && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="text-white/40 text-sm">
            {hoveredCard !== null
              ? "Click to view details"
              : "Hover over cards to explore"}
          </p>
        </div>
      )}
    </div>
  );
};
