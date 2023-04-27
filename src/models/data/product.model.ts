export interface IProduct {
  id: string;
  barcode: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  brand: string;
  expirationDate: string;
}

export interface IProductForm {
  barcode: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  brand: string;
  expirationDate: string;
}
