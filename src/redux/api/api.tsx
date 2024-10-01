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

    cartData: builder.query({
      query: () => ({
        url: "/carts",
        method: "GET",
      }),
    }),
    userData: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),

    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useUserDataQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = baseApi;
