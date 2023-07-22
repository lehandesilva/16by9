import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./adult-filter-slice";

const store = configureStore({
  reducer: { filter: filterSlice.reducer },
});

export default store;
