import {takeLatest} from "redux-saga/effects";
import {postOrderWorker} from "./cartWorker";
import {postOrder} from "redux/slices/cartSlice/cartSlice";

function* cartWatcher() {
    yield takeLatest(postOrder.type, postOrderWorker)
}

export default cartWatcher