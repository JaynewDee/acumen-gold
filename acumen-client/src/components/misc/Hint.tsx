import React, { useState } from "react";

const randomIdx = (length) => Math.floor(Math.random() * length);

const hints = [
  "Try using your keyboard arrows to navigate",
  "Login to add and modify your own accolades"
];

const Hint = ({ display }: { display: String }) => {
  const [hintState, setHintState] = useState(hints[0]);

  const handleHintSwitch = (e) => {
    e.preventDefault();
    const roll = () => {
      const randHint = hints[randomIdx(hints.length)];
      if (randHint === hintState) {
        roll();
      } else {
        setHintState(randHint);
      }
    };
    roll();
  };
  return (
    <>
      {display ? (
        <p className="hint" onClick={handleHintSwitch}>
          <em style={{ fontSize: ".66rem" }}>Hint:</em> {hintState}
        </p>
      ) : (
        <></>
      )}
    </>
  );
};

export default Hint;
