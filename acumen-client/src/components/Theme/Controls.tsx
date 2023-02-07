import { Sun, Moon } from "../data/icons";
import { useSettingsContext } from "../../context/settings";
import "./styles.css";

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
