import { filterActionTypes } from "../actionTypes/actionTypes";

export const toggleSort = () => {
  return {
    type: filterActionTypes.TOGGLE_SORT,
  };
};

export const handleTags = (tag) => {
  return {
    type: filterActionTypes.HANDLE_TAG,
    payload: tag,
  };
};
