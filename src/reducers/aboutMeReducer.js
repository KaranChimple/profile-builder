import { ACTION_TYPES } from "../actions/ActionTypes";

const initialState = {
  data: {},
};

const aboutMeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_ABOUT_ME_DETAILS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default aboutMeReducer;
