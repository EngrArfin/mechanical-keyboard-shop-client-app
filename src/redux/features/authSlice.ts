import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the user, including name and email
type TUser = {
  name: string;
  email: string; // Add email property
  // You can add more user properties as needed
};

// Define the initial state type
type TAuthState = {
  user: TUser | null;
  token: string | null;
};

// Set the initial state
const initialState: TAuthState = {
  user: null,
  token: null,
};

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: TUser; token: string }>) => {
      const { user, token } = action.payload;
      state.user = user; // Set user
      state.token = token; // Set token
    },
    logOut: (state) => {
      state.user = null; // Clear user
      state.token = null; // Clear token
    },
  },
});

// Export actions and reducer
export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
