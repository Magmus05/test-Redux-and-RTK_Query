import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { postsApi } from "./postsApi"

const rootReducer= combineReducers({
	[postsApi.reducerPath]:postsApi.reducer
})
export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware)
})