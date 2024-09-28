import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../types"; // Import CartItem type

// Define the initial state using CartItem type
interface CartState {
  products: CartItem[];
  selectedItems: number;
  totalPrice: number;
  tax: number;
  taxRate: number;
  grandTotal: number;
}

const initialState: CartState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const isExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; type: string }>
    ) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        if (action.payload.type === "increment") {
          product.quantity += 1;
        } else if (
          action.payload.type === "decrement" &&
          product.quantity > 1
        ) {
          product.quantity -= 1;
        }
      }
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
    },
  },
});

export const { addToCart, updateQuantity, clearCart } = cartSlice.actions;
export const selectTotalPrice = (state: CartState) => state.totalPrice;
export const selectSelectedItems = (state: CartState) => state.selectedItems;
export const selectGrandTotal = (state: CartState) => state.grandTotal;
export default cartSlice.reducer;
