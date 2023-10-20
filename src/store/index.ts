import { configureStore } from "@reduxjs/toolkit";

import assetsSlice from "./slice/assets";
import authSlice from "./slice/auth";
import newsSlice from "./slice/news";
import watchlistSlice from "./slice/watchlist";

const store = configureStore({
  reducer: {
    auth: authSlice,
    assets: assetsSlice,
    watchlist: watchlistSlice,
    news: newsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
