import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// REDUCERS

// SERVICES
import earthquakeApi from "./services/earthquakeAPI";

export const store = configureStore({
	reducer: {
		[earthquakeApi.reducerPath]: earthquakeApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(earthquakeApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
