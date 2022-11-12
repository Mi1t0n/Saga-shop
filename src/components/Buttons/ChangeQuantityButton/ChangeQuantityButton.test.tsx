import * as reduxHooks from "react-redux";
import * as actions from "redux/slices/cartSlice/cartSlice";
import {deleteItem} from "redux/slices/cartSlice/cartSlice";
import {fireEvent, render, screen} from "@testing-library/react";
import ChangeQuantityButton from "./ChangeQuantityButton";

jest.mock('react-redux')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const mockedIncreaseQuantity = jest.spyOn(actions, 'increaseQuantity')
const mockedDecreaseQuantity = jest.spyOn(actions, 'decreaseQuantity')
const mockedDeleteItem = jest.spyOn(actions, 'deleteItem')

describe('ChangeQuantityButton', () => {
    let dispatch: jest.Mock<any, any>
    beforeEach(() => {
        dispatch = jest.fn()
        mockedDispatch.mockReturnValue(dispatch)
    })

    it('Increase quantity', () => {
        render(<ChangeQuantityButton quantity={1} id={1} remained={5}/>)
        fireEvent.click(screen.getByTestId('increase'))

        expect(dispatch).toBeCalledTimes(1)
        expect(mockedIncreaseQuantity).toBeCalledTimes(1)
        expect(mockedIncreaseQuantity).toBeCalledWith(1)
    })
    it('Increase quantity not more then remained', () => {
        render(<ChangeQuantityButton quantity={1} id={1} remained={1}/>)
        for (let i = 0; i < 10; i++) fireEvent.click(screen.getByTestId('increase'))

        expect(dispatch).toBeCalledTimes(0)
        expect(mockedIncreaseQuantity).toBeCalledTimes(0)
    })
    it('Decrease quantity', () => {
        render(<ChangeQuantityButton quantity={4} id={1} remained={5}/>)
        fireEvent.click(screen.getByTestId('decrease'))

        expect(dispatch).toBeCalledTimes(1)
        expect(mockedDeleteItem).toBeCalledTimes(0)
        expect(mockedDecreaseQuantity).toBeCalledTimes(1)
        expect(mockedDecreaseQuantity).toBeCalledWith(1)
    })
    it('Delete item from cart', () => {
        render(<ChangeQuantityButton quantity={1} id={1} remained={5}/>)
        fireEvent.click(screen.getByTestId('decrease'))

        expect(dispatch).toBeCalledTimes(1)
        expect(mockedDeleteItem).toBeCalledTimes(1)
        expect(mockedDeleteItem).toBeCalledWith(1)
        expect(mockedDecreaseQuantity).toBeCalledTimes(0)
    })

})