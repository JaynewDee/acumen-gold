import React from "react";
import { AccoladeType } from "./data/accolades";
const Accolades = ({ data }) => {
  return (
    <div>
      {/* Carousel will go here, wrapping the array of data items */}
      <h3>{data.category}</h3>
      {data ? (
        data.map((each: AccoladeType) => <div key={each.id}>{each.name}</div>)
      ) : (
        <></>
      )}
    </div>
  );
};

export default Accolades;
