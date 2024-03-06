import { combineReducers } from "redux";
import aboutMeReducer from "./aboutMeReducer";
import skillsetsReducer from "./skillsetsReducer";
import projectsReducer from "./projectsReducer";

const rootReducer = combineReducers({
  aboutMe: aboutMeReducer,
  skillsets: skillsetsReducer,
  projects: projectsReducer,
});

export default rootReducer;
