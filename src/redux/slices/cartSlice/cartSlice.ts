import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IcartSlice} from "./IcartSlice";
import {IProductInCart} from "components/Cart/ProductInCart/IProductInCart";

const initialState: IcartSlice = {
    loading : false,
    error   : '',
    products: []
}

const cartSlice = createSlice({
    name    : 'cart',
    initialState,
    reducers: {
        addToCart       : (state, {payload}: PayloadAction<IProductInCart>) => {
            state.products.push(payload)
        },
        increaseQuantity: (state, {payload: itemID}: PayloadAction<number>) => {
            const item = state.products.find(({id}) => id === itemID)
            item && item.quantity++
        },
        decreaseQuantity: (state, {payload: itemID}: PayloadAction<number>) => {
            const item = state.products.find(({id}) => id === itemID)
            item && item.quantity--
        },
        deleteItem      : (state, {payload: itemID}: PayloadAction<number>) => {
            const index = state.products.findIndex(({id}) => id === itemID)
            state.products.splice(index, 1)
        },
        postOrder       : (state) => {
            state.loading = true
            state.error = ''
        },
        postOrderSuccess: (state) => {
            state.loading = false
            state.products = []
        },
    },
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    postOrder,
    postOrderSuccess
} = cartSlice.actions
export default cartSlice.reducer;