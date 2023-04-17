import { register, login } from "../types/actionTypes";
import axiosInstance from "../helper/apiClient";
import apiRoutes from "../helper/apiRoutes";

//registeration actions
export const registerLoadStart = () => ({
  type: register.REGISTER_START,
});

export const registerLoadSuccess = (billers) => ({
  type: register.REGISTER_SUCCESS,
  payload: billers,
});

export const registerLoadError = (errorMessage) => ({
  type: register.REGISTER_ERROR,
  payload: errorMessage,
});
export const registeration = (code) => (dispatch) => {
  dispatch(registerLoadStart());
  axiosInstance
    .post(apiRoutes.registerStudent, code)
    .then((response) => dispatch(registerLoadSuccess(response.data)))
    .catch((error) => dispatch(registerLoadError(error.message)));
};

//registeration actions end

//Login actions
export const loginLoadStart = () => ({
  type: login.LOGIN_START,
});

export const loginLoadSuccess = (billers) => ({
  type: login.LOGIN_SUCCESS,
  payload: billers,
});

export const loginLoadError = (errorMessage) => ({
  type: login.LOGIN_ERROR,
  payload: errorMessage,
});
export const loginAction = (code) => (dispatch) => {
  dispatch(loginLoadStart());
  axiosInstance
    .post(apiRoutes.loginStudent, code)
    .then((response) => dispatch(loginLoadSuccess(response.data)))
    .catch((error) => dispatch(loginLoadError(error.response.data.err)));
};

//Login actions end
