import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStorage from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import productsReducer from "./products/productsSlice";
import categoriesReducer from "./categories/categoriesSlice";
import cartReducer from "./cart/cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

const persitedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persitedReducer,
});

export const persistor = persistStorage(store);
