import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import productReducer from "./features/productSlice";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer, // Add baseApi reducer
    cart: cartReducer, // Cart slice
    products: productReducer, // Product slice
    auth: authReducer, // Auth slice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware), // Add baseApi middleware
});

// Infer the RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
