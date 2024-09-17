/* import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define your product type
interface Product {
  id: string;
  title: string;
  available_quantity: number;
  price: number;
  image: string;
  description: string;
  rating: number;
}

// Define the initial state
interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/fetchProducts", async (_, thunkAPI) => {
  try {
    const response = await fetch("/api/products");
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch products");
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.products = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(
        fetchProducts.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || "Error fetching products";
        }
      );
  },
});

export default productSlice.reducer;
 */
