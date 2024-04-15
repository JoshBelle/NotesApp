    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const notesApi = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3400/' }),
        endpoints: (builder) => ({
            getNotes: builder.query({
                query: () => '/notes',
                providesTags: ['Notes']
            }),
        }),
    });

    export const { useGetNotesQuery } = notesApi;
