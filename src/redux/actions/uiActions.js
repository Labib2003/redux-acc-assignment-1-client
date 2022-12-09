import { uiActionTypes } from "../actionTypes/actionTypes";

export const toggleNavbarOpen = () => {
  return {
    type: uiActionTypes.TOGGLE_NAVBAR_OPEN,
  };
};

export const toggleModal = () => {
  return {
    type: uiActionTypes.TOGGLE_MODAL,
  };
};
