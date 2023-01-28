import React from "react";

const ImgPreview = ({ images }) => {
  return (
    <>
      <h3>Preview</h3>
      <div className="preview-images">
        {images.map((elem) => (
          <>
            <span key={elem} className="image-preview-box">
              <img key={elem} src={elem} height="100" width="100" alt="med1" />
              <button key={elem + 25}>Edit Details</button>
            </span>
          </>
        ))}
      </div>
    </>
  );
};

export default ImgPreview;
