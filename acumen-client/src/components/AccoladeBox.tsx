import React, { useState } from "react";
import { categorySwitch } from "./utils/switches";
import CatNav from "./Nav/CatNav";
import { SetState } from "./types";
import { useFocusLog } from "./utils/hooks";
import ModalSwitch from "./Modals/ModalSwitch";
import BtnBox from "./Modals/Buttons/BtnBox";
import TopHr from "./misc/TopHr";
import Hint from "./misc/Hint";
import { useSettingsContext } from "../context/settings";
import { Controls as ThemeControls } from "./Theme/Controls";
interface DisplayProps {
  displayState: string;
  setDisplayState: SetState<String>;
}

export const AccoladeBox: React.FC<DisplayProps> = ({
  displayState,
  setDisplayState
}) => {
  const [modalState, setModalState] = useState("");

  const { settings } = useSettingsContext();

  useFocusLog();
  //  box-shadow: inset 0px 0px 2px 1px rgba(190, 190, 190, 0.783);

  const themeState = {
    backgroundColor: settings.theme.primaryColor,
    color: settings.theme.secondaryColor,
    boxShadow: `inset 0px 0px 1px 2px ${settings.theme.secondaryColor}`
  };
  const hintStyles = {
    color: settings.theme.hint.textColor,
    position: "absolute",
    top: "1rem",
    left: "2rem",
    width: "6rem"
  };
  return (
    <main className="content-box" style={themeState}>
      <div className="accolade-box">
        <ThemeControls
          modalState={modalState}
          displayState={settings.theme.type}
        />
        <CatNav displayState={displayState} setDisplayState={setDisplayState} />
        <TopHr displayState={displayState} />

        <h3>{displayState.toUpperCase()}</h3>
        {categorySwitch(displayState)}

        <Hint display={modalState} type={"main"} styles={hintStyles} />
        <BtnBox setModalState={setModalState} />
        <ModalSwitch modalState={modalState} setModalState={setModalState} />
      </div>
    </main>
  );
};
