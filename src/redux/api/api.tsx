import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: (args, api, extraOptions) => {
    const token = localStorage.getItem("token"); // Retrieve the token from local storage

    return fetchBaseQuery({
      baseUrl: "http://localhost:5000", // Your backend URL
      prepareHeaders: (headers) => {
        if (token) {
          headers.set("Authorization", `Bearer ${token}`); // Set token in headers
        }
        return headers;
      },
    })(args, api, extraOptions);
  },
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products", // Get products endpoint
    }),

    getAllproducts: builder.query({
      query: () => "/allproducts", // Get products endpoint
    }),
    getCartData: builder.query({
      query: () => "/carts", // Get cart data endpoint
    }),
    userData: builder.query({
      query: () => "/users", // Get user data endpoint
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/register", // Register user endpoint
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login", // Login user endpoint
        method: "POST",
        body: loginData,
      }),
    }),

    /* -------------- */
    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: "/cart",
        method: "POST",
        body: cartItem,
      }),
    }),
    removeFromCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
    }),
    updateCartItem: builder.mutation({
      query: ({ id, cart }) => ({
        url: `/cart/${id}`,
        method: "PUT",
        body: cart,
      }),
    }),

    /*  ------ */
  }),
});

// Export hooks for using the defined queries and mutations
export const {
  useGetProductsQuery,
  useGetAllproductsQuery,
  useUserDataQuery,
  useLoginUserMutation,
  useRegisterUserMutation,

  useGetCartDataQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateCartItemMutation,
} = baseApi;
