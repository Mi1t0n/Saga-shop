import {call, put, select} from "redux-saga/effects";
import {postOrder} from "./cartRequest";
import {IProductInCart} from "components/Cart/ProductInCart/IProductInCart";
import {RootState} from "redux/rootStore";
import {postOrderSuccess} from "redux/slices/cartSlice/cartSlice";

function* postOrderWorker() {
    const products: IProductInCart[] = yield select((state: RootState) => state.cart.products);
    const sorted = products.map(({id, quantity, title}) => ({id, quantity, title}))

    yield call(postOrder, sorted)
    yield put(postOrderSuccess())
}

export {postOrderWorker}