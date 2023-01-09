import { ActionTypes } from "../constants/Actions-Types";

const initialState = {
  display: "",
  optionCountry: [],
};

export const displayReduce = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DISPLAY:
      return { ...state, display: payload };
    case ActionTypes.SET_OPTIONS:
      return { ...state, optionCountry: payload };
    default:
      return state;
  }
};
