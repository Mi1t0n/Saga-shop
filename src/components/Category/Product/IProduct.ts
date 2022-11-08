import {priceColors} from "../../styled/Price";


interface IProduct {
    id: number
    image: string
    averageWeight: string
    title: string
    remained: number
    price: string
    bgColor: priceColors
}

export {priceColors}
export type {IProduct}