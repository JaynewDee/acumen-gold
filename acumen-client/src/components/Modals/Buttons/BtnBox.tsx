import React from "react";
import LoginBtn from "./LoginBtn";
import SettingsBtn from "./SettingsBtn";
import UploadBtn from "./UploadBtn";

const BtnBox = ({ setModalState }) => {
  return (
    <div className="util-btns">
      <hr
        style={{
          marginBottom: "0",
          marginTop: "auto",
          width: "33%",
          height: "1px"
        }}
      ></hr>

      <div className="util-btn-box">
        <UploadBtn setModalState={setModalState} />

        <SettingsBtn />

        <LoginBtn setModalState={setModalState} />
      </div>
    </div>
  );
};

export default BtnBox;
