import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bannerReducer from "./bannerReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  banner: bannerReducer,
});

export default rootReducer;
