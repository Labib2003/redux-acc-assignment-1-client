import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import formReducer from "./formReducer";

const rootReducer = combineReducers({
    form: formReducer,
    blog: blogReducer
});

export default rootReducer;
