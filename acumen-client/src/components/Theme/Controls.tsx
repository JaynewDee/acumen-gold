import { Sun, Moon } from "../data/icons";
import { useSettingsContext } from "../../context/settings";
import "./styles.css";

export const Controls = ({ modalState }: { modalState: string }) => {
  const { useLightTheme, useDefaultTheme } = useSettingsContext();

  const useMoon = () => useDefaultTheme();
  const useSun = () => useLightTheme();

  return (
    <div
      className={
        modalState === "settings" ? "theme-settings-box" : "theme-controls-box"
      }
    >
      <div className="moon" onClick={useMoon}>
        {Moon({})}
      </div>
      <div className="sun" onClick={useSun}>
        {Sun({})}
      </div>
    </div>
  );
};
