import {priceColors} from "components/styled/Price";
import reducer, {
    addToCart,
    decreaseQuantity,
    deleteItem,
    increaseQuantity,
    postOrder,
    postOrderSuccess
} from './cartSlice'
import {IcartSlice} from "./IcartSlice";
import {IProductInCart} from "components/Cart/ProductInCart/IProductInCart";

describe('categoriesSlice reducers', () => {
    let mockedProduct: IProductInCart
    let mockedState: IcartSlice
    beforeEach(() => {
        mockedProduct = {
            id           : 1111111111,
            title        : 'lorem',
            remained     : 111,
            image        : '12345',
            bgColor      : priceColors.Red,
            averageWeight: '111',
            quantity     : 5,
            price        : '1111'
        }
        mockedState = {loading: false, error: '', products: []}
    })

    it('should return the state', () => {
        const stateAfterCall = reducer(mockedState, {type: 'undefined'})
        expect(stateAfterCall).toEqual(mockedState)
    })

    it('should add product to cart', () => {
        const stateAfterCall = reducer(mockedState, addToCart(mockedProduct)).products

        expect(stateAfterCall).toEqual([mockedProduct])
    })

    it('should increase quantity', () => {
        mockedState.products = [mockedProduct]
        const stateAfterCall = reducer(mockedState, increaseQuantity(1111111111)).products
        mockedProduct.quantity=6

        expect(stateAfterCall).toEqual([mockedProduct])
    })

    it('should increase quantity', () => {
        mockedState.products = [mockedProduct]
        const stateAfterCall = reducer(mockedState, decreaseQuantity(1111111111)).products
        mockedProduct.quantity=4

        expect(stateAfterCall).toEqual([mockedProduct])
    })

    it('should delete product from cart', () => {
        mockedState.products = [mockedProduct]
        const stateAfterCall = reducer(mockedState, deleteItem(1111111111)).products

        expect(stateAfterCall).toEqual([])
    })

    it('should post order', () => {
        const stateAfterCall = reducer(mockedState, postOrder())
        mockedState.loading = true

        expect(stateAfterCall).toEqual(mockedState)
    })

    it('should stop loading after order posted', () => {
        const stateAfterCall = reducer(mockedState, postOrderSuccess())
        mockedState.products = []

        expect(stateAfterCall).toEqual(mockedState)
    })
})