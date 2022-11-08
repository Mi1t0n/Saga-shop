import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootWatcher from "./rootWatcher";
import cartSlice from "./slices/cartSlice/cartSlice";
import categoriesSlice from "./slices/categoriesSlice/categoriesSlice";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer   : {
        cart: cartSlice,
        categories: categoriesSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
