import {render, screen} from "@testing-library/react";
import Cart from "./Cart";
import * as reduxHooks from "react-redux";
import {faker} from "@faker-js/faker";
import {priceColors} from "../styled/Price";

jest.mock('react-redux')
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')
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

describe('Cart', () => {
    it('Show loader', () => {
        mockedUseSelector.mockReturnValue({loading: true, error: '', products: []})
        render(<Cart/>)

        expect(screen.getByTestId('loader')).toBeInTheDocument()
    })
    it('Show error', () => {
        mockedUseSelector.mockReturnValue({loading: false, error: '12345', products: []})
        render(<Cart/>)

        expect(screen.getByTestId('error')).toHaveTextContent('Error : 12345')
    })
    it('Show products', () => {
        mockedUseSelector.mockReturnValue({loading: false, error: '', products: mockedCart})
          render(<Cart/>)

        expect(screen.getByTestId('products')).toBeInTheDocument()
    })
    it('Show empty cart', () => {
        mockedUseSelector.mockReturnValue({loading: false, error: '', products: []})
        render(<Cart/>)

        expect(screen.getByText('Cart is empty')).toBeInTheDocument()
    })
})