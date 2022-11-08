import categoriesWatcher from "./sagas/categories/categoriesWatcher";
import cartWatcher from "./sagas/cart/cartWatcher";
import {spawn} from 'redux-saga/effects'

function* rootWatcher() {
    yield spawn(categoriesWatcher)
    yield spawn(cartWatcher)
}

export default rootWatcher