import React from "react";
import { certificates } from "../data/accolades";
const Certificates = () => {
  return (
    <div className="category-container">
      <h3>Certificates</h3>
      <div className="category-body">
        {certificates.map((cert) => (
          <div>{cert.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
