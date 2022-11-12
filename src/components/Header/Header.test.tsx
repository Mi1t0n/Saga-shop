import Header from "./Header";
import {render} from "@testing-library/react";
import testWithRouter from "../../utils/test/TestWithRouter";

jest.mock("./CartWithValue/CartWithValue",
    () => () => <div data-testid='cartWithValue'/>
)
describe('Header', () => {
    it('Render without crash', () => {
        const {getByTestId} = render(testWithRouter(<Header/>))
        expect(getByTestId('cartWithValue')).toBeInTheDocument()
    })
})