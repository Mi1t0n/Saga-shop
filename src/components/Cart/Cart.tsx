import styled from "styled-components";
import {useAppSelector} from "../../hooks/reduxHooks";
import ProductInCart from "./ProductInCart/ProductInCart";
import OrderButton from "../Buttons/Order/OrderButton";
import {BarLoader} from "react-spinners";
import Error from "../styled/Error";

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
    const {products, error, loading} = useAppSelector(state => state.cart)
    if (loading) return <BarLoader cssOverride={{margin: '10px 0'}} height={5} width={'100%'}/>
    if (error) return <Error>Error : {error}</Error>
    if (!products.length) return <Empty>Cart is empty</Empty>
    return (
        <Wrapper>
            {
                products.map(product => <ProductInCart {...product} key={product.id}/>)
            }
            <OrderButton/>
        </Wrapper>
    );
}

export default Cart;
