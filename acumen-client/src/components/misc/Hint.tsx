import { useState } from "react";

const randomIdx = (length) => Math.floor(Math.random() * length);

const hints = [
  "Try using your keyboard arrows to navigate",
  "Login to add and modify your own accolades"
];

const Hint = ({
  display,
  styles,
  type
}: {
  display: string;
  styles?: any;
  type?: string;
}) => {
  const [hintState, setHintState] = useState(hints[0]);

  console.log(display);
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

  const ClickHeader = () => {
    return type === "settings" ? (
      <p style={{ margin: "0 auto -1rem", fontSize: ".33rem" }}>
        Click to cycle
      </p>
    ) : (
      <></>
    );
  };
  return (
    <>
      {ClickHeader()}
      {display && (
        <p
          data-type={type}
          className="hint"
          onClick={handleHintSwitch}
          style={styles}
        >
          <em style={{ color: "gold", fontSize: ".77rem" }}>Hint:</em>{" "}
          {hintState}
        </p>
      )}
    </>
  );
};

export default Hint;
