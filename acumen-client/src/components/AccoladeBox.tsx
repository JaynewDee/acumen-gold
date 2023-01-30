import React, { useState } from "react";
import { categorySwitch } from "./utils/switches";
import CatNav from "./Nav/CatNav";
import { SetState } from "./types";
import { useFocusLog } from "./utils/hooks";
import ModalSwitch from "./Modals/ModalSwitch";
import BtnBox from "./Modals/Buttons/BtnBox";
import TopHr from "./Nav/TopHr";
import Hint from "./misc/Hint";

interface DisplayProps {
  displayState: String;
  setDisplayState: SetState<String>;
}

export const AccoladeBox: React.FC<DisplayProps> = ({
  displayState,
  setDisplayState
}) => {
  const [modalState, setModalState] = useState("");

  useFocusLog();

  return (
    <main className="content-box">
      <div className="accolade-box">
        <CatNav displayState={displayState} setDisplayState={setDisplayState} />
        <TopHr displayState={displayState} />

        <h3>{displayState.toUpperCase()}</h3>
        {categorySwitch(displayState)}

        <BtnBox setModalState={setModalState} />
        <ModalSwitch modalState={modalState} setModalState={setModalState} />
        <Hint display={displayState} />
      </div>
    </main>
  );
};
