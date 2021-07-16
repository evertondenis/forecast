import {
  LOAD_FORECAST_LOADING,
  LOAD_FORECAST_SUCCESS,
  LOAD_FORECAST_ERROR
} from "../types";
import axios from "axios";

export const getForecast = (idAreaAviso, globalIdLocal) => async (dispatch) => {
  dispatch({
    type: LOAD_FORECAST_LOADING,
  });
  try {
    const res = await axios.get(
      `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`
    );
    dispatch({
      type: LOAD_FORECAST_SUCCESS,
      payload: { idAreaAviso, data: res.data }
    });
  } catch (error) {
    dispatch({
      type: LOAD_FORECAST_ERROR,
      payload: error
    });
  }
};
