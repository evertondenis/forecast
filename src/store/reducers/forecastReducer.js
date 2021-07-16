import {
  LOAD_FORECAST_LOADING,
  LOAD_FORECAST_SUCCESS,
  LOAD_FORECAST_ERROR
} from "../types";

const initialState = {
  forecast: {},
  loading: false,
  error: ""
};

export default function ForecastReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FORECAST_LOADING: {
      return {
        ...state,
        loading: true,
        error: ""
      };
    }
    case LOAD_FORECAST_SUCCESS:
      return {
        ...state,
        forecast: action.payload,
        loading: false
      };
    case LOAD_FORECAST_ERROR:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
