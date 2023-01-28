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
        "login-modal-box" +
        (modalState === "login" ? " login-modal-active" : "")
      }
      style={modalState === "login" ? { transform: "scale(1)" } : {}}
    >
      <div>
        <button onClick={closeModal}>Exit</button>
      </div>
      <h3>LOGIN</h3>
    </div>,
    document.getElementById("login-modal-root") as HTMLElement
  );
  return modalState === "login" ? modal : <></>;
};

export default LoginModal;
