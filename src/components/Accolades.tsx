import React from "react";

const Accolades = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* Carousel will go here, wrapping the array of data items */}
      <h3>{data.category}</h3>
      {data ? data.map((each) => <div key={each.id}>{each.name}</div>) : <></>}
    </div>
  );
};

export default Accolades;
