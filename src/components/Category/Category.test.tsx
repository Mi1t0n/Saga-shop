import * as reduxHooks from "react-redux";
import {faker} from "@faker-js/faker";
import {render} from "@testing-library/react";
import Category from "./Category";
import testWithTheme from "../../utils/test/TestWithTheme";
import {priceColors} from "../styled/Price";

jest.mock('react-redux')
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')
const mockedSubValues = [
    {
        id           : 1111,
        title        : '1111',
        remained     : 1111,
        image        : faker.image.cats(320, 220, true),
        bgColor      : priceColors.Red,
        averageWeight: '1111',
        price        : '1111'
    },
    {
        id           : 2222,
        title        : '2222',
        remained     : 2222,
        image        : faker.image.cats(320, 220, true),
        bgColor      : priceColors.Red,
        averageWeight: '2222',
        price        : '2222'
    }]

jest.mock("../Buttons/Pagination/Pagination",
    () => () => <div data-testid='pagination'/>
)
jest.mock("./Product/Product",
    () => () => <div data-testid='product'/>
)
describe('Category', () => {
    it('Render products', () => {
        mockedUseSelector.mockReturnValue({loading: false, error: '', subValues: mockedSubValues})

        const {getAllByTestId, getByTestId} = render(testWithTheme(<Category/>))

        expect(getByTestId('pagination')).toBeInTheDocument()
        expect(getAllByTestId('product').length).toBe(2)
    })
    it('Render Loader', () => {
        mockedUseSelector.mockReturnValue({loading: true, error: '', subValues: []})

        const {getByTestId} = render(testWithTheme(<Category/>))
        expect(getByTestId('pagination')).toBeInTheDocument()
        expect(getByTestId('loader')).toBeInTheDocument()
    })
    it('Render Error', () => {
        mockedUseSelector.mockReturnValue({loading: false, error: '12345', subValues: []})
        const {queryByTestId, getByText} = render(testWithTheme(<Category/>))

        expect(queryByTestId('pagination')).not.toBeInTheDocument()
        expect(getByText('Error : 12345')).toBeInTheDocument()
    })
})