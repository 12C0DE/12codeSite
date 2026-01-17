import { FaReact } from "react-icons/fa";

export const getIcon = (icon: string): React.JSX.Element | null => {
  switch (icon) {
    case "react":
      return <FaReact className="size-[56px] p-1 md:size-[80px]" />;
    default:
      return null;
  }
};
