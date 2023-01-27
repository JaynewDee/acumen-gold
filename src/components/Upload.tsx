import React, { useState } from "react";

const Upload = () => {
  const [imgfile, uploadimg] = useState([]);
  console.log("Image FIles", imgfile);
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfiles) => [
        ...imgfiles,
        URL.createObjectURL(e.target.files[0])
      ]);
    }
  };

  return (
    <div className="upload-box">
      <h3>Upload</h3>
      <input type="file" onChange={imgFilehandler} />
      <h3>Preview</h3>
      {imgfile.map((elem) => (
        <>
          <span key={elem} className="image-box">
            <img src={elem} height="100" width="100" alt="med1" />
            <button>Edit Details</button>
          </span>
        </>
      ))}
      <hr />
    </div>
  );
};

export default Upload;
