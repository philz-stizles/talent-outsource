import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
    totalItems: 0,
  },
  reducers: {
    addToCart: (state) => {},
    removeFromCart: (state) => {},
    clearCart: (state) => {},
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice;
