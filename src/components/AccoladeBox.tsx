import React, { useState } from "react";
import { categorySwitch } from "./utils/switches";
import CatNav from "./Nav/CatNav";
import UploadBtn from "./Modals/UploadBtn";
import { SetState } from "./types";
import LoginBtn from "./Modals/LoginBtn";
import { useFocusLog } from "./utils/hooks";
import ModalSwitch from "./Modals/ModalSwitch";

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
              ? { width: "33%", transition: "width .33s" }
              : { width: "66%", transition: "width .47s" }
          }
        />

        <h3>{displayState.toUpperCase()}</h3>
        {categorySwitch(displayState)}

        <LoginBtn setModalState={setModalState} />
        <UploadBtn setModalState={setModalState} />
        <ModalSwitch modalState={modalState} setModalState={setModalState} />
        <hr />
      </div>
    </main>
  );
};
