import { ACTION_TYPES } from "../actions/ActionTypes";

const initialState = {
  data: {},
};

const introReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_INTROVIEW:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default introReducer;
