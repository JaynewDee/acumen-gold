import { useState } from "react";
import { AccoladeType } from "./data/accolades";
import { handleHorizontalScroll } from "./utils/events";
const Accolades = ({ data }) => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="category-container">
        <button
          disabled={current === 0}
          onClick={(e) =>
            handleHorizontalScroll(e, data.length, current, setCurrent)
          }
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
          onClick={(e) =>
            handleHorizontalScroll(e, data.length, current, setCurrent)
          }
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
