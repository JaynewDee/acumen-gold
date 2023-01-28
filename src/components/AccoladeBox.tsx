import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { categorySwitch } from "./utils/switches";
import CatNav from "./Nav/CatNav";
import UploadModal from "./Modals/UploadModal";
import UploadBtn from "./Modals/UploadBtn";
import { SetState } from "./types";
import LoginBtn from "./Modals/LoginBtn";
import LoginModal from "./Modals/LoginModal";
import { useFocusHandler, useFocusLog } from "./utils/hooks";
import { KeyHandler } from "./utils/events";

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
        <hr />

        {categorySwitch(displayState)}
        <LoginBtn setModalState={setModalState} />
        <UploadBtn setModalState={setModalState} />
        <LoginModal modalState={modalState} setModalState={setModalState} />
        <UploadModal modalState={modalState} setModalState={setModalState} />
        <hr style={displayState === "" ? { width: "33%" } : { width: "66%" }} />
      </div>
    </main>
  );
};
