import {FC} from "react";
import {IInCartButton} from "./IInCartButton";
import GreenButton from '../../styled/GreenButton'
import {useAppDispatch} from "hooks/reduxHooks";
import {addToCart} from "redux/slices/cartSlice/cartSlice";
import styled from "styled-components";

const InCart = styled.button`
  padding: 10px 0;
  ${GreenButton}
`

const InCartButton: FC<IInCartButton> = ({product}) => {
    const dispatch = useAppDispatch()
    const addHandler = () => dispatch(addToCart({...product, quantity: 1}))

    return <InCart data-testid='inCartButton' onClick={addHandler}>Add in cart</InCart>
}

export default InCartButton;

export {InCart}
