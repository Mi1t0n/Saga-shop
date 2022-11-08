import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IcategoriesSlice, Ipagination} from "./IcategoriesSlice";
import {ICategoryMiniBlock} from "components/Catalog/CategoryMiniBlock/ICategoryMiniBlock";
import {IProduct} from "components/Category/Product/IProduct";


const initialState: IcategoriesSlice = {
    loading   : true,
    error     : '',
    categories: [],
    subValues : []
}

const categoriesSlice = createSlice({
    name    : 'categories',
    initialState,
    reducers: {
        getCategories: (state) => {
            state.loading = true
            state.error = ''
        },
        setCategories: (state, {payload}: PayloadAction<ICategoryMiniBlock[]>) => {
            state.categories = payload
            state.loading = false
        },
        getSubValues : (state, {payload}: PayloadAction<Ipagination>) => {
            state.loading = true
            state.error = ''
        },
        setSubValues : (state, {payload}: PayloadAction<IProduct[]>) => {
            state.subValues = payload
            state.loading = false
        },
        setError     : (state, {payload}: PayloadAction<string>) => {
            state.loading = false
            state.error = payload
        },
    }
});

export const {getCategories, setCategories, setSubValues, getSubValues,setError} = categoriesSlice.actions
export default categoriesSlice.reducer;