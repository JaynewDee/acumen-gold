import { useState } from "react";
import { AccoladeType } from "./data/accolades";
import { skillSwitch, starSkillFill, statusSwitch } from "./data/icons";
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
              .map(
                (
                  {
                    category,
                    id,
                    name,
                    description,
                    level,
                    status
                  }: AccoladeType,
                  idx
                ) => (
                  <div className="content-item-container" key={idx + 1}>
                    <h4>
                      <em>{name}</em>
                    </h4>
                    {description ? <p></p> : <></>}
                    <div>{skillSwitch(name)}</div>
                    {level ? "" : <div>{statusSwitch(status)}</div>}

                    <h5
                      style={{
                        marginBottom: "0",
                        marginTop: ".33rem",
                        textDecoration: "underline"
                      }}
                    >
                      {level ? "LEVEL" : "STATUS"}
                    </h5>
                    <p style={{ margin: "0 auto" }}>
                      {level ? level : status.toUpperCase()}
                    </p>
                    <div>{level ? starSkillFill(level) : ""}</div>
                  </div>
                )
              )
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
