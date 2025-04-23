import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// REDUCERS
import chartReducer from "./reducer/chartReducer";

// SERVICES
import earthquakeApi from "./services/earthquakeAPI";

export const rootReducer = combineReducers({
	chart: chartReducer,
	[earthquakeApi.reducerPath]: earthquakeApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(earthquakeApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
