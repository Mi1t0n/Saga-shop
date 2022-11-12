import RoutesPack from "./RoutesPack";
import {render} from "@testing-library/react";
import testWithRouter from "utils/test/TestWithRouter";
import pagesPaths from "../Header/IHeader";

jest.mock("../Cart/Cart",
    () => () => <div data-testid='cart'/>
)
jest.mock("../Category/Category",
    () => () => <div data-testid='category'/>
)
jest.mock("../Catalog/Catalog",
    () => () => <div data-testid='catalog'/>
)

describe('RoutesPack', () => {
    it('Render catalog', () => {
        const {getByTestId} = render(testWithRouter(<RoutesPack/>, [pagesPaths.Catalog]))
        expect(getByTestId('catalog')).toBeInTheDocument()
    })
    it('Render category', () => {
        const {getByTestId} = render(testWithRouter(<RoutesPack/>, [pagesPaths.Category]))
        expect(getByTestId('category')).toBeInTheDocument()
    })
    it('Render cart', () => {
        const {getByTestId} = render(testWithRouter(<RoutesPack/>, [pagesPaths.Cart]))
        expect(getByTestId('cart')).toBeInTheDocument()
    })
    it('Render 404', () => {
        const {getByText} = render(testWithRouter(<RoutesPack/>))
        expect(getByText(404)).toHaveTextContent('404')
    })
})