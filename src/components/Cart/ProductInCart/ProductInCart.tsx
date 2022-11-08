import {FC} from "react";
import {IProductInCart} from "./IProductInCart";
import styled from "styled-components";
import toUpper from "utils/ToUpper";
import SmallGrey from 'components/styled/SmallGrey'
import Price from 'components/styled/Price'
import ChangeQuantityButton from "../../Buttons/ChangeQuantityButton/ChangeQuantityButton";

const Wrapper = styled.section`
  padding: 20px;
  display: grid;
  grid-template-columns: 125px 1fr;
  grid-template-rows:1fr 1fr;
  grid-column-gap: 15px;
  height: 100px;
  align-items: center;
`
const MiniIMG = styled.img`
  width: 125px;
  grid-row: 1/3;
  border-radius: 10px;
`
const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Red = styled.span`
  color: rgba(255, 0, 0, 0.6);
`

const ProductInCart: FC<IProductInCart> = ({id, remained, quantity, bgColor, image, price, averageWeight, title}) =>
    <Wrapper>
        <MiniIMG src={image} alt={'Product image'}/>
        <Block>
            <h4>{toUpper(title)}<SmallGrey>(~{averageWeight} gr)</SmallGrey></h4>
            <p>Left in stock :<Red>{remained}</Red></p>
        </Block>
        <Block>
            <Price bgColor={bgColor}>{price}$</Price>
            <ChangeQuantityButton quantity={quantity} id={id} remained={remained}/>
        </Block>
    </Wrapper>


export default ProductInCart;
