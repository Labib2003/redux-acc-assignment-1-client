import { filterActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  sortByNew: false,
  tags: [],
};

const filterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case filterActionTypes.TOGGLE_SORT:
      return {
        ...state,
        sortByNew: !state.sortByNew,
      };
    default:
      return state;
  }
};

export default filterReducer;
