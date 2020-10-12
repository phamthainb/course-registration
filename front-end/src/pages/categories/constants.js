//api endpoint
export const API_ENDPOINT = process.env.REACT_APP_API;

//action
export const FETCH_SUBJECTS_SUCCESS = "FETCH_SUBJECTS_SUCCESS";
export const FETCH_SUJBECTS_FAILED = "FETCH_SUJBECTS_FAILED";
export const UPDATE_CART = "UPDATE_CART";

//message
export const ADD_TO_CART_SUCCESSFUL = "Add to cart successfully"
export const SAVE_SUCCESSFUL = "Saved to database"
export const LOGIN_SUCCESSFUL = "Login successfully"
export const LOGIN_FAILED = "Invalid user !"


//day
export const START_DAY = new Date(2020, 8, 7).getTime();
export const CURRENT_DAY = new Date().getTime();

//url
export const AUTHENTICATE = "api/user/authenticate";