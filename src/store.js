/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import navDrawerReducer from "./modules/dashboard/state/nav-drawer-slice";

const store = configureStore({
  devTools: process.env.NODE_ENV != "production",
  reducer: {
    navDrawer: navDrawerReducer,
  },
});

export default store;