import { useEffect } from "react";

export const useFocusLog = () => {
  const logFocused = (e) =>
    console.log(`element ${e.target.textContent} is focused`);

  useEffect(() => {
    document.addEventListener("focus", logFocused, true);
    return () => {
      document.removeEventListener("focus", logFocused, true);
    };
  }, []);
};
