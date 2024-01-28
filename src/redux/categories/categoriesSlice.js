import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../data/categories";

const INITIAL_STATE = {
  categories: Categories,
  selectedCategory: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategory: (state) => {
      return state;
    },
    selectCategory: (state, action) => {
      return {
        ...state,
        selectedCategory:
          action.payload !== state.selectedCategory ? action.payload : null,
      };
    },
  },
});

export const { getCategories, selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
