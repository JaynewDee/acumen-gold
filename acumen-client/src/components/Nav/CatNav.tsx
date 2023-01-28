import React from "react";
import NavBtn from "./NavBtn";
import { CategoryNavProps } from "./types";
import "./styles.css";

const categories = ["badges", "certificates", "certifications", "skills"];

const CatNav: React.FC<CategoryNavProps> = ({
  displayState,
  setDisplayState
}) => {
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
