import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";


//slices are used in redux to organize state
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat
    (apiSlice.middleware),
    devTools: true,
})


export default store;
