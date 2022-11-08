import {takeLatest} from "redux-saga/effects";
import {getCategories, getSubValues} from "../../slices/categoriesSlice/categoriesSlice";
import {CategoriesWorker, subValueWorker} from "./categoriesWorker";

function* categoriesWatcher() {
    yield takeLatest(getCategories.type,CategoriesWorker)
    yield takeLatest(getSubValues.type,subValueWorker)
}

export default categoriesWatcher