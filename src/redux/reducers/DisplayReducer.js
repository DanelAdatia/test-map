import { ActionTypes } from "../constants/Actions-Types";

const initialState = {
  display: "",
  optionCountry: [],
  latLng: { lat: 0, lng: 0 },
};

export const displayReduce = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DISPLAY:
      return { ...state, display: payload };
    case ActionTypes.SET_OPTIONS:
      return { ...state, optionCountry: payload };
    case ActionTypes.SET_LAT_LNG:
      return { ...state, latLng: payload };
    default:
      return state;
  }
};
