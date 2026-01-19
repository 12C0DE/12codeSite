import { useEffect } from "react";

const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;

export function useClarity() {
  useEffect(() => {
    if (!CLARITY_ID || import.meta.env.DEV) return;

    if (document.getElementById("clarity-script")) return;

    const script = document.createElement("script");
    script.id = "clarity-script";
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;

    script.onload = () => {
      // 🔑 THIS tells Clarity the page exists
      window.clarity?.("set", "page", window.location.pathname);
    };

    document.head.appendChild(script);
  }, []);
}
