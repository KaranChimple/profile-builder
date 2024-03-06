import { ACTION_TYPES } from "../actions/ActionTypes";

const initialState = {
  data: {},
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_PROJECTS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default projectsReducer;
