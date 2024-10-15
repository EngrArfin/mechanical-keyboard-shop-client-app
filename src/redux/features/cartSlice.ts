// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the CartState type
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  products: Product[];
  selectedItems: number;
  totalPrice: number;
  tax: number;
  taxRate: number;
  grandTotal: number;
}

// Define the initial state using CartState type
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
    addToCart: (state, action: PayloadAction<Product>) => {
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
      action: PayloadAction<{ id: string; type: "increment" | "decrement" }>
    ) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity += action.payload.type === "increment" ? 1 : -1;
        }
        return product;
      });
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },

    /* Delete cart */
    removeFromCart: (state, action) => {
      // Remove the product from the products array
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
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

export const selectSelectedItems = (state: CartState) =>
  state.products.reduce((total, product) => total + product.quantity, 0);

export const selectTotalPrice = (state: CartState) =>
  state.products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

export const selectTax = (state: CartState) =>
  selectTotalPrice(state) * state.taxRate;

export const selectGrandTotal = (state: CartState) =>
  selectTotalPrice(state) + selectTax(state);

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
