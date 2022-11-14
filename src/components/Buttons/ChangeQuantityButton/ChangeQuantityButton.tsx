import GreenButton from '../../styled/GreenButton'
import {FC} from "react";
import {useAppDispatch} from "hooks/reduxHooks";
import {decreaseQuantity, deleteItem, increaseQuantity} from "redux/slices/cartSlice/cartSlice";
import styled from "styled-components";
import {IChangeQuantityButton} from "./IChangeQuantityButton";

const ChangeButton = styled.button`
  padding: 10px 20px;
  ${GreenButton}
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${GreenButton};
`

const ChangeQuantityButton: FC<IChangeQuantityButton> = ({id, quantity, remained}) => {
    const dispatch = useAppDispatch()
    const stillRemained = quantity !== remained
    const cursor = {cursor: stillRemained ? 'pointer' : 'not-allowed'}

    const increase = () => stillRemained && dispatch(increaseQuantity(id))


    const decrease = () => {
        if (quantity === 1) return dispatch(deleteItem(id))
        if (quantity) return dispatch(decreaseQuantity(id))
    }

    return (
        <Wrapper>
            <ChangeButton data-testid='increase' onClick={increase} style={cursor}>+</ChangeButton>
            <h4>{quantity}</h4>
            <ChangeButton data-testid='decrease' onClick={decrease}>-</ChangeButton>
        </Wrapper>
    );
}

export default ChangeQuantityButton;
