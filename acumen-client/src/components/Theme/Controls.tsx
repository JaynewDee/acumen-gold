import { Sun, Moon } from "../data/icons";
import { useSettingsContext } from "../../context/settings";
import "./styles.css";

export const Controls = ({
  modalState,
  displayState
}: {
  modalState: string;
  displayState: string;
}) => {
  const { useLightTheme, useDefaultTheme } = useSettingsContext();

  const useMoon = () => useDefaultTheme();
  const useSun = () => useLightTheme();

  return (
    <div
      className={
        modalState === "settings" ? "theme-settings-box" : "theme-controls-box"
      }
      style={modalState !== "settings" ? { display: "none" } : {}}
    >
      <div
        className={displayState === "dark" ? "dark moon" : "moon"}
        onClick={useMoon}
      >
        {Moon({})}
      </div>
      <div
        className={displayState === "light" ? "light sun" : "sun"}
        onClick={useSun}
      >
        {Sun({})}
      </div>
    </div>
  );
};
