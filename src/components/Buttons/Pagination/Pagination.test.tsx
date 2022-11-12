import Pagination from "./Pagination";
import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

describe('Pagination', () => {
    let increaseButton: HTMLElement, decreaseButton: HTMLElement, page: HTMLElement

    beforeEach(() => {
        render(<Pagination getPage={() => {
        }} maxPage={4}/>)
        increaseButton = screen.getByTestId('increase')
        decreaseButton = screen.getByTestId('decrease')
        page = screen.getByTestId('page')
    })

    it('Pagination begins  from 1', () => {
        expect(page).toHaveTextContent('1')
    })

    it('Increase page', () => {
        expect(page).toHaveTextContent('1')
        fireEvent.click(increaseButton)
        expect(page).toHaveTextContent('2')
    })

    it('Decrease page', () => {
        fireEvent.click(increaseButton)
        expect(page).toHaveTextContent('2')
        fireEvent.click(decreaseButton)
        expect(page).toHaveTextContent('1')
    })

    it('Not going under 0', () => {
        expect(page).toHaveTextContent('1')
        fireEvent.click(decreaseButton)
        expect(page).toHaveTextContent('1')
    })
    it('Not going over max page', () => {
        expect(page).toHaveTextContent('1')

        for (let i = 0; i < 4; i++)
            fireEvent.click(increaseButton)

        expect(page).toHaveTextContent('4')
        fireEvent.click(increaseButton)
        expect(page).toHaveTextContent('4')
    })
})