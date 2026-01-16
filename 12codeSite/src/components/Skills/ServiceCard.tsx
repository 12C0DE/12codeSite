import type React from "react";
import { Layout, Palette, Sparkles, Users } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
}

const getIcon = (icon: string): React.JSX.Element | null => {
  switch (icon) {
    case "Layout":
        return <Layout className="size-6"/>
    case "Palette":
        return <Palette className="size-6" />
    case "Sparkles":
      return <Sparkles className="size-6"/>;
    case "Users":
      return <Users className="size-6"/>;
    default:
      return null;
  }
};

// TODO: onHover, add effects that associate with what the card is about
export const ServiceCard = ({icon, title, desc}: ServiceCardProps) => {
    return (
        <div className="group p-8 border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden">
      <div className="relative z-10">
        <div className="size-14 border border-white/30 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
          {getIcon(icon)}
        </div>
        <h3 className="text-2xl text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-white/60 leading-relaxed">{desc}</p>
      </div>
    </div>
    )
};