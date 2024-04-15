// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const notesApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3400/' }),
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: (category) => `/notes?category=${category}`,
            providesTags: ['Notes'],
        }),
        searchNotes: builder.query({
            query: (searchValue) => `/notes?q=${searchValue}`,
            providesTags: ['Notes'],
        }),
    }),

});


export const { useGetNotesQuery, useSearchNotesQuery } = notesApi;
