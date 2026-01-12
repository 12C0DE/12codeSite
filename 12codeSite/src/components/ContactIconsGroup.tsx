import { Github, Linkedin, Send } from "lucide-react";
import { Tooltip } from "react-tooltip";

// TODO: Add Hover effects to icons
export const ContaactIconsGroup = () => {
  return (
    <div className="flex flex-col gap-4 fixed bottom-8 right-4">
      <a href="mailto:12codeHz@gmail.com">
        <Send size={32} data-tooltip-id="emailTip" />
      </a>
      <a href="https://github.com/12C0DE" target="_blank">
        <Github size={32} data-tooltip-id="ghTip" />
      </a>
      <a
        href="https://www.linkedin.com/in/ruben-hernandez-7a7b5128a/"
        target="_blank"
      >
        <Linkedin size={32} strokeWidth={1.5} data-tooltip-id="linkedInTip" />
      </a>
      <Tooltip
        id="emailTip"
        place="left"
        content="mailto: 12codeHz@gmail.com"
      />
      <Tooltip id="ghTip" place="left" content="View GitHub Profile" />
      <Tooltip id="linkedInTip" place="left" content="View LinkedIn Profile" />
    </div>
  );
};
