/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import navDrawerReducer from "./modules/dashboard/state/nav-drawer-slice";
import registrationReducer from "./modules/auth/state/registrationSlice";

const store = configureStore({
  devTools: process.env.NODE_ENV != "production",
  reducer: {
    navDrawer: navDrawerReducer,
    registration: registrationReducer,
  },
});

export default store;