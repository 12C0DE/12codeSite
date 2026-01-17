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
              <SkillCard {...skill} />
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
