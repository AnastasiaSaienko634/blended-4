import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: '',
  },
  reducers: {
    filters: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { filters } = filterSlice.actions;
export default filterSlice.reducer;
