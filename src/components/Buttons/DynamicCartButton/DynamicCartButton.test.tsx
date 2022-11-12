import * as reduxHooks from "react-redux";
import {render} from "@testing-library/react";
import DynamicCartButton from "./DynamicCartButton";
import {faker} from "@faker-js/faker";
import {priceColors} from "../../styled/Price";

jest.mock('react-redux')
jest.mock("../InCartButton/InCartButton",
    () => () => <div data-testid='inCartButton'/>)
jest.mock("../ChangeQuantityButton/ChangeQuantityButton",
    () => () => <div data-testid='changeQuantityButton'/>)

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')
const mockedProduct = {
    id           : 1111111111,
    title        : 'lorem',
    remained     : 111,
    image        : faker.image.cats(320, 220, true),
    bgColor      : priceColors.Red,
    averageWeight: '111',
    price        : '1111'
}
const mockedProduct2 = {
    id           : 2222,
    title        : 'lorem2',
    remained     : 2222,
    image        : faker.image.cats(320, 220, true),
    bgColor      : priceColors.Red,
    averageWeight: '2222',
    price        : '2222'
}
const mockedCart = [{
    id           : 1111111111,
    title        : 'lorem',
    quantity     : 2,
    remained     : 111,
    image        : faker.image.cats(320, 220, true),
    bgColor      : priceColors.Red,
    averageWeight: '111',
    price        : '1111'
}]

describe('DynamicCartButton', () => {
    it('Render add in cart button if item not in cart', () => {
        mockedUseSelector.mockReturnValue(mockedCart)
        const {getByTestId, queryByTestId} = render(<DynamicCartButton product={mockedProduct}/>)
        expect(getByTestId('changeQuantityButton')).toBeInTheDocument()
        expect(queryByTestId('inCartButton')).not.toBeInTheDocument()
    })
    it('Render change quantity button if item in cart', () => {
        mockedUseSelector.mockReturnValue(mockedCart)
        const {getByTestId, queryByTestId} = render(<DynamicCartButton product={mockedProduct2}/>)
        expect(queryByTestId('changeQuantityButton')).not.toBeInTheDocument()
        expect(getByTestId('inCartButton')).toBeInTheDocument()
    })
})

