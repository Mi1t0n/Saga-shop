import factorySelector from "./factory";

export const inCartCountSelector = factorySelector(state => state.cart.products.length)
export const productsSelector = factorySelector(state => state.cart.products)
export const cartSelector = factorySelector(state => state.cart)
