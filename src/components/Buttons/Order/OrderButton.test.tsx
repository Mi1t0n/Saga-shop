import OrderButton, {Button} from "./OrderButton";
import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import {find} from "styled-components/test-utils";
import * as reduxHooks from "react-redux";
import * as actions from "redux/slices/cartSlice/cartSlice";

jest.mock('react-redux')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const mockedPostOrder = jest.spyOn(actions, 'postOrder')

describe('OrderButton', () => {
    it('Render button', () => {
        render(<OrderButton/>)
        expect(find(document.body, Button)).not.toBeNull()
    })

    it('Dispatch post order action', () => {
        const dispatch = jest.fn()
        mockedDispatch.mockReturnValue(dispatch)
        render(<OrderButton/>)
        const button = screen.getByTestId('button')
        fireEvent.click(button)
        expect(dispatch).toBeCalledTimes(1)
        expect(mockedPostOrder).toBeCalledTimes(1)
    })
})