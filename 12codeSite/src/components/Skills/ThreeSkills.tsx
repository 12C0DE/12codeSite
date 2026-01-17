import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SkillCard, SkillModal } from "./index";
import { skills } from "../../assets/skills";
import type { SkillBreakdownProps } from "../../types";

export const ThreeSkills = () => {
  const [selectedCard, setSelectedCard] = useState<SkillBreakdownProps | null>(
    null,
  );
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const totalCards = skills.length;

  return (
    <div className="relative w-full min-h-[700px] flex items-center justify-center py-8">
      <div
        id="fan"
        className="relative w-full max-w-6xl h-[500px] flex items-center justify-center"
      >
        {skills.map((skill, index) => {
          const angle = ((index - (totalCards - 1) / 2) / totalCards) * 60; // Spread angle
          const isHovered = hoveredCard === index;
          const isSelected = selectedCard?.cardIndex === index;

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
              onClick={() => setSelectedCard(isSelected ? null : skill)}
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
                <SkillCard close={() => setSelectedCard(null)} {...skill} />
              </motion.div>
              {isHovered && !selectedCard && (
                <motion.div
                  className="absolute inset-0 border-4 rounded-2xl pointer-events-none"
                  style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
      {/*  MODAL */}
      {/* <AnimatePresence>
        {selectedCard !== null && (
          <SkillModal close={() => setSelectedCard(null)} {...selectedCard} />
        )}
      </AnimatePresence> */}
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
