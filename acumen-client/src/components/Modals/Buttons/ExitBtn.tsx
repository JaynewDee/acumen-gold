import { Dispatch, SetStateAction } from "react";

const ExitBtn = ({ close }: { close: Dispatch<SetStateAction<any>> }) => {
  return (
    <div className="exit-btn">
      <button onClick={close}>X</button>
    </div>
  );
};

export default ExitBtn;
