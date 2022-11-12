import * as reduxHooks from "react-redux";
import randomID from "utils/randomID/randomID";
import {faker} from "@faker-js/faker";
import {render, screen} from "@testing-library/react";
import Catalog from "./Catalog";
import testWithTheme from "../../utils/test/TestWithTheme";

jest.mock('react-redux')
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const mockedCategories = [
    {
        id   : randomID(),
        img  : faker.image.food(320, 220, true),
        title: 'Food'
    },
    {
        id   : randomID(),
        img  : faker.image.abstract(320, 220, true),
        title: 'Abstract'
    },
    {
        id   : randomID(),
        img  : faker.image.cats(320, 220, true),
        title: 'Cats'
    },
    {
        id   : randomID(),
        img  : faker.image.city(320, 220, true),
        title: 'City'
    }
]
jest.mock("./CategoryMiniBlock/CategoryMiniBlock",
    () => () => <div data-testid='categoryMiniBlock'/>
)

describe('Catalog', () => {
    let dispatch: jest.Mock<any, any>

    beforeEach(() => {
        dispatch = jest.fn()
        mockedDispatch.mockReturnValue(dispatch)
    })

    it('Render categories', () => {
        mockedUseSelector.mockReturnValue({loading: false, error: '', categories: mockedCategories})
        const {getAllByTestId} = render(testWithTheme(<Catalog/>))

        expect(getAllByTestId('categoryMiniBlock').length).toBe(4)
    })
    it('Render Loader', () => {
        mockedUseSelector.mockReturnValue({loading: true, error: '', categories: []})
        render(<Catalog/>)

        expect(screen.getByTestId('loader')).toBeInTheDocument()
    })
    it('Render Error', () => {
        mockedUseSelector.mockReturnValue({loading: false, error: '12345', categories: []})
        render(<Catalog/>)

        expect(screen.getByText('Error : 12345')).toHaveTextContent('Error : 12345')
    })
})