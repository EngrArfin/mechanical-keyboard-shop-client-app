import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Product type
export type TProduct = {
  _id: string; // Unique identifier for the product
  productId: string; // Identifier for the product
  productName: string; // Name of the product
  rating: number; // Rating of the product
  brand: string; // Brand of the product
  availableQuantity: number; // Quantity available
  price: number; // Price of the product
  image: string; // Image URL of the product
};

// Define the initial state type
type TInitialState = {
  products: TProduct[]; // Array of products
};

// Initial state with an empty product list
const initialState: TInitialState = {
  products: [],
};

// Create the product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Action to set products from API
    setProducts: (state, action: PayloadAction<TProduct[]>) => {
      state.products = action.payload; // Set products to the state
    },

    // Action to add a new product
    addProduct: (state, action: PayloadAction<Omit<TProduct, "_id">>) => {
      const newProduct: TProduct = {
        ...action.payload,
        _id: Date.now().toString(), // Generate a unique ID
      };
      state.products.push(newProduct); // Add new product to the state
    },

    // Action to remove a product by id
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload // Remove product based on id
      );
    },

    // Action to update a product's details by id
    updateProduct: (state, action: PayloadAction<TProduct>) => {
      const index = state.products.findIndex(
        (product) => product._id === action.payload._id // Find product by id
      );
      if (index !== -1) {
        state.products[index] = action.payload; // Update product details
      }
    },
  },
});

// Export actions
export const { setProducts, addProduct, removeProduct, updateProduct } =
  productSlice.actions;

// Export the reducer to include in the store
export default productSlice.reducer;

export const productReducer = productSlice.reducer;
