// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const notesApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3400/' }),
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: (category, search) => {
                if (category === '') {
                    return '/notes';
                }
                return `/notes?category=${category}&&q=Meeting`;
            },
            providesTags: ['Notes'],
        }),
        addNotes: builder.mutation({
            query: (newNote) => ({
                url: '/notes',
                method: 'POST',
                body: newNote
            }),
            providesTags: ['Notes'],
        }),
        deleteNote: builder.mutation({
            query: (noteId) => ({
                url: `/notes/${noteId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Notes'],
        }),
    }),
});

export const { useGetNotesQuery, useAddNotesMutation, useDeleteNoteMutation } = notesApi;
