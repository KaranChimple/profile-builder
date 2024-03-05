import { ACTION_TYPES } from "../actions/ActionTypes";

const initialState = {
  data: {},
};

const skillsetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_SKILL_SETS_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default skillsetsReducer;
