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
    barcode: 0,
    name: "",
    category: "",
    price: 0,
    stock: 0,
    brand: "",
    expirationDate: "",
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
      let objectIndex = state.products.findIndex((item) => item.id === action.payload.id)
      let productsCopy = [...state.products]
      if(objectIndex !== -1){
        productsCopy[objectIndex] = action.payload
      }
      console.log(action.payload)
      return{
        ...state,
        products: productsCopy
      }
    },
    setProduct:(state, action: PayloadAction<IProduct>)=>{
      return{
        ...state,
        product: action.payload
      }
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
  setProduct,
  addProduct,
  removeProduct,
  updateProduct,
  clearProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
