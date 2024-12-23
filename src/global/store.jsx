import { configureStore } from "@reduxjs/toolkit";
import reducer from "./GlobalState"

export const store = configureStore({
    reducer
})