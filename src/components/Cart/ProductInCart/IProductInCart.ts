import {IProduct} from "../../Category/Product/IProduct";

interface IProductInCart extends IProduct{
    quantity:number
}


export type {IProductInCart}