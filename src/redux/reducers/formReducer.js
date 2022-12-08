import { formActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  title: "",
  body: "",
  tags: [],
};

const formReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case formActionTypes.TEXT_INPUT:
      return { ...state, [payload.name]: payload.value };
    case formActionTypes.ADD_TAG:
      if (state.tags.includes(payload)) return { ...state };
      return {
        ...state,
        tags: [...state.tags, payload],
      };
    case formActionTypes.REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== payload),
      };
    default:
      return state;
  }
};

export default formReducer;
