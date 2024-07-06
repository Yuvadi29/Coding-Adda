import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const ResourceAPI = createApi({
    reducerPath: 'ResourceAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/',
    }),

    endpoints: (builder) => ({

        // Get Resource
        getResource: builder.query({
            query: (resourceId) => `api/resources/${resourceId}?populate=*`
        }),
    }),
});

export const { useGetResourceQuery } = ResourceAPI;
