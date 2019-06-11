import {
  FETCH_COUNTRIES_PENDING,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILED
} from "../constants";

const initialCountryState = {
  countries: [],
  isPending: false,
  error: ""
};

export default (state = initialCountryState, action = {}) => {
  switch (action.type) {
    case FETCH_COUNTRIES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case FETCH_COUNTRIES_SUCCESS:
      return Object.assign({}, state, {
        countries: action.payload,
        isPending: false
      });
    case FETCH_COUNTRIES_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });
    default:
      return state;
  }
};
