import React, { Dispatch, SetStateAction } from "react";

const SettingsBtn = ({
  setModalState
}: {
  setModalState: Dispatch<SetStateAction<String>>;
}) => {
  const handleModalToggle = () => {
    setModalState((prev) => (prev === "settings" ? "" : "settings"));
  };
  return (
    <button onClick={handleModalToggle} className="settings-btn">
      SETTINGS
    </button>
  );
};

export default SettingsBtn;
