import { combineReducers } from "redux";
import aboutMeReducer from "./aboutMeReducer";

const rootReducer = combineReducers({
  aboutMe: aboutMeReducer,
});

export default rootReducer;
