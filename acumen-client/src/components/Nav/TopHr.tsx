import React from "react";

const TopHr = ({ displayState }: { displayState: String }) => {
  return (
    <div>
      <hr
        style={
          displayState === ""
            ? {
                width: "33%",
                transition: "width .47s",
                transitionDelay: ".47s",
                marginTop: "0"
              }
            : {
                width: "66%",
                transition: "width .47s",
                transitionDelay: ".55s"
              }
        }
      />
    </div>
  );
};

export default TopHr;
