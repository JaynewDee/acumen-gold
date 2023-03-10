import React, { useEffect, useState } from "react";
import { NavBtnProps } from "./types";

const NavBtn: React.FC<NavBtnProps> = ({
  cat,
  displayState,
  setDisplayState
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleNavigationSwitch = (e: any) => {
    if (isActive === false) {
      setDisplayState(cat);
      setIsActive(true);
    } else {
      setDisplayState("");
    }
  };

  useEffect(() => {
    if (displayState !== cat) {
      setIsActive(false);
    }
  }, [displayState]);

  return (
    <button
      style={
        displayState === ""
          ? { marginBottom: ".5rem", marginTop: ".5rem" }
          : { marginBottom: "0rem" }
      }
      className={
        "nav-btn " + (isActive ? "nav-btn-active" : "nav-btn-inactive")
      }
      onClick={handleNavigationSwitch}
    >
      {cat.toUpperCase()}
    </button>
  );
};

export default NavBtn;
