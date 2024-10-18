// src/features/api/baseApi.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base API using createApi
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000", // Your backend server URL
    prepareHeaders: (headers) => {
      // Retrieve the token from localStorage
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // Set the Authorization header with the token
      }
      return headers; // Return the headers with or without the token
    },
  }),
  endpoints: (builder) => ({
    // Fetch all products
    getProducts: builder.query({
      query: () => "/products", // Backend endpoint for fetching products
    }),

    // Fetch all available products (if different from above)
    getAllproducts: builder.query({
      query: () => "/allproducts",
    }),

    // Fetch user's cart data
    getCartData: builder.query({
      query: () => "/carts", // Backend endpoint for fetching cart data
    }),

    // Fetch user data (possibly for profile)
    userData: builder.query({
      query: () => "/users",
    }),

    // User registration
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData, // Send user registration data
      }),
    }),

    // User login
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData, // Send login credentials
      }),
    }),

    // Add an item to the cart
    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: "/cart",
        method: "POST",
        body: cartItem, // Send cart item data
      }),
    }),

    // Remove an item from the cart
    removeFromCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE", // Delete cart item by ID
      }),
    }),

    // Update a cart item
    updateCartItem: builder.mutation({
      query: ({ id, cart }) => ({
        url: `/cart/${id}`,
        method: "PUT",
        body: cart, // Send updated cart data
      }),
    }),

    // Keyboard-specific API endpoints (for your mechanical keyboard shop)

    // Fetch keyboard products
    fetchKeyboardProducts: builder.query({
      query: () => "/menu", // Backend endpoint for fetching keyboard products
    }),

    // Add a new keyboard product
    addKeyboardProduct: builder.mutation({
      query: (keyboardProduct) => ({
        url: "/menu",
        method: "POST",
        body: keyboardProduct, // Send new keyboard product data
      }),
    }),

    // Delete a keyboard product
    deleteKeyboardProduct: builder.mutation({
      query: (productId) => ({
        url: `/menu/${productId}`,
        method: "DELETE", // Delete keyboard product by ID
      }),
    }),
  }),
});

// Export hooks for using the queries and mutations in your React components
export const {
  useGetProductsQuery,
  useGetAllproductsQuery,
  useUserDataQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetCartDataQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateCartItemMutation,
  useFetchKeyboardProductsQuery,
  useAddKeyboardProductMutation,
  useDeleteKeyboardProductMutation,
} = baseApi;

export default baseApi;
