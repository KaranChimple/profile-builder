import { combineReducers } from "redux";
import aboutMeReducer from "./aboutMeReducer";
import skillsetsReducer from "./skillsetsReducer";
import projectsReducer from "./projectsReducer";
import experienceReducer from "./experienceReducer";

const rootReducer = combineReducers({
  aboutMe: aboutMeReducer,
  skillsets: skillsetsReducer,
  projects: projectsReducer,
  experience: experienceReducer,
});

export default rootReducer;
