import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlices";
import cartReducer from "./slices/cartSlices";
import globalReducer from "./slices/globalSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  global:globalReducer,
});

export default rootReducer;
