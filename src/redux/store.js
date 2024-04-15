import { configureStore } from '@reduxjs/toolkit';
import { notesApi } from './apiSlice';
import { filterSlice } from './filterSlice'; // Импортируем reducer из filterSlice

const store = configureStore({
    reducer: {
        [notesApi.reducerPath]: notesApi.reducer,
        filter: filterSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(notesApi.middleware),
});

export default store;
