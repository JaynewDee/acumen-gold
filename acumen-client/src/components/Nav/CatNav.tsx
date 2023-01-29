import React from "react";
import NavBtn from "./NavBtn";
import { CategoryNavProps } from "./types";
import "./styles.css";

const categories = ["skills", "badges", "certificates", "certifications"];

const CatNav: React.FC<CategoryNavProps> = ({
  displayState,
  setDisplayState
}) => {
  return (
    <div
      className="nav-box"
      style={
        displayState === ""
          ? {
              transform: "translateY(100%)",
              backgroundColor: "black",
              fontSize: "1.5rem"
            }
          : { transform: "translateY(0%)", fontSize: "1rem" }
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
