import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import filterReducer from "./filterReducer";
import formReducer from "./formReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  form: formReducer,
  blog: blogReducer,
  filter: filterReducer,
  ui: uiReducer,
});

export default rootReducer;
