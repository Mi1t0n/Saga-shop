import {call, put} from "redux-saga/effects";
import {setCategories, setError, setSubValues} from "redux/slices/categoriesSlice/categoriesSlice";
import {ICategoryMiniBlock} from "components/Catalog/CategoryMiniBlock/ICategoryMiniBlock";
import {AxiosError, AxiosResponse} from "axios";
import {requestCategories, requestSubValues} from "./categoriesRequest";
import {IProduct} from "components/Category/Product/IProduct";
import {Action} from "@reduxjs/toolkit";
import {Ipagination} from "redux/slices/categoriesSlice/IcategoriesSlice";

function* CategoriesWorker() {
    try {
        const {data}: AxiosResponse<ICategoryMiniBlock[]> = yield call(requestCategories)

        yield put(setCategories(data))
    } catch (error) {
        const _error = error as AxiosError
        yield put(setError(_error.message))
    }
}

interface TaskAction extends Action {
    payload: Ipagination
}

function* subValueWorker({payload:{type, page, limit}}: TaskAction) {
    try {
        const {data}: AxiosResponse<IProduct[]> = yield call(requestSubValues,type, page, limit)

        yield put(setSubValues(data))
    } catch (error) {
        const _error = error as AxiosError
        yield put(setError(_error.name))
    }
}

export {CategoriesWorker, subValueWorker}