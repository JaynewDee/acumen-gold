import { useState } from "react";

export const useNavState = (currentState) => {
  const [navState, setNavState] = useState(currentState);
};
