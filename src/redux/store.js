import { configureStore } from "@reduxjs/toolkit";
import { notesApi } from "./apiSlice";


const store = configureStore({
    reducer: {
        [notesApi.reducerPath]: notesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notesApi.middleware)
})

export default store