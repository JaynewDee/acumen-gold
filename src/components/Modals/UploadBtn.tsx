import { Dispatch, SetStateAction } from "react";

const UploadBtn = ({
  setModalState
}: {
  setModalState: Dispatch<SetStateAction<String>>;
}) => {
  const handleModalToggle = () => {
    setModalState((prev) => (prev === "upload" ? "" : "upload"));
  };

  return (
    <button onClick={handleModalToggle} className="upload-btn">
      UPLOAD
    </button>
  );
};

export default UploadBtn;
