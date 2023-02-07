import { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";
import Hint from "../misc/Hint";
import ExitBtn from "./Buttons/ExitBtn";

const SettingsModal = ({
  modalState,
  setModalState
}: {
  modalState: String;
  setModalState: Dispatch<SetStateAction<String>>;
}) => {
  const closeModal = () => {
    setModalState("");
  };

  const modal = ReactDOM.createPortal(
    <div
      className={
        modalState === "settings"
          ? "settings-modal-active"
          : "settings-modal-hide"
      }
    >
      <ExitBtn close={closeModal} />
      <h3>SETTINGS</h3>
      <Hint display={modalState} />
    </div>,
    document.getElementById("login-modal-root") as HTMLElement
  );
  return modalState === "settings" ? modal : <></>;
};

export default SettingsModal;
