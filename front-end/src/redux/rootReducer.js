import { combineReducers } from "redux";
import subjects from "../reducers/subjects";
import cart from "../reducers/cart";
import app from "../reducers/app";

const appReducer = combineReducers({
  subjects,
  cart,
  app,
});

export default appReducer;
