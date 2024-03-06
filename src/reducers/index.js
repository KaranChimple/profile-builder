import { combineReducers } from "redux";
import aboutMeReducer from "./aboutMeReducer";
import skillsetsReducer from "./skillsetsReducer";
import projectsReducer from "./projectsReducer";
import experienceReducer from "./experienceReducer";
import ctaReducer from "./ctaReducer";

const rootReducer = combineReducers({
  aboutMe: aboutMeReducer,
  skillsets: skillsetsReducer,
  projects: projectsReducer,
  experience: experienceReducer,
  cta: ctaReducer,
});

export default rootReducer;
