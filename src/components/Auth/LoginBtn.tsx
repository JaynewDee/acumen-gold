import React, { Dispatch, SetStateAction } from "react";

const LoginBtn = ({
  setModalState
}: {
  setModalState: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleModalToggle = () => {
    setModalState((prev) => !prev);
  };

  return (
    <button onClick={handleModalToggle} className="upload-btn">
      LOGIN
    </button>
  );
};
export default LoginBtn;
