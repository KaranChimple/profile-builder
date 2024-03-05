import { ACTION_TYPES } from "./ActionTypes";

export const setAboutMe = (data) => {
  return {
    type: ACTION_TYPES.SET_ABOUT_ME_DETAILS,
    payload: data,
  };
};
