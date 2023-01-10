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

export const setLatLng = (latLng) => {
  return {
    type: ActionTypes.SET_LAT_LNG,
    payload: latLng,
  };
};
