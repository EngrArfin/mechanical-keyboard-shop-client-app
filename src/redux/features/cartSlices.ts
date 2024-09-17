import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define your CartItem type
interface CartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  available_quantity: number;
}

// Define the initial state
interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // If item exists, update the quantity
        const existingItem = state.items[itemIndex];
        const newQuantity = existingItem.quantity + action.payload.quantity;
        if (newQuantity <= existingItem.available_quantity) {
          existingItem.quantity = newQuantity;
        }
      } else {
        // If item doesn't exist, add it to the cart
        state.items.push(action.payload);
      }

      // Update the total amount
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      // Update the total amount
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
