/* import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for each item in the cart
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Define the type for the cart state
export interface CartState {
  items: CartItem[]; // 'items' should be an array of cart items
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [], // Initialize 'items' as an empty array
  totalQuantity: 0,
  totalPrice: 0,
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to the cart
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    // Remove item from the cart
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer; // Export the reducer
 */
