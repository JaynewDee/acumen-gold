import React from "react";
import { badges } from "../data/accolades";
const Badges = () => {
  return (
    <div className="category-container">
      <h3>Badges</h3>
      <div className="category-body">
        {badges.map((badge) => (
          <div>{badge.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
