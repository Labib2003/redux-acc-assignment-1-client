import { blogActionTypes } from "../actionTypes/actionTypes";

export const getAllBlogs = (blogs) => {
  return {
    type: blogActionTypes.GET_ALL_BLOGS,
    payload: blogs,
  };
};
