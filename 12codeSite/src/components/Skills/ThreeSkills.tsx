import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SkillCard, SkillModal } from "./index";
import { skills } from "../../assets/skills";

interface SkillBreakdownProps {
  name: string;
  color: string;
  experience: number;
  use: string;
  years: number;
  desc: string;
  icon: string;
}

export const ThreeSkills = ({}) => {
  const [selectedCard, setSelectedCard] = useState<SkillBreakdownProps | null>(
    null
  );
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const totalCards = skills.length;

  return (
    <div className="relative w-full min-h-[700px] flex items-center justify-center py-16">
      <div
        id="fan"
        className="relative w-full max-w-6xl h-[500px] flex items-center justify-center"
      >
        {skills.map((skill, index) => {
          const angle = ((index - (totalCards - 1) / 2) / totalCards) * 60; // Spread angle
          const isHovered = hoveredCard === index;

          return (
            <motion.div
              key={skill.name}
              className="absolute cursor-pointer"
              style={{
                zIndex: selectedCard ? 100 : isHovered ? 50 : index,
              }}
              initial={false}
              animate={{
                rotate: selectedCard ? 0 : angle,
                y: selectedCard ? -50 : 0,
                scale: selectedCard ? 1.15 : isHovered ? 1.05 : 1,
                x: selectedCard ? 0 : angle * 8,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedCard(selectedCard ? null : skill)}
            >
              <div
                className="w-64 h-96 rounded-2xl p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden"
                style={{
                  backgroundColor: skill.color,
                  border: `2px solid ${
                    skill.color === "#FFFFFF" ? "#333" : "transparent"
                  }`,
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
                {isHovered && !selectedCard && (
                  <motion.div
                    className="absolute inset-0 border-4 rounded-2xl pointer-events-none"
                    style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/*  MODAL */}
      <AnimatePresence>
        {selectedCard !== null && (
          <SkillModal close={() => setSelectedCard(null)} {...selectedCard} />
        )}
      </AnimatePresence>
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
