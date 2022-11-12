import {render, screen} from "@testing-library/react";
import CartWithValue from "./CartWithValue";
import testWithRouter from "utils/test/TestWithRouter";
import * as reduxHooks from "react-redux";

jest.mock('react-redux')
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')
describe('CartWithValue', () => {

    it('Empty cart', () => {
        mockedUseSelector.mockReturnValue(0)
        render(testWithRouter(<CartWithValue/>))

        const link = screen.getByRole('link')
        expect(link).toHaveTextContent('Cart')
    })
    it('Сart quantity shows', () => {
        mockedUseSelector.mockReturnValue(5)
        render(testWithRouter(<CartWithValue/>))

        const link = screen.getByRole('link')
        expect(link).toHaveTextContent('Cart 5')
    })
})