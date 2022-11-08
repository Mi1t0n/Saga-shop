import {IProductInCart} from "../../Cart/ProductInCart/IProductInCart";


type IChangeQuantityButton = Pick<IProductInCart, 'quantity' | 'id' | 'remained'>


export type {IChangeQuantityButton}