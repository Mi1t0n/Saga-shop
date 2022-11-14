import pagesPaths from "../IHeader";
import RouterLink from "../../Links/RouterLink/RouterLink";
import {useAppSelector} from "hooks/reduxHooks";
import {inCartCountSelector} from "selecors/cartSelectors";

const CartWithValue = () => {
    const inCart = useAppSelector(inCartCountSelector)

    return <RouterLink linkContent={`Cart ${inCart || ''}`} to={pagesPaths.Cart}/>
}

export default CartWithValue;
