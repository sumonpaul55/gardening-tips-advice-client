import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
const persistConfig = {
  key: "auth",
  storage,
};

export const store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
