import { filterActionTypes } from "../actionTypes/actionTypes";

export const toggleSort = () => {
  return {
    type: filterActionTypes.TOGGLE_SORT,
  };
};
