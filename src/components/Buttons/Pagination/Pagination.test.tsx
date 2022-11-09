import Pagination from "./Pagination";
import {render, screen} from "@testing-library/react";
import React from "react";

describe('Pagination', () => {

    beforeEach(() => {
        render(
            <Pagination page={1} next={() => {
            }} prev={() => {
            }}/>
        )
    })

    it('Match snapshot', () => {
        const {asFragment} = render(<Pagination page={1} next={() => {
        }} prev={() => {
        }}/>)
        expect(asFragment()).toMatchSnapshot()
    })
    it('Initial page 1', () => {
        expect(screen.getByTestId('page')).toHaveTextContent('1')
    })
    it('Increase page', () => {
        expect(screen.getByTestId('increase')).toBeInTheDocument()
    })
    it('Decrease page', () => {
        expect(screen.getByTestId('decrease')).toBeInTheDocument()
    })

})