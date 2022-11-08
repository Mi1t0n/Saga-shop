import styled from "styled-components";
import GreenButton from "../../styled/GreenButton";
import {useAppDispatch} from "hooks/reduxHooks";
import {postOrder} from "redux/slices/cartSlice/cartSlice";
import {ButtonHTMLAttributes, FC} from "react";

const Button = styled.button`
  cursor: pointer;
  height: 50px;
  margin-bottom: 20px;
  ${GreenButton}
`

const OrderButton:FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({...arg}) => {
    const dispatch = useAppDispatch()
    const postHandler = () => dispatch(postOrder())

    return <Button onClick={postHandler} {...arg}>Order</Button>
}

export default OrderButton;
