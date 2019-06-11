import {
  FETCH_COUNTRIES_PENDING,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILED
} from "../constants";

export const fetchCountries = () => dispatch => {
  dispatch({ type: FETCH_COUNTRIES_PENDING });
  fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: FETCH_COUNTRIES_FAILED, payload: error }));
};
