import { useReducer } from "react";

const getPrev = (state) => state.filter((obj) => obj.active);
const getIdxOfPrev = (state) =>
  state.reduce((acc, item, idx) => (item === getPrev(state) ? idx : 0), 0);

const verticalDecrement = (state) => {
  const newIdx = getIdxOfPrev(state);
  const newState = state.map((item, idx) =>
    idx === newIdx ? { ...item, active: true } : { ...item, active: false }
  );

  return newState;
};

const verticalIncrement = (state) => state;
const horizonDecrement = (state) => state;
const horizonIncrement = (state) => state;

export const useNavReducer = () => {
  function navReducer(state, action) {
    const actions: any = {
      decrementVert: verticalDecrement(state),
      incrementVert: verticalIncrement(state),
      decrementHorizon: horizonDecrement(state),
      incrementHorizon: horizonIncrement(state),
      clickTo: ""
    };
    return actions[action.type];
  }

  const initialState = [
    { state: "badges", active: true },
    { state: "certificates", active: false },
    { state: "certifications", active: false },
    { state: "skills", active: false }
  ];

  return useReducer(navReducer, initialState);
};
