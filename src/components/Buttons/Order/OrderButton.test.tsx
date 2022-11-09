import OrderButton from "./OrderButton";
import {render} from "@testing-library/react";
import React from "react";


describe('OrderButton', () => {
    it('Match snapshot', () => {
        const {asFragment} = render(<OrderButton/>)
        expect(asFragment()).toMatchSnapshot()
    })
})