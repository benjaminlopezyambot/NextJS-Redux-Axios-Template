import { combineReducers } from "redux";
import getPostReducer from "./PostReducers/getPostReducer";

export default combineReducers({
  PostList: getPostReducer,
});
