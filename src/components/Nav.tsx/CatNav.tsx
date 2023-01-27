import React, { Dispatch, SetStateAction, useState } from "react";
import NavBtn from "./NavBtn";
import { CategoryNavProps } from "./types";
const categories = ["badges", "certificates", "certifications"];

const CatNav: React.FC<CategoryNavProps> = ({
  displayState,
  setDisplayState
}) => {
  return (
    <div className="nav-box">
      {categories.map((cat) => (
        <NavBtn
          key={cat}
          cat={cat}
          displayState={displayState}
          setDisplayState={setDisplayState}
        />
      ))}
    </div>
  );
};

export default CatNav;
