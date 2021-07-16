import { combineReducers } from "redux";
import regionReducer from "./regionReducer";
import forecastReducer from "./forecastReducer";

export default combineReducers({
  regionsList: regionReducer,
  forecastList: forecastReducer
});
