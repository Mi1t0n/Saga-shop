import axios from "axios";
import {IProductInCart} from "components/Cart/ProductInCart/IProductInCart";

type products = Pick<IProductInCart, 'id' | 'quantity' | 'title'>
const postOrder = (products: products[]) => axios.post('/orders', products)


export {postOrder}