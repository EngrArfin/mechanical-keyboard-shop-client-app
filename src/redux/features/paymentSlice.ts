// src/redux/features/paymentSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PaymentState = {
  clientSecret: string | null;
  error: string | null;
};

const initialState: PaymentState = {
  clientSecret: null,
  error: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setClientSecret: (state, action: PayloadAction<string>) => {
      state.clientSecret = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setClientSecret, setError } = paymentSlice.actions;
export default paymentSlice.reducer;
