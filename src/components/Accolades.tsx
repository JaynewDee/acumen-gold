import { useState } from "react";
import { AccoladeType } from "./data/accolades";

const Accolades = ({ data }) => {
  const [current, setCurrent] = useState(0);

  const handleHorizontalScroll = (e) => {
    const id = e.target.id;
    const newIdx =
      id === "left-btn" && current > 0
        ? current - 1
        : current < data.length - 1
        ? current + 1
        : e.preventDefault();
    setCurrent(newIdx);
  };

  return (
    <>
      <div className="category-container">
        <button
          disabled={current === 0}
          onClick={handleHorizontalScroll}
          id="left-btn"
          className="cycle-btn"
        >
          {"<"}
        </button>
        {data
          ? data
              .filter((_, idx) => idx === current)
              .map(({ category, id, name }: AccoladeType) => (
                <div className="content-item-container" key={id}>
                  <div key={id + 1}>{name}</div>
                </div>
              ))
          : null}
        <button
          disabled={current === data.length - 1}
          onClick={handleHorizontalScroll}
          id="right-btn"
          className="cycle-btn"
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default Accolades;
