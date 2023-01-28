import React, { Dispatch, SetStateAction } from "react";

const LoginBtn = ({
  setModalState
}: {
  setModalState: Dispatch<SetStateAction<String>>;
}) => {
  const handleModalToggle = () => {
    setModalState((prev) => (prev === "login" ? "" : "login"));
  };

  return (
    <button onClick={handleModalToggle} className="login-btn">
      LOGIN
    </button>
  );
};
export default LoginBtn;
