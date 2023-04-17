import { login } from "../types/actionTypes";

const initialState = {
  isLoading: false,
  loginSuccess: null,
  loginError: null,
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case login.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        loginSuccess: null,
        loginError: null,
      };
    case login.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginSuccess: payload,
      };
    case login.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        loginError: payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
