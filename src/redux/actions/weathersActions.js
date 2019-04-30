import {
  FETCH_WEATHERS_REQUESTED,
  FETCH_WEATHERS_SUCCESSFULL,
  FETCH_WEATHERS_FAILED
} from "./types";

export const fetchWeathersAction = () => dispatch => {
  dispatch({ type: FETCH_WEATHERS_REQUESTED });
  return fetch(`api.openweathermap.org/data/2.5/weather?q=London`)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch({ type: FETCH_WEATHERS_SUCCESSFULL, weathers: json });
      return json;
    })
    .catch(error => {
      return dispatch({
        type: FETCH_WEATHERS_FAILED,
        weathersError: error
      });
    });
};

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
