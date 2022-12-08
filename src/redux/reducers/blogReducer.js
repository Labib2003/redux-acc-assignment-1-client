import { blogActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  history: [],
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case blogActionTypes.GET_ALL_BLOGS:
      return { ...state, blogs: payload };
    default:
      return state;
  }
};

export default blogReducer;
