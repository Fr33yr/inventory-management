export interface IProduct {
  id: string;
  barcode:string;
  name: string;
  category: string;
  price: number;
  quantity: string;
  image: string;
  brand: string
}

export interface IProductForm {
  barcode:string;
  name: string;
  category: string;
  price: string;
  quantity: string;
  image: string;
}
