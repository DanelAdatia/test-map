import { ActionTypes } from "../constants/Actions-Types";

export const setDisplay = (display) => {
  return {
    type: ActionTypes.SET_DISPLAY,
    payload: display,
  };
};

export const setOptions = (optionCountry) => {
  return {
    type: ActionTypes.SET_OPTIONS,
    payload: optionCountry,
  };
};
