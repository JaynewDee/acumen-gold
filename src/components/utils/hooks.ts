import { createRef, useEffect, useRef, useState } from "react";

export const useNavState = (currentState) => {
  const [navState, setNavState] = useState(currentState);
};

export const useDisplayState = (state, action) => {
  const [displayState, setDisplayState] = useState();

  return [displayState, setDisplayState];
};

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

export const useFocusHandler = () => {
  const cycleFocus = (e) => {
    const next = e.target.nextElementSibling;
    if (next) {
      next.focus();
    }
  };
  useEffect(() => {
    document.addEventListener("focus", cycleFocus, true);
    return () => document.removeEventListener("focus", cycleFocus, true);
  }, []);
};
