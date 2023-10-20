import { createSlice } from "@reduxjs/toolkit";

import { getWatchListElements } from "@/store/thunks/watchlist";

const initialState: any = {
  assets: [],
};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWatchListElements.fulfilled, (state, action) => {
      state.assets = action.payload;
    });
  },
});

export default watchlistSlice.reducer;
