import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
/* import { productReducer } from "./features/productSlice"; */
/* import authReducer from "./features/auth/authSlice"; */

import cartReducer from "./features/cartSlice";
import productSlice from "./features/productSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    products: productSlice,
    carts: cartReducer,
    /* auth: authReducer, */
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
