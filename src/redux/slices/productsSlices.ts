import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/data/index";

export interface IproductsState {
  products: IProduct[];
  product: IProduct;
}

const initialState: IproductsState = {
  products: [],
  product: {
    id: "",
    barcode: "",
    name: "",
    category: "",
    price: 0,
    quantity: 0,
    brand: "",
    expDate: "",
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<IProduct[]>) => {
      return {
        ...state,
        products: action.payload,
      };
    },
    addProduct: (state, action: PayloadAction<IProduct>) => {
      return {
        ...state,
        products: state.products.concat([action.payload]),
      };
    },
    removeProduct: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    updateProduct: (state, action: PayloadAction<IProduct>) => {
      return {
        ...state,
        product: action.payload,
      };
    },
    clearProduct: (state) => {
      return {
        ...state,
        product: initialState.product,
      };
    },
  },
});

export const {
  setAllProducts,
  addProduct,
  removeProduct,
  updateProduct,
  clearProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
