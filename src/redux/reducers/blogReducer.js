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
    case blogActionTypes.POST_NEW_BLOG:
      return { ...state, blogs: [...state.blogs, payload] };
    default:
      return state;
  }
};

export default blogReducer;
