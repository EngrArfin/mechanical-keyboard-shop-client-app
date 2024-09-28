import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }), // Backend URL
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getLogin: builder.query({
      query: () => ({
        url: "/login",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetLoginQuery } = baseApi;

/* getTodos: builder.query({
  query: () => ({
    url: "/tasks",
    method: "GET",
  }),
}),
getProducts: builder.query({
  query: () => ({
    url: "/products",
    method: "GET",
  }),
}), */
