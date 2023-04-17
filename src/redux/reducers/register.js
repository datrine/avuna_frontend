import { register } from "../types/actionTypes";

const initialState = {
  isLoading: false,
  registerSuccess: null,
  registerError: null,
};

const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case register.REGISTER_START:
      return {
        ...state,
        isLoading: true,
        registerSuccess: null,
        registerError: null,
      };
    case register.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        registerSuccess: payload,
      };
    case register.REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        registerError: payload,
      };

    default:
      return state;
  }
};

export default registerReducer;
