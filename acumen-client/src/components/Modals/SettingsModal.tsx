import { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";
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
      <div></div>
    </div>,
    document.getElementById("login-modal-root") as HTMLElement
  );
  return modalState === "settings" ? modal : <></>;
};

export default SettingsModal;
