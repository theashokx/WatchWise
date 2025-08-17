import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchViews: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearchViews } = gptSlice.actions;
export default gptSlice.reducer;
