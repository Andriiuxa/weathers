import {
  FETCH_WEATHERS_REQUESTED,
  FETCH_WEATHERS_SUCCESSFULL,
  FETCH_WEATHERS_FAILED
} from "../actions/types";

const initialState = {
  weathers: [],
  weathersLoading: false,
  weathersError: null
};

export default function weathersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHERS_REQUESTED:
      return {
        ...state,
        weathersLoading: true,
        weathersError: null
      };

    case FETCH_WEATHERS_SUCCESSFULL:
      return {
        ...state,
        weathersLoading: false,
        weathers: action.weathers
      };

    case FETCH_WEATHERS_FAILED:
      return {
        ...state,
        weathersLoading: false,
        weathersError: action.weathersError,
        weathers: []
      };

    default:
      return state;
  }
}
