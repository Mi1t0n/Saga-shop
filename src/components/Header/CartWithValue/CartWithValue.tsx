import pagesPaths from "../IHeader";
import RouterLink from "../../Links/RouterLink/RouterLink";
import {useAppSelector} from "../../../hooks/reduxHooks";

const CartWithValue = () => {
    const inCart = useAppSelector(state => state.cart.products.length)

    return <RouterLink linkContent={`Cart ${inCart || ''}`} to={pagesPaths.Cart}/>
}

export default CartWithValue;
