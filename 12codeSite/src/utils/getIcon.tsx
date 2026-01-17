import { FaAws, FaFigma, FaMicrosoft, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { Database } from "lucide-react";

export const getIcon = (icon: string): React.JSX.Element | null => {
  const classes = "size-[48px] p-1 md:size-[64px]";

  switch (icon) {
    case "aws":
      return <FaAws className={classes} />;
    case "database":
      return <Database className={classes} />;

    case "figma":
      return <FaFigma className={classes} />;
    case "js":
      return <IoLogoJavascript className={classes} />;
    case "dotnet":
      return <FaMicrosoft className={classes} />;
    case "react":
      return <FaReact className={classes} />;
    default:
      return null;
  }
};
