import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlices";
import cartReducer from "./slices/cartSlices";
import orderReducer from './slices/orderSlice'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer,
});

export default rootReducer;
