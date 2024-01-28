import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../data/categories";

const INITIAL_STATE = {
  categories: Categories,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategory: (state) => {
      return state;
    },
  },
});

export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
