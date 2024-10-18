// src/redux/slices/keyboardSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../hook/useAxiosSecure";

// Define a type for the product data
interface KeyboardProduct {
  _id: string;
  name: string;
  price: number;
  category: string;
  recipe: string;
  image: string;
}

// Define a type for the slice state
interface KeyboardState {
  items: KeyboardProduct[];
  loading: boolean;
}

// Initial state
const initialState: KeyboardState = {
  items: [],
  loading: false,
};

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk<KeyboardProduct[]>(
  "keyboards/fetchProducts",
  async () => {
    const response = await axios.get("/menu");
    return response.data;
  }
);

// Async thunk to add a product
export const addProduct = createAsyncThunk<
  KeyboardProduct,
  Omit<KeyboardProduct, "_id">
>("keyboards/addProduct", async (product) => {
  const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_Image_Upload_token
  }`;

  // Upload image first
  const formData = new FormData();
  formData.append("image", product.image);
  const imgResponse = await fetch(imgHostingUrl, {
    method: "POST",
    body: formData,
  });
  const imgResult = await imgResponse.json();

  if (imgResult.success) {
    const newProduct = { ...product, image: imgResult.data.display_url };
    const response = await axios.post("/menu", newProduct);
    return response.data;
  }
  throw new Error("Image upload failed");
});

// Async thunk to delete a product
export const deleteProduct = createAsyncThunk<string, string>(
  "keyboards/deleteProduct",
  async (productId) => {
    await axios.delete(`/menu/${productId}`);
    return productId;
  }
);

const keyboardSlice = createSlice({
  name: "keyboards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<KeyboardProduct[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        addProduct.fulfilled,
        (state, action: PayloadAction<KeyboardProduct>) => {
          state.items.push(action.payload);
        }
      )
      .addCase(
        deleteProduct.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.items = state.items.filter(
            (item) => item._id !== action.payload
          );
        }
      );
  },
});

export default keyboardSlice.reducer;
