import { Linkedin, Send } from "lucide-react";
import { GithubLogo } from "../../assets/icons/GithubLogo";
import { Tooltip } from "react-tooltip";
import { useActiveSection } from "../../hooks/useActiveSection";

export const ContactIconsGroup = () => {
  const activeSection = useActiveSection();

  // Hide when on the contact section
  if (activeSection === "contact") {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 fixed bottom-10 right-0 bg-black/10 backdrop-blur-sm p-2 rounded-full xl:right-4 xl:bg-transparent z-200">
      <a
        href="mailto:12codeHz@gmail.com"
        data-tooltip-id="emailTip"
        className="hover:text-red-300"
      >
        <Send className="size-6 xl:size-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/ruben-hernandez-7a7b5128a/"
        target="_blank"
        data-tooltip-id="linkedInTip"
        className="hover:text-[var(--linkedIn-color)] transition-colors"
      >
        <Linkedin size={32} strokeWidth={1.5} className="size-6 xl:size-8" />
      </a>
      <a
        href="https://github.com/12C0DE"
        className="hover:text-[var(--github-color)]"
        target="_blank"
        data-tooltip-id="ghTip"
      >
        <GithubLogo className="size-6 xl:size-8" />
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
