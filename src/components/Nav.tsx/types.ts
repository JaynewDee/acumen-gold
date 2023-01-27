import { Dispatch, SetStateAction } from "react";

export interface CategoryNavProps {
  displayState: String;
  setDisplayState: Dispatch<SetStateAction<String>>;
}

export interface NavBtnProps extends CategoryNavProps {
  cat: String;
}
