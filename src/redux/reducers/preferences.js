import { preference } from "../types/actionTypes";

const initialState = {
  isLoading: false,
  preferenceSuccess: null,
  preferenceError: null,
};

const preferenceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case preference.PREFERENCE_START:
      return {
        ...state,
        isLoading: true,
        preferenceSuccess: null,
        preferenceError: null,
      };
    case preference.PREFERENCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        preferenceSuccess: payload,
      };
    case preference.PREFERENCE_ERROR:
      return {
        ...state,
        isLoading: false,
        preferenceError: payload,
      };

    default:
      return state;
  }
};

export default preferenceReducer;
