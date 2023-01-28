import React, { Dispatch, SetStateAction } from "react";

const UploadBtn = ({
  setModalState
}: {
  setModalState: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleModalToggle = () => {
    setModalState((prev) => !prev);
  };

  return (
    <button onClick={handleModalToggle} className="upload-btn">
      UPLOAD
    </button>
  );
};

export default UploadBtn;
