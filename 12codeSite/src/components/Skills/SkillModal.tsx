import { motion, AnimatePresence } from "motion/react";
import { getIcon } from "../../utils";
import type { SkillBreakdownProps } from "../../types";

export const SkillModal = ({
  name,
  color,
  experience,
  use,
  years,
  desc,
  icon,
  close,
}: SkillBreakdownProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 max-w-md w-full"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ backgroundColor: color }}
          >
            {getIcon(icon)}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl text-white mb-1">{name}</h3>
            <p className="text-white/60 text-sm">{desc}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-white/40 text-xs uppercase tracking-wider mb-2">
              Experience Level
            </h4>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level, index) => (
                <div
                  key={level}
                  className="h-2 flex-1 rounded-full"
                  style={{
                    backgroundColor:
                      experience >= index + 1
                        ? color
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
            <p className="text-white/80 text-sm">{use}</p>
          </div>
          <div>
            <h4 className="text-white/40 text-xs uppercase tracking-wider mb-2">
              Years Using
            </h4>
            <p className="text-white/80 text-sm">{years}</p>
          </div>
        </div>
        <button
          onClick={close}
          className="mt-6 w-full py-3 rounded-lg text-white text-sm transition-colors"
          style={{
            backgroundColor: color,
            color: color === "#FFFFFF" ? "#000" : "#fff",
          }}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};
