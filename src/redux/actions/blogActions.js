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

export const editBlog = (blog) => {
  return { type: blogActionTypes.EDIT_BLOG, payload: blog };
};

export const markForDeletion = (id) => {
  return {
    type: blogActionTypes.MARK_FOR_DELETION,
    payload: id,
  };
};

export const deleteBlog = (id) => {
  return {
    type: blogActionTypes.DELETE_BLOG,
    payload: id,
  };
};

export const addToHistory = (blog) => {
  return { type: blogActionTypes.ADD_TO_HISTORY, payload: blog };
};
