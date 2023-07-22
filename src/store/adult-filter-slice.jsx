import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { adultFilter: false },
  reducers: {
    toggle(state) {
      state.adultFilter = !state.adultFilter;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
