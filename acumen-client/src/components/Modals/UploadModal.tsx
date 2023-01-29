import { Dispatch, SetStateAction, useState } from "react";
import ReactDOM from "react-dom";
import ExitBtn from "./Buttons/ExitBtn";
import ImgPreview from "./ImgPreview";
import "./styles.css";
const UploadModal = ({
  modalState,
  setModalState
}: {
  modalState: String;
  setModalState: Dispatch<SetStateAction<String>>;
}) => {
  const [imgFiles, uploadimg] = useState([]);

  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfiles) => [
        ...imgfiles,
        URL.createObjectURL(e.target.files[0])
      ]);
    }
  };
  const handleClickDefer = () => {
    document.getElementById("invisible-input").click();
  };
  const closeModal = () => {
    setModalState("");
  };
  const modal = ReactDOM.createPortal(
    <div
      className={
        modalState === "upload" ? "upload-modal-active" : "upload-modal-hide"
      }
    >
      <ExitBtn close={closeModal} />
      <h3>Upload</h3>
      <button onClick={handleClickDefer}>Choose File</button>
      <input
        id="invisible-input"
        style={{ display: "none" }}
        type="file"
        name="upload-input"
        accept=".gif,.jpg,.jpeg,.png"
        onChange={imgFilehandler}
      />
      <ImgPreview images={imgFiles} />
    </div>,
    document.getElementById("upload-modal-root") as HTMLElement
  );
  return modalState === "upload" ? modal : <></>;
};

export default UploadModal;
