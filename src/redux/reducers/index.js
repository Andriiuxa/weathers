import { combineReducers } from "redux";
import weathersReducer from "./weathersReducer";

export default combineReducers({
  weathers: weathersReducer
});
