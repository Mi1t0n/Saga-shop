import styled from "styled-components";
import {useAppSelector} from "../../hooks/reduxHooks";
import ProductInCart from "./ProductInCart/ProductInCart";
import OrderButton from "../Buttons/Order/OrderButton";
import Error from "../styled/Error";
import Loader from "../styled/Loader";
import {cartSelector} from "../../selecors/cartSelectors";

const Wrapper = styled.div`

  display: grid;
  grid-template-columns: 1fr;
`
const Empty = styled.div`
  text-align: center;
  padding: 30px;
  font-size: 52px;
`

const Cart = () => {
    const {products, error, loading} = useAppSelector(cartSelector)
    if (loading) return <Loader/>
    if (error) return <Error data-testid='error'>Error : {error}</Error>
    if (!products.length) return <Empty>Cart is empty</Empty>
    return (
        <Wrapper data-testid='products'>
            {
                products.map(product => <ProductInCart {...product} key={product.id}/>)
            }
            <OrderButton/>
        </Wrapper>
    );
}

export default Cart;
