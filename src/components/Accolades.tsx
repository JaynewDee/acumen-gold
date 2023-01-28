import React from "react";
import { AccoladeType } from "./data/accolades";
const Accolades = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* Carousel will go here, wrapping the array of data items */}

      {data
        ? data.map(({ category, id, name }: AccoladeType) => (
            <div className="content-item-container" key={id}>
              <h3 key={id}>{category.toUpperCase()}</h3>
              <div key={id + 1}>{name}</div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Accolades;