import React, { useEffect, useRef } from "react";
import NavBtn from "./NavBtn";
import { CategoryNavProps } from "./types";
import "./styles.css";
import { KeyHandler } from "../utils/events";

const categories = ["badges", "certificates", "certifications", "skills"];

const CatNav: React.FC<CategoryNavProps> = ({
  displayState,
  setDisplayState
}) => {
  const focusRef = useRef(null);
  return (
    <div
      className="nav-box"
      style={
        displayState === ""
          ? { marginTop: "12rem", transition: "all 1s" }
          : { transition: "all 1s" }
      }
    >
      {categories.map((cat) => (
        <NavBtn
          // focusRef={focusRef}
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
