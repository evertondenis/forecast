import {
  LOAD_REGIONS_SUCCESS,
  LOAD_REGIONS_ERROR,
  FILTER_REGION,
  LOAD_REGIONS_LOADING
} from "../types";

const initialState = {
  regions: [],
  filteredRegions: [],
  loading: false,
  error: ""
};

export default function RegionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REGIONS_LOADING: {
      return {
        ...state,
        loading: true,
        error: ""
      };
    }
    case LOAD_REGIONS_SUCCESS:
      return {
        ...state,
        regions: action.payload,
        filteredRegions: action.payload,
        loading: false
      };
    case LOAD_REGIONS_ERROR:
      return {
        loading: false,
        error: action.payload
      };
    case FILTER_REGION:
      const { filter } = action.payload;
      const { regions } = state;
      const filtered = state.regions.data.filter(
        (item) =>
          item.idAreaAviso.toLowerCase().search(filter.toLowerCase()) !== -1
      );
      return {
        ...state,
        filteredRegions: { ...regions, data: filtered }
      };
    default:
      return state;
  }
}