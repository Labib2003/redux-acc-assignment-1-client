import { formActionTypes } from "../actionTypes";

export const textInput = (name, value) => {
  return {
    type: formActionTypes.TEXT_INPUT,
    payload: {
      name,
      value,
    },
  };
};

export const addTag = (tag) => {
  return {
    type: formActionTypes.ADD_TAG,
    payload: tag,
  };
};

export const removeTag = (tag) => {
  return {
    type: formActionTypes.REMOVE_TAG,
    payload: tag,
  };
};
