import {render} from "@testing-library/react";
import ProductInCart from "./ProductInCart";
import {faker} from "@faker-js/faker";
import {priceColors} from "../../styled/Price";

jest.mock("../../Buttons/ChangeQuantityButton/ChangeQuantityButton",
    () => () => <div data-testid='changeQuantityButton'/>
)
const mockedProduct = {
    id           : 1111111111,
    title        : 'lorem',
    quantity     : 2,
    remained     : 111,
    image        : faker.image.cats(320, 220, true),
    bgColor      : priceColors.Red,
    averageWeight: '111',
    price        : '1111'
}
describe('ProductInCart', () => {
    it('Render product',()=>{
        const {getByTestId} = render(<ProductInCart {...mockedProduct}/>)

        expect(getByTestId('changeQuantityButton')).toBeInTheDocument()
    })
})