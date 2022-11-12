import RouterLink from "./RouterLink";
import {fireEvent, render, screen} from "@testing-library/react";
import testWithRouter from "utils/test/TestWithRouter";
import RouteLocationTest from "../../../utils/test/RouteLocationTest";

describe('RouterLink', () => {
    let asFragment: () => DocumentFragment

    beforeEach(() => {
        asFragment = render(
            testWithRouter(<RouterLink linkContent={'text'} to={'/test'}/>)
        ).asFragment
    })

    it('Render text', () => {
        expect(asFragment()).toHaveTextContent('text')
    })

    it('With path', () => {
        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href')
    })

    it('Changing page', () => {
        const path = screen.getByTestId('pathname')
        const link = screen.getByRole('link')

        fireEvent.click(link)
        expect(path).toHaveTextContent('/test')
    })
})

