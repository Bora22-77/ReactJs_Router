import { createSlice } from "@reduxjs/toolkit";

// 1. Get the saved theme from localStorage (if exists)
const saveTheme = localStorage.getItem("app-theme");

// 2. Setup the initial state (default is "light" if nothing in localStorage)
const initialState = {
  theme: saveTheme || "light",
};

// 3. Create a slice = (state + actions + reducer all in one place)
const themeSlice = createSlice({
  name: "theme", // A name for this slice (shows up in Redux DevTools)
  initialState, // The default state for this slice
  // Logic
  reducers: {
    // * Toggle between light / dark
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("app-theme", state.theme);
    },
    // * Set theme directly (to "light" or "dark")
    setTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem("app-theme", state.theme); // * save choice
    },
  },
});

// 4. Export the actions (so components can dispatch them)
export const { toggleTheme, setTheme } = themeSlice.actions;

// 5. Export the reducer (so store.js can add it to the global store)
export default themeSlice.reducer;