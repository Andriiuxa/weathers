import {
  FETCH_WEATHERS_REQUESTED,
  FETCH_WEATHERS_SUCCESSFULL,
  FETCH_WEATHERS_FAILED
} from "./types";

export const fetchWeathersAction = () => dispatch => {
  dispatch({ type: FETCH_WEATHERS_REQUESTED });
  const singaporeCoordinates = "1.3521,103.8198";
  const dubaiCoordinates = "25.2048,55.2708";
  const indiaCoordinates = "20.5937,78.9629";
  const coordinatesToFetch = [
    singaporeCoordinates,
    dubaiCoordinates,
    indiaCoordinates
  ];

  let requests = coordinatesToFetch.map(
    coordinate =>
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/8b694087caf5c02ca2789c8059f27f91/${coordinate}?units=si&exclude=minutely,hourly,flags,daily,alerts`
      )
    //Yes, i know, there is an API key in the URL, normally it should be assigned to an environmental variable, for I did not bother setting up that for the sake of this demo.
  );

  return Promise.all(requests)
    .then(handleErrors)
    .then(responses => Promise.all(responses.map(r => r.json())))

    .then(data => {
      dispatch({ type: FETCH_WEATHERS_SUCCESSFULL, weathers: data });
      return data;
    })
    .catch(error => {
      return dispatch({
        type: FETCH_WEATHERS_FAILED,
        weathersError: error
      });
    });
};

const handleErrors = responses => {
  Promise.all(
    responses.map(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
    })
  );
  return responses;
};
