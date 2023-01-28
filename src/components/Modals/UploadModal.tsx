import React, { Dispatch, SetStateAction, useState } from "react";
import ReactDOM from "react-dom";
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
      // style={
      //   modalState === "upload"
      //     ? { transform: "scale(1)", transition: "all 1s" }
      //     : { transform: "scale(0)", transition: "all 1s" }
      // }
    >
      <div className="exit-btn">
        <button onClick={closeModal}>X</button>
      </div>
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
      <h3>Preview</h3>
      <div className="preview-images">
        {imgFiles.map((elem) => (
          <>
            <span key={elem} className="image-preview-box">
              <img key={elem} src={elem} height="100" width="100" alt="med1" />
              <button>Edit Details</button>
            </span>
          </>
        ))}
      </div>
    </div>,
    document.getElementById("upload-modal-root") as HTMLElement
  );
  return modalState === "upload" ? modal : <></>;
};

export default UploadModal;
