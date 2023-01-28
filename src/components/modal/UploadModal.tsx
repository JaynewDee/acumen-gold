import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const UploadModal = ({ modalState }: { modalState: boolean }) => {
  const [imgFiles, uploadimg] = useState([]);
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfiles) => [
        ...imgfiles,
        URL.createObjectURL(e.target.files[0])
      ]);
    }
  };
  console.log(imgFiles);
  const modal = ReactDOM.createPortal(
    <div
      className="upload-modal-box"
      style={modalState ? { transform: "scale(1)" } : {}}
    >
      <h3>Upload</h3>
      <input type="file" onChange={imgFilehandler} />
      <h3>Preview</h3>
      {imgFiles.map((elem) => (
        <>
          <span key={elem} className="image-preview-box">
            <img key={elem} src={elem} height="100" width="100" alt="med1" />
            <button>Edit Details</button>
          </span>
        </>
      ))}
    </div>,
    document.getElementById("upload-modal-root") as HTMLElement
  );
  return modalState === true ? modal : <></>;
};

export default UploadModal;
