import { ACTION_TYPES } from "../actions/ActionTypes";
import { EMPTY_CONTENT } from "../utils/constants";

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
