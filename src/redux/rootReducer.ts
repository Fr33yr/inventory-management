import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer, cartReducer } from "./slices";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
