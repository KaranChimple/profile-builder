import { ACTION_TYPES } from "./ActionTypes";

export const setAboutMe = (data) => {
  return {
    type: ACTION_TYPES.SET_ABOUT_ME_DETAILS,
    payload: data,
  };
};

export const setSkillsets = (data) => {
  return {
    type: ACTION_TYPES.SET_SKILL_SETS_DATA,
    payload: data,
  };
};

export const setProjects = (data) => {
  return {
    type: ACTION_TYPES.SET_PROJECTS,
    payload: data,
  };
};

export const setExperience = (data) => {
  return {
    type: ACTION_TYPES.SET_EXPERIENCE,
    payload: data,
  };
};

export const setCta = (data) => {
  return {
    type: ACTION_TYPES.SET_CTA,
    payload: data,
  };
};
