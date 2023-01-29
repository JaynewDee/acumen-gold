import { useState } from "react";
import { AccoladeType } from "./data/accolades";
import { skillSwitch, starSkillFill } from "./data/icons";
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
              .map(({ category, id, name, level, status }: AccoladeType) => (
                <div className="content-item-container" key={id}>
                  <h4 key={id + 1}>
                    <em>{name}</em>
                  </h4>
                  <div>{skillSwitch(name)}</div>
                  <h5
                    style={{ marginBottom: "0", marginTop: "3rem" }}
                    key={id * 13}
                  >
                    {level ? "LEVEL" : "STATUS"}
                  </h5>
                  <p key={id * 18}>{level ? level : status.toUpperCase()}</p>
                  <div key={id * 21}>{level ? starSkillFill(level) : ""}</div>
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
