import {postOrderWorker} from "./cartWorker";
import {call, put, select} from "redux-saga/effects";
import {priceColors} from "components/styled/Price";
import {postOrder} from "./cartRequest";
import {postOrderSuccess} from "redux/slices/cartSlice/cartSlice";
import {productsSelector} from "selecors/cartSelectors";

describe('cart Workers', () => {
    it('postOrderWorker', () => {
        const generator = postOrderWorker()
        const mockedProducts = [
            {
                id           : 1,
                title        : 'lorem',
                remained     : 111,
                image        : '12345',
                bgColor      : priceColors.Red,
                averageWeight: '111',
                quantity     : 5,
                price        : '1111'
            },
            {
                id           : 2,
                title        : 'lorem2',
                remained     : 222,
                image        : '12345',
                bgColor      : priceColors.Blue,
                averageWeight: '111',
                quantity     : 25,
                price        : '1111'
            }
        ]
        const selector = select(productsSelector)
        const productsFromStore = generator.next().value
        expect(productsFromStore).toEqual(selector)

        const mockedReadyToPost = [
            {id: 1, quantity: 5, title: "lorem"},
            {id: 2, quantity: 25, title: "lorem2"}
        ]
        const readyToPost = generator.next(mockedProducts).value
        expect(readyToPost).toEqual(call(postOrder, mockedReadyToPost))

        const successFlag = generator.next().value
        expect(successFlag).toEqual(put(postOrderSuccess()))

        const done = generator.next().done
        expect(done).toBe(true)
    })
})