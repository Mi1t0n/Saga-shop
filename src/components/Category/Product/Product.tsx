import styled from "styled-components";
import {FC} from "react";
import {IProduct} from "./IProduct";
import DynamicCartButton from "../../Buttons/DynamicCartButton/DynamicCartButton";
import toUpper from "utils/toUpper/toUpper";
import SmallGrey from 'components/styled/SmallGrey'
import Price from 'components/styled/Price'

const Wrapper = styled.div`
  display: grid;
  gap: 6px;
  width: 320px;
`
const Image = styled.img`
  height: 220px;
  border-radius: 10px;
`

const Product: FC<IProduct> = (product) => {
    const {image, averageWeight, title, remained, price, bgColor} = product
    return (
        <Wrapper>
            <Image src={image} alt={'Product image'} loading={"lazy"}/>
            <SmallGrey>~{averageWeight} gr</SmallGrey>
            <h3>{toUpper(title)}</h3>
            <SmallGrey>Left in stock : {remained}</SmallGrey>
            <Price bgColor={bgColor}>{price} $</Price>
            <DynamicCartButton product={product}/>
        </Wrapper>
    )
}

export default Product;
