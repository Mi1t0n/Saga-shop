import {faker} from "@faker-js/faker";
import {priceColors} from "../../styled/Price";
import {render} from "@testing-library/react";
import Product from "./Product";

jest.mock("../../Buttons/DynamicCartButton/DynamicCartButton",
    () => () => <div data-testid='dynamicButton'/>
)
const mockedProduct = {
    id           : 1111111111,
    title        : 'lorem',
    remained     : 111,
    image        : faker.image.cats(320, 220, true),
    bgColor      : priceColors.Red,
    averageWeight: '111',
    price        : '1111'
}

describe('Product', () => {
    it('Render product', () => {
        const {getByTestId} = render(<Product {...mockedProduct}/>)
        expect(getByTestId('dynamicButton')).toBeInTheDocument()
    })
})