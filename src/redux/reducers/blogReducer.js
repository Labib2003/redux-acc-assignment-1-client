import { blogActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  history: [],
  idToBeDeleted: "",
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case blogActionTypes.GET_ALL_BLOGS:
      return { ...state, blogs: payload };
    case blogActionTypes.POST_NEW_BLOG:
      return { ...state, blogs: [...state.blogs, payload] };
    case blogActionTypes.EDIT_BLOG:
      return {
        ...state,
        blogs: [
          ...state.blogs.filter((blog) => blog._id !== payload._id),
          payload,
        ],
      };
    case blogActionTypes.MARK_FOR_DELETION:
      return {
        ...state,
        idToBeDeleted: payload,
      };
    case blogActionTypes.DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== payload),
      };
    case blogActionTypes.ADD_TO_HISTORY:
      return {
        ...state,
        history: [
          payload,
          ...state.history.filter((blog) => blog._id !== payload._id),
        ],
      };
    default:
      return state;
  }
};

export default blogReducer;
