import { register, userProfile } from "../types/actionTypes";
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
    .catch((error) => dispatch(registerLoadError(error.response.data.err)));
};

//registeration actions end

//userProfile actions
export const userProfileLoadStart = () => ({
  type: userProfile.USER_PROFILE_START,
});

export const userProfileLoadSuccess = (billers) => ({
  type: userProfile.USER_PROFILE_SUCCESS,
  payload: billers,
});

export const userProfileLoadError = (errorMessage) => ({
  type: userProfile.USER_PROFILE_ERROR,
  payload: errorMessage,
});
export const userProfileAction = (coe) => (dispatch) => {
  dispatch(userProfileLoadStart());
  axiosInstance
    .get(apiRoutes.userProfile)
    .then((response) => dispatch(userProfileLoadSuccess(response.data)))
    .catch((error) => dispatch(userProfileLoadError(error.response.data.err)));
};

//userProfile actions end
