export interface IProduct {
  id: string;
  barcode:string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  brand: string;
  expDate:Date;
}

export interface IProductForm {
  barcode:string;
  name: string;
  category: string;
  price: string;
  quantity: string;
}
