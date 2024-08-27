import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./slices/blogsSlice";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
