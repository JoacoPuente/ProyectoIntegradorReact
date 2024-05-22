import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCart,
  removeItemFromCart,
  resetShippingCost,
  deleteItemFromCart,
} from "./cart-utils";

const INITIAL_STATE = {
  cartItems: [],
  shippingCost: 0,
  hidden: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        shippingCost: resetShippingCost(state.cartItems),
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
        shippingCost: 0,
      };
    },
    toggleHiddenCart: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
    incrementQuantity: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },
    decrementQuantity: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    },
    deleteFromCart: (state, action) => {
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload),
      };
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  toggleHiddenCart,
  incrementQuantity,
  decrementQuantity,
  deleteFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
