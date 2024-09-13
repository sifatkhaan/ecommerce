import { getBaseUrl } from "@/helper/config/envConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi= createApi({
    reducerPath:'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl: getBaseUrl()}),
    endpoints: ()=> ({})
})