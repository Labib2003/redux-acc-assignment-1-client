import { uiActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  navbarOpen: false,
  modalOpen: false,
};

const uiReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case uiActionTypes.TOGGLE_NAVBAR_OPEN:
      return {
        ...state,
        navbarOpen: !state.navbarOpen,
      };
    case uiActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    default:
      return state;
  }
};

export default uiReducer;
