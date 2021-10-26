import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import { apiSlice } from "../features/breeds/breeds-api-slice";

export const store = configureStore({
  reducer: { counterReducer, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type appDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
