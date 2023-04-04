import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, IProduct } from "../../models";

export interface ICartState {
  products: ICartItem[];
}

const initialState: ICartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOneProduct: (state, action: PayloadAction<ICartItem>) => {
      const index = state.products.findIndex(
        (item: ICartItem) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index].amount += 1;
      } else {
        return {
          ...state,
          products: state.products.concat({ ...action.payload, amount: 1 }),
        };
      }
    },
    decreaseAmount: (state, action) => {
      const index = state.products.findIndex(
        (item: ICartItem) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index].amount -= 1;
      } else {
        return {
          ...state,
        };
      }
    },
    removeCartItem: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    reset: (state, action) => {
      return {
        ...state,
        products: initialState.products,
      };
    },
  },
});

export const { reset, addOneProduct, decreaseAmount } = cartSlice.actions;

export default cartSlice.reducer;
