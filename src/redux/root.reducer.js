import { combineReducers } from "redux";

import courseReducer from "./courses/course.reducer";

export default combineReducers ({
    courses:courseReducer
})