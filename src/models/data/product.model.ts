export interface IProduct {
  id: string;
  barcode: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  brand: string;
  expDate: string;
}

export interface IProductForm {
  barcode: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  brand: string;
  expDate: string;
}
