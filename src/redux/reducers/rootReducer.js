import { combineReducers } from "redux";
import preferenceReducer from "./preferences";
import userProfileReducer from "./userProfile";

const appReducer = combineReducers({
  preferenceReducer: preferenceReducer,
  userProfileReducer: userProfileReducer,
});
const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_START") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export default rootReducer;
