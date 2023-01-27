import React, { Dispatch, SetStateAction } from "react";
import { categorySwitch } from "./utils/switches";
import CatNav from "./Nav.tsx/CatNav";
import Upload from "./Upload";

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
  return (
    <main className="accolade-box">
      <CatNav displayState={displayState} setDisplayState={setDisplayState} />
      <Upload />
      {categorySwitch(displayState)}
    </main>
  );
};
