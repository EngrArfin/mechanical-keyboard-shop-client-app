import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the user, including name and email
type TUser = {
  name: string;
  email: string;
};

// Define the initial state type
type TAuthState = {
  user: TUser | null;
  token: string | null;
};

// Set the initial state with token and user from localStorage
const initialState: TAuthState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
  token: localStorage.getItem("token"), // Get token from localStorage
};

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set user and token, and store them in localStorage
    setUser: (state, action: PayloadAction<{ user: TUser; token: string }>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem("user", JSON.stringify(user)); // Store user in localStorage
      localStorage.setItem("token", token); // Store token in localStorage
    },
    // Action to handle logout
    logOut: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user"); // Clear user from localStorage
      localStorage.removeItem("token"); // Clear token from localStorage
    },
    // Action to initialize auth state from localStorage
    initializeAuth: (state) => {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null;

      if (token) {
        state.token = token;
        state.user = user; // Restore user from localStorage
      }
    },
  },
});

// Export actions and reducer
export const { setUser, logOut, initializeAuth } = authSlice.actions;
export default authSlice.reducer;

/* import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the user, including name and email
type TUser = {
  name: string;
  email: string;
  // Add more user properties if needed
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

// Set the initial state
const initialState: TAuthState = {
  user: null,
  token: localStorage.getItem("token"), // Initialize with token from localStorage
};

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: TUser; token: string }>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem("token", token); // Store token in localStorage
    },
    clearToken: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token"); // Remove token from localStorage
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token"); // Clear token and user data
    },
    initializeAuth: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.token = token;
        // You can also restore the user from localStorage if needed
        // const user = JSON.parse(localStorage.getItem("user") || "null");
        // state.user = user;
      }
    },
  },
});

// Export actions and reducer
export const { setUser, logOut, initializeAuth, clearToken } =
  authSlice.actions;
export default authSlice.reducer;
 */
/* 
----------------------------------------
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
      localStorage.setItem("token", token);
    },
    clearToken: (state) => {
      state.user = null; // Clear user data
      state.token = null; // Clear token
      localStorage.removeItem("token"); // Remove token from local storage
    },

    logOut: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },

    // Optional: A new action to initialize the auth state from localStorage
    initializeAuth: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.token = token;
      }
    },
  },
});

// Export actions and reducer
export const { setUser, logOut, initializeAuth, clearToken } =
  authSlice.actions;
export default authSlice.reducer;

 */
