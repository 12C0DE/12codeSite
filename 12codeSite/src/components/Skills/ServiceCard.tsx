import React, { useState } from "react";
import { Layout, GitMerge, Sparkles, Users } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
  effectType: string;
}

const getIcon = (icon: string): React.JSX.Element | null => {
  switch (icon) {
    case "Layout":
      return <Layout className="size-6" />;
    case "Code":
      return <GitMerge className="size-6" />;
    case "Sparkles":
      return <Sparkles className="size-6" />;
    case "Users":
      return <Users className="size-6" />;
    default:
      return null;
  }
};

const getCardEffect = (effectType: string): React.JSX.Element | null => {
  switch (effectType) {
    case "build-software":
      return (
        <div className="absolute inset-0 text-white/5 text-xs font-mono overflow-hidden leading-4">
          <div className="animate-scroll">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i}>
                {`{ export const design = ({ props }) => { return <Component {...props} /> }; } 01101001 `}
              </div>
            ))}
          </div>
        </div>
      );
    case "ui-design":
      return (
        <div className="absolute inset-0 flex flex-wrap gap-2 p-4 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded"
              style={{
                backgroundColor: `hsl(${i * 30}, 70%, 60%)`,
                animation: `fadeInScale 0.6s ease-out ${i * 0.05}s both`,
              }}
            />
          ))}
        </div>
      );
    case "ux-research":
      return (
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${(i * 23) % 100}%`,
                top: `${(i * 37) % 100}%`,
                animation: `pulse 4s ease-in-out ${i * 0.1}s infinite`,
              }}
            />
          ))}
        </div>
      );
    case "prototyping":
      return (
        <div className="absolute inset-0 flex flex-end flex-reverse overflow-hidden">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white/20 text-2xl"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
                right: `${10 + i * 10}%`,
                animation: `sparkle 4.5s ease-in-out ${i * 0.3}s infinite`,
              }}
            >
              ✦
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

export const ServiceCard = ({
  icon,
  title,
  desc,
  effectType,
}: ServiceCardProps) => {
  const [effectActive, setEffectActive] = useState(false);

  return (
    <div
      className="group p-8 border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden"
      onClick={() => setEffectActive(!effectActive)}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          effectActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        {getCardEffect(effectType)}
      </div>
      <div className="relative z-10">
        <div className="size-14 border border-white/30 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
          {getIcon(icon)}
        </div>
        <h3 className="text-2xl text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-white/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};
