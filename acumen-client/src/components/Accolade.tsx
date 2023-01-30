import { nanoid } from "nanoid";
import React from "react";
// <Accolade id, name, category, description, status, level/>
import { AccoladeType } from "./data/accolades";
import { skillSwitch, starSkillFill, statusSwitch } from "./data/icons";

const Accolade: React.FC<AccoladeType> = ({
  id,
  name,
  description,
  status,
  level
}) => {
  return (
    <div className="content-item-container" key={id}>
      <h4>
        <em>{name}</em>
      </h4>
      {description ? <p></p> : <></>}
      <div>{skillSwitch(name)}</div>
      {level ? "" : <div>{statusSwitch(status)}</div>}

      <h5 className="item-h5">{level ? "LEVEL" : "STATUS"}</h5>
      <p style={{ margin: "0 auto" }}>{level ? level : status.toUpperCase()}</p>
      <div>{level ? starSkillFill(level) : ""}</div>
    </div>
  );
};

export default React.memo(Accolade);
