import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const addToCart = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // default quantity 1
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    decrement: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // Prevent quantity from going below 1
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          existingItem.quantity = 1; // keep at 1
        }
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    clear: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const id = action.payload.id; // get item id
      state.items = state.items.filter(item => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.items));
    }
  },
});

// ✅ Export all actions including setQuantity
export const { increment, decrement, clear, setQuantity,removeItem } = addToCart.actions;
export default addToCart.reducer;
