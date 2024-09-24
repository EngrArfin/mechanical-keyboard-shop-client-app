import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Product type
export type TProduct = {
  _id: string;
  productId: string;
  productName: string;
  rating: number;
  brand: string;
  availableQuantity: number;
  price: number;
  image: string;
};

// Define the initial state type
type TInitialState = {
  products: TProduct[];
};

// Initial state with an empty product list
const initialState: TInitialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Action to add a new product
    addProduct: (state, action: PayloadAction<Omit<TProduct, "_id">>) => {
      // Add new product
      state.products.push({ ...action.payload, _id: Date.now().toString() }); // Generate a unique ID
    },

    // Action to remove a product by id
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },

    // Action to update a product's details by id
    updateProduct: (state, action: PayloadAction<TProduct>) => {
      const index = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (index !== -1) {
        state.products[index] = action.payload; // Update the product details
      }
    },

    // Action to toggle a product's availability
    toggleAvailability: (state, action: PayloadAction<string>) => {
      const product = state.products.find(
        (product) => product._id === action.payload
      );
      if (product) {
        product.availableQuantity = product.availableQuantity > 0 ? 0 : 1; // Toggle availability
      }
    },
  },
});

// Export actions
export const { addProduct, removeProduct, updateProduct, toggleAvailability } =
  productSlice.actions;

// Export the reducer to include in the store
export default productSlice.reducer;
export const productReducer = productSlice.reducer;
