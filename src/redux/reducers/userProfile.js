import { userProfile } from "../types/actionTypes";

const initialState = {
  isLoading: false,
  userProfileSuccess: null,
  userProfileError: null,
};

const userProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userProfile.USER_PROFILE_START:
      return {
        ...state,
        isLoading: true,
        userProfileSuccess: null,
        userProfileError: null,
      };
    case userProfile.USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userProfileSuccess: payload,
      };
    case userProfile.USER_PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
        userProfileError: payload,
      };

    default:
      return state;
  }
};

export default userProfileReducer;
