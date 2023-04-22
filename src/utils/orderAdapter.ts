import { IProduct } from "models";

export class OrderAdapter {
  product: IProduct;
  constructor(product: IProduct) {
    this.product = product;
  }

  getName() {
    return this.product.name;
  }

  getBrand() {
    return this.product.brand;
  }

  getCategory() {
    return this.product.category;
  }

  getAmount() {
    return 1; // Always set to 1
  }

  getStock(){
    return this.product.quantity
  }

  getUnitPrice() {
    return this.product.price;
  }

  getSubTotal(){
    return this.product.price 
  }

  getProductId() {
    return this.product.id;
  }
  
}
