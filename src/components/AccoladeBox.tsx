import React, { Dispatch, SetStateAction, useState } from "react";
import { categorySwitch } from "./utils/switches";
import CatNav from "./Nav/CatNav";
import UploadModal from "./modal/UploadModal";
import UploadBtn from "./modal/UploadBtn";

// Pass array of accolades data down through and into
// a map of Accolade components

interface DisplayProps {
  displayState: String;
  setDisplayState: Dispatch<SetStateAction<String>>;
}

export const AccoladeBox: React.FC<DisplayProps> = ({
  displayState,
  setDisplayState
}) => {
  const [modalState, setModalState] = useState(false);

  return (
    <main className="content-box">
      <div className="accolade-box">
        <CatNav displayState={displayState} setDisplayState={setDisplayState} />
        <hr />
        <UploadModal modalState={modalState} />
        {categorySwitch(displayState)}
        <UploadBtn setModalState={setModalState} />
      </div>
    </main>
  );
};
