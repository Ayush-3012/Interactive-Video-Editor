import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice.ts";
import introOutroReducer from "./introOutroSlice";
import bgmReducer from "./bgmSlice.ts"

export const store = configureStore({
  reducer: {
    video: videoReducer,
    introOutro: introOutroReducer,
    bgm: bgmReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
