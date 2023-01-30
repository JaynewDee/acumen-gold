import { Sun, Moon } from "../data/icons";
import "./styles.css";
import React from "react";
import { useSettingsContext } from "../../context/settings";

export const Controls = () => {
  const { useLightTheme, useDefaultTheme } = useSettingsContext();

  const useMoon = () => useDefaultTheme();
  const useSun = () => useLightTheme();
  return (
    <div className="theme-controls-box">
      <div className="moon" onClick={useMoon}>
        {Moon({})}
      </div>
      <div className="sun" onClick={useSun}>
        {Sun({})}
      </div>
    </div>
  );
};
