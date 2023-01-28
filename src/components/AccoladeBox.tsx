import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { categorySwitch } from "./utils/switches";
import CatNav from "./Nav/CatNav";
import UploadModal from "./Modals/UploadModal";
import UploadBtn from "./Modals/UploadBtn";
import { SetState } from "./types";
import LoginBtn from "./Modals/LoginBtn";
import LoginModal from "./Modals/LoginModal";
import { useFocusLog } from "./utils/hooks";

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
              : { width: "66%", transition: "width .33s" }
          }
        />
        <h3>{displayState.toUpperCase()}</h3>

        {categorySwitch(displayState)}
        <LoginBtn setModalState={setModalState} />
        <UploadBtn setModalState={setModalState} />
        <LoginModal modalState={modalState} setModalState={setModalState} />
        <UploadModal modalState={modalState} setModalState={setModalState} />
        <hr />
      </div>
    </main>
  );
};
