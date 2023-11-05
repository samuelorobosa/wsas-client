/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  devTools: process.env.NODE_ENV != "production",
  reducer: {},
});

export default store;