// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const notesApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3400/' }),
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: (category) => {
                if (category === '') {
                    return '/notes'
                }
                return `/notes?category=${category}`
            },
            providesTags: ['Notes'],
        }),
        searchNotes: builder.query({
            query: (search) => `/notes?q=${search}`,
            providesTags: ['/notes'],
            
        }),
    }),
});

export const { useGetNotesQuery, useSearchNotesQuery } = notesApi;
