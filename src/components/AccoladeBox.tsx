import React, { Dispatch, SetStateAction, useState } from "react";
import { categorySwitch } from "./utils/switches";
import CatNav from "./Nav/CatNav";
import UploadModal from "./Upload/UploadModal";
import UploadBtn from "./Upload/UploadBtn";
import { SetState } from "./types";
import LoginBtn from "./Auth/LoginBtn";
// Pass array of accolades data down through and into
// a map of Accolade components
interface DisplayProps {
  displayState: String;
  setDisplayState: SetState<String>;
}

export const AccoladeBox: React.FC<DisplayProps> = ({
  displayState,
  setDisplayState
}) => {
  const [modalState, setModalState] = useState("");

  return (
    <main className="content-box">
      <div className="accolade-box">
        <CatNav displayState={displayState} setDisplayState={setDisplayState} />
        <hr />
        <UploadModal modalState={modalState} setModalState={setModalState} />
        {categorySwitch(displayState)}
        {/* Eventually we will want to display the appropriate button according to logged-in state.
            For development/testing we can display both.
        */}
        <LoginBtn setModalState={setModalState} />
        <UploadBtn setModalState={setModalState} />
      </div>
    </main>
  );
};
