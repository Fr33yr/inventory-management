import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlices";
import cartReducer from "./slices/cartSlices";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
