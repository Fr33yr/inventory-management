export interface OrderProduct {
  name: string;
  amount: number;
  stock: number
  unitPrice: number;
  subTotal: number;
  productId: string;
  brand: string;
  category: string;
}

export interface IOrder {
  products: OrderProduct[];
  total: number
}
