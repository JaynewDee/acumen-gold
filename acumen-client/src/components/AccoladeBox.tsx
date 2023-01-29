import React, { useState } from "react";
import { categorySwitch } from "./utils/switches";
import CatNav from "./Nav/CatNav";
import { SetState } from "./types";
import { useFocusLog } from "./utils/hooks";
import ModalSwitch from "./Modals/ModalSwitch";
import BtnBox from "./Modals/Buttons/BtnBox";

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
        <hr
          style={
            displayState === ""
              ? {
                  width: "33%",
                  transition: "width .47s",
                  transitionDelay: ".47s",
                  marginTop: "0"
                }
              : {
                  width: "66%",
                  transition: "width .47s",
                  transitionDelay: ".55s"
                }
          }
        />

        <h3>{displayState.toUpperCase()}</h3>
        {categorySwitch(displayState)}
        <BtnBox setModalState={setModalState} />
        <ModalSwitch modalState={modalState} setModalState={setModalState} />
      </div>
    </main>
  );
};
