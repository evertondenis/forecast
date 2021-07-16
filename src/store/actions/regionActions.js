import {
  LOAD_REGIONS_LOADING,
  LOAD_REGIONS_SUCCESS,
  LOAD_REGIONS_ERROR,
  FILTER_REGION
} from "../types";
import axios from "axios";

export const getRegions = () => async (dispatch) => {
  dispatch({
    type: LOAD_REGIONS_LOADING
  });
  try {
    const res = await axios.get(
      `https://api.ipma.pt/open-data/distrits-islands.json`
    );
    dispatch({
      type: LOAD_REGIONS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: LOAD_REGIONS_ERROR,
      payload: error
    });
  }
};

export const filterRegion = (filter) => async (dispatch) => {
  // console.log("filter: ", filter);
  dispatch({
    type: FILTER_REGION,
    payload: { filter }
  });
};
