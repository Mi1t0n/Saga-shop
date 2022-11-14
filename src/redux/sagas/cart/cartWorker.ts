import {call, put, select} from "redux-saga/effects";
import {postOrder} from "./cartRequest";
import {IProductInCart} from "components/Cart/ProductInCart/IProductInCart";
import {postOrderSuccess} from "redux/slices/cartSlice/cartSlice";
import {productsSelector} from "selecors/cartSelectors";

function* postOrderWorker() {
    const products: IProductInCart[] = yield select(productsSelector);

    const readyToPost = products.map(({id, quantity, title}) => ({id, quantity, title}))

    yield call(postOrder, readyToPost)
    yield put(postOrderSuccess())
}

export {postOrderWorker}