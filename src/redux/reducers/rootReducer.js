import { combineReducers } from "redux";
import registerReducer from "./register";
import loginReducer from "./login";

const appReducer = combineReducers({
  registerReducer: registerReducer,
  loginReducer: loginReducer,
});
const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_START") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export default rootReducer;
