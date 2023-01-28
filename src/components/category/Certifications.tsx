import React from "react";
import { certifications } from "../data/accolades";
const Certifications = () => {
  return (
    <div className="category-container">
      <h3>Certifications</h3>
      <div className="category-body">
        {certifications.map((cert) => (
          <div>{cert.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
