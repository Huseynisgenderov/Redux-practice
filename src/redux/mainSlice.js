import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  theme: false,
};

export const mainSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    darkTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { increment, decrement, darkTheme } = mainSlice.actions;
export default mainSlice.reducer;
