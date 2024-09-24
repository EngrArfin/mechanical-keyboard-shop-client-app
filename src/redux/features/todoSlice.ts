import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Todo type
type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean; // Make it required so we don't handle undefined cases
};

// Define the initial state type
type TInitialState = {
  todos: TTodo[];
};

// Initial state with an empty todo list
const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Action to add a new todo item
    addTodo: (state, action: PayloadAction<Omit<TTodo, "isCompleted">>) => {
      // Add new todo with `isCompleted` defaulting to `false`
      state.todos.push({ ...action.payload, isCompleted: false });
    },

    // Action to remove a todo item by id
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // Action to toggle the `isCompleted` status of a todo item by id
    toggleComplete: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted; // Toggle completion state
      }
    },
  },
});

// Export actions
export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

// Export the reducer to include in the store
export default todoSlice.reducer;
export const todoReducer = todoSlice.reducer;
