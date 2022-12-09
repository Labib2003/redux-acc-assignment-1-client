import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import filterReducer from "./filterReducer";
import formReducer from "./formReducer";

const rootReducer = combineReducers({
  form: formReducer,
  blog: blogReducer,
  filter: filterReducer,
});

export default rootReducer;
