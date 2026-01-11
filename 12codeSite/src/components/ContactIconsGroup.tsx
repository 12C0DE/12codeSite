import { Github, Linkedin, Send } from "lucide-react";
import { Tooltip } from "react-tooltip";

// TODO: Add Hover effects to icons
export const ContaactIconsGroup = () => {
  return (
    <div className="flex flex-col gap-4 fixed bottom-8 right-4">
      <Tooltip
        id="tooltip"
        place="left"
        className="bg-white text-black px-2 py-1 rounded-md text-sm"
      />
      <Send size={32} data-tooltip-id="emailTip" />
      <Github size={32} />
      <Linkedin size={32} strokeWidth={1.5} />
      <Tooltip
        id="emailTip"
        place="left"
        content="mailto: 12codeHz@gmail.com"
      />
    </div>
  );
};
