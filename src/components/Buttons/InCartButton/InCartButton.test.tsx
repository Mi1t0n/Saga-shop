import * as reduxHooks from "react-redux";
import * as actions from "redux/slices/cartSlice/cartSlice";
import {fireEvent, render, screen} from "@testing-library/react";
import {find} from "styled-components/test-utils";
import React from "react";
import InCartButton, {InCart} from "./InCartButton";
import {faker} from "@faker-js/faker";
import {priceColors} from "../../styled/Price";

jest.mock('react-redux')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const mockedAddToCart = jest.spyOn(actions, 'addToCart')
const mockedProduct = {
    id           : 1111111111,
    title        : 'lorem',
    remained     : 111,
    image        : faker.image.cats(320, 220, true),
    bgColor      : priceColors.Red,
    averageWeight: '111',
    price        : '1111'
}

describe('InCartButton', () => {
    it('Render button', () => {
        render(<InCartButton product={mockedProduct}/>)
        expect(find(document.body, InCart)).not.toBeNull()
    })

    it('Dispatch post order action', () => {
        const dispatch = jest.fn()
        mockedDispatch.mockReturnValue(dispatch)
        render(<InCartButton product={mockedProduct}/>)
        const button = screen.getByTestId('inCartButton')
        fireEvent.click(button)

        expect(dispatch).toBeCalledTimes(1)
        expect(mockedAddToCart).toBeCalledTimes(1)
        expect(mockedAddToCart).toBeCalledWith({...mockedProduct, quantity: 1})
    })
})