import { useEffect } from "react";

const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;

export function useClarity() {
  useEffect(() => {
    // Disable in dev or if no ID exists
    if (!CLARITY_ID || import.meta.env.DEV) return;

    // Prevent double loading
    if (document.getElementById("clarity-script")) return;

    const script = document.createElement("script");
    script.id = "clarity-script";
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;

    document.head.appendChild(script);
  }, []);
}
