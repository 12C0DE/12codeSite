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
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
  }, []);

  if (isMobile) {
    return (
      <div className="w-full py-12 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 max-w-xl mx-auto">
          {skills.map((skill, index) => {
            const isSelected = selectedCard === index;
            return (
              <motion.div
                key={skill.name}
                className="cursor-pointer"
                style={{
                  perspective: "1000px",
                  zIndex: isSelected ? 100 : index,
                }}
                initial={false}
                animate={{
                  scale: isSelected ? 1.5 : 1,
                  x: isSelected ? (index % 2 == 0 ? 50 : -25) : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                onClick={() => setSelectedCard(isSelected ? null : index)}
              >
                <motion.div
                  className="relative w-full h-fit aspect-[2/3]"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isSelected ? 180 : 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <SkillCard
                    close={() => setSelectedCard(null)}
                    isSelected={isSelected}
                    isMobile={true}
                    {...skill}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        {selectedCard === null && (
          <div className="text-center px-4 mt-8">
            <p className="text-white/40 text-sm">Tap to view details</p>
          </div>
        )}
      </div>
    );
  }
  // Desktop version
  return (
    <div className="relative w-full min-h-[700px] flex items-center justify-center py-8">
      <div
        id="fan"
        className="relative w-full max-w-6xl h-[500px] flex items-center justify-center"
      >
        {skills.map((skill, index) => {
          const angle = ((index - (totalCards - 1) / 2) / totalCards) * 100; // Spread fan angle
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
                x: isSelected ? 0 : angle * 7,
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
                <SkillCard
                  close={() => setSelectedCard(null)}
                  isSelected={isSelected}
                  isMobile={false}
                  {...skill}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
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
