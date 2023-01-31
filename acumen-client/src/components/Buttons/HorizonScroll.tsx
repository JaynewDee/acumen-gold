import React, { Dispatch, SetStateAction } from "react";
import { handleHorizontalScroll } from "../utils/events";

interface ScrollProps {
  type: String;
  current: number;
  length: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}
const HorizonScroll: React.FC<ScrollProps> = ({
  type,
  current,
  length,
  setCurrent
}) => {
  return (
    <button
      key={current}
      disabled={type === "left" ? current === 0 : current === length - 1}
      onClick={(e) => handleHorizontalScroll(e, length, current, setCurrent)}
      id={type === "left" ? "left-btn" : "right-btn"}
      className="cycle-btn"
    >
      {type === "left" ? "<" : ">"}
    </button>
  );
};

export default HorizonScroll;
