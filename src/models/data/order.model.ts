import {IProduct} from './index'

export interface IOrder{
    id: string,
    products: IProduct[]
    userId: string
}

export interface IOrderFormData {
    products: IProduct[]
    userId: string
}