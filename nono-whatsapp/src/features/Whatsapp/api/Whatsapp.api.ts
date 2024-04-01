import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from '@reduxjs/toolkit/query/react'

const mainBaseQuery = fetchBaseQuery({
    baseUrl: ``,
  });
  
export const WhatsappApi = createApi({
    baseQuery: mainBaseQuery,
    reducerPath: 'WhatsAppApi',
    tagTypes: ['whatsAppApi'],
    endpoints: () => ({
        
    }),
});

