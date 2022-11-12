import InCartButton from "../InCartButton/InCartButton";
import ChangeQuantityButton from "../ChangeQuantityButton/ChangeQuantityButton";
import {FC} from "react";
import {IDynamicCartButton} from "./IDynamicCartButton";
import {useAppSelector} from "hooks/reduxHooks";

const DynamicCartButton: FC<IDynamicCartButton> = ({product}) => {
    const {id,remained} = product
    const products = useAppSelector(state => state.cart.products)
    const item = products.find(product => product.id === id)

    return item ?
        <ChangeQuantityButton quantity={item.quantity}  remained={remained} id={id}/>
        :
        <InCartButton product={product} />
}

export default DynamicCartButton;
