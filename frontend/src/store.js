import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import  cartSliceReducer  from './slices/cartSlice'


//slices are used in redux to organize state
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat
    (apiSlice.middleware),
    devTools: true,
})


export default store;
