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
    case filterActionTypes.HANDLE_TAG:
      if (state.tags.includes(payload)) {
        return {
          ...state,
          tags: state.tags.filter((tag) => tag !== payload),
        };
      }
      return {
        ...state,
        tags: [...state.tags, payload],
      };
    default:
      return state;
  }
};

export default filterReducer;
