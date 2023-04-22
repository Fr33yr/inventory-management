import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, OrderProduct } from "models";
import { OrderAdapter } from "../../utils/orderAdapter";


export interface IOrderState {
  products: OrderProduct[];
  total: number;
}

const initialState: IOrderState = {
  products: [],
  total: 0,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      const orderAdapter = new OrderAdapter(action.payload);
      const resultObject: OrderProduct = {
        name: orderAdapter.getName(),
        brand: orderAdapter.getBrand(),
        category: orderAdapter.getCategory(),
        amount: orderAdapter.getAmount(),
        stock: orderAdapter.getStock(),
        unitPrice: orderAdapter.getUnitPrice(),
        subTotal: orderAdapter.getSubTotal(),
        productId: orderAdapter.getProductId(),
      };
      return {
        ...state,
        products: state.products.concat(resultObject),
      };
    },
    setAmount: (state, action) => {
      let { id, amount } = action.payload;
      return {
        ...state,
        products: state.products.map((obj: OrderProduct) => {
          if (obj.productId === id) {
            return { ...obj, amount: amount, subTotal: amount * obj.unitPrice};
          } else {
            return obj;
          }
        }),
      };
    },
    removeItem: (state, action) => {
      let filteredItems = state.products.filter(
        (ele: OrderProduct) => ele.productId !== action.payload
      );
      return {
        ...state,
        products: filteredItems,
      };
    },
    setTotal: (state, action) => {
      return {
        ...state,
        total: action.payload,
      };
    },
    resetOrder: (state, action) => {
      return {
        ...state,
        products: initialState.products,
        total: initialState.total,
      };
    },
  },
});

export const { addItem, setAmount, removeItem, setTotal, resetOrder } =
  orderSlice.actions;

export default orderSlice.reducer;