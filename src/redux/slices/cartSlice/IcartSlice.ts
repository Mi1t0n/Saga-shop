import {IProductInCart} from "../../../components/Cart/ProductInCart/IProductInCart";


interface IcartSlice {
    loading : boolean
    error   : string
    products: IProductInCart[]
}

export type {IcartSlice}