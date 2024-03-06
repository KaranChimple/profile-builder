import { ACTION_TYPES } from "../actions/ActionTypes";

const initialState = {
  data: {},
};

const ctaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CTA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default ctaReducer;
