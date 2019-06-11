import { combineReducers } from "redux";
import countryReducer from "../Reducers/countryReducer";

export default combineReducers({ countries: countryReducer });
