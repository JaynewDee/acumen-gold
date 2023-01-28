import { Dispatch, SetStateAction, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const LoginModal = ({
  modalState,
  setModalState
}: {
  modalState: String;
  setModalState: Dispatch<SetStateAction<String>>;
}) => {
  const [formState, updateFormState] = useState({
    username: ""
  });

  const closeModal = () => {
    setModalState("");
  };
  const modal = ReactDOM.createPortal(
    <div
      className={
        modalState === "login" ? "login-modal-active" : "login-modal-hide"
      }
    >
      <div className="exit-btn">
        <button onClick={closeModal}>X</button>
      </div>
      <h3>LOGIN</h3>
    </div>,
    document.getElementById("login-modal-root") as HTMLElement
  );
  return modalState === "login" ? modal : <></>;
};

export default LoginModal;
