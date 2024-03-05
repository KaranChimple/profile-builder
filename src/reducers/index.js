import { combineReducers } from "redux";
import aboutMeReducer from "./aboutMeReducer";
import skillsetsReducer from "./skillsetsReducer";

const rootReducer = combineReducers({
  aboutMe: aboutMeReducer,
  skillsets: skillsetsReducer,
});

export default rootReducer;
