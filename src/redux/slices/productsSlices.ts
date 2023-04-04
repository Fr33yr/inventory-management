import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models";

export interface IproductsState {
  products: IProduct[];
  filteredProducts: IProduct[];
  selectedCategory: string;
}

const initialState: IproductsState = {
  products: [],
  filteredProducts: [],
  selectedCategory: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<IProduct[]>) => {
      return {
        ...state,
        products: action.payload,
        filteredProducts: [...action.payload],
      };
    },
    addCategory: (state, action: PayloadAction<string>) => {
      return{
        ...state,
        selectedCategory: action.payload
      }
    },
    flterByCategory: (state) => {
      if (state.selectedCategory === "" || state.selectedCategory === "all") {
        return {
          ...state,
          filteredProducts: [...state.products],
        };
      } else {
        let newArray = state.products.filter(
          (item: IProduct) => item.category === state.selectedCategory
        );
        return {
          ...state,
          filteredProducts: newArray,
        };
      }
    },
  },
});

export const { setAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
