import { ACTION_TYPES } from "../actions/ActionTypes";

const initialState = {
  data: {},
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_EXPERIENCE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default experienceReducer;
