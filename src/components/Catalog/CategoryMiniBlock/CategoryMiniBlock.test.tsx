import {fireEvent, render, screen} from "@testing-library/react";
import CategoryMiniBlock from "./CategoryMiniBlock";
import testWithRouter from "utils/test/TestWithRouter";

const mockedBlock = {
    img  : '54321',
    title: '12345'
}

describe('CategoryMiniBlock', () => {
    it('Render category block', () => {
        render(testWithRouter(<CategoryMiniBlock  {...mockedBlock}/>))
    })
    it('Route to category', () => {
        const {getByTestId} = render(testWithRouter(<CategoryMiniBlock  {...mockedBlock}/>))

        fireEvent.click(screen.getByTestId('linkto'))
        expect(getByTestId('pathname')).toHaveTextContent('/category/12345')
    })
})