import {takeLatest,debounce} from "redux-saga/effects";
import {getCategories, getSubValues} from "../../slices/categoriesSlice/categoriesSlice";
import {CategoriesWorker, subValueWorker} from "./categoriesWorker";

function* categoriesWatcher() {
    yield takeLatest(getCategories.type,CategoriesWorker)
    yield debounce(1000,getSubValues.type,subValueWorker)
}

export default categoriesWatcher