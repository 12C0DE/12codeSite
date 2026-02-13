import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <h1 className="text-2xl font-medium">404 - Page Not Found</h1>
      </div>
      <div>
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors my-16 ml-4"
        >
          <div className="size-10 border border-white/30 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
            <ArrowLeft className="size-5" />
          </div>
          <span className="text-sm uppercase tracking-[0.2em]">Home</span>
        </button>
      </div>
    </div>
  );
};
