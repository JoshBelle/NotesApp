import { configureStore } from '@reduxjs/toolkit';
import { notesApi } from './apiSlice';
import { filterSlice} from './filterSlice'; 
import { searchSlice } from './searchSlice'; 

const store = configureStore({
    reducer: {
        [notesApi.reducerPath]: notesApi.reducer,
        filter: filterSlice.reducer,
        search: searchSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(notesApi.middleware),
});

export default store;
