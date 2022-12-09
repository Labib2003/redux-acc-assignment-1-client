import { blogActionTypes } from "../actionTypes/actionTypes";

export const getAllBlogs = (blogs) => {
  return {
    type: blogActionTypes.GET_ALL_BLOGS,
    payload: blogs,
  };
};

export const postNewBlog = (blog) => {
  return {
    type: blogActionTypes.POST_NEW_BLOG,
    payload: blog,
  };
};

export const addToHistory = (blog) => {
  return { type: blogActionTypes.ADD_TO_HISTORY, payload: blog };
};
