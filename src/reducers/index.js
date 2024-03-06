import { combineReducers } from "redux";
import aboutMeReducer from "./aboutMeReducer";
import skillsetsReducer from "./skillsetsReducer";
import projectsReducer from "./projectsReducer";
import experienceReducer from "./experienceReducer";
import ctaReducer from "./ctaReducer";
import introReducer from "./introReducer";

const rootReducer = combineReducers({
  aboutMe: aboutMeReducer,
  skillsets: skillsetsReducer,
  projects: projectsReducer,
  experience: experienceReducer,
  cta: ctaReducer,
  intro: introReducer,
});

export default rootReducer;
