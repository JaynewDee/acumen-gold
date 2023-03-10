import React, { Dispatch, SetStateAction } from "react";
import LoginModal from "./LoginModal";
import UploadModal from "./UploadModal";
import "./styles.css";
import SettingsModal from "./SettingsModal";

interface ModalProps {
  modalState: String;
  setModalState: Dispatch<SetStateAction<String>>;
}
const ModalSwitch: React.FC<ModalProps> = ({ modalState, setModalState }) => {
  return (
    <>
      <LoginModal modalState={modalState} setModalState={setModalState} />
      <UploadModal modalState={modalState} setModalState={setModalState} />
      <SettingsModal modalState={modalState} setModalState={setModalState} />
    </>
  );
};

export default ModalSwitch;
