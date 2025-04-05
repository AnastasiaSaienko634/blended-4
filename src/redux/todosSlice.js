import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    currentTodo: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    addcurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updatecurrentTodo: (state, action) => {
      state.items = state.items.map(el => {
        return el.id === state.currentTodo.id
          ? { ...state.currentTodo, text: action.payload }
          : el;
      });
      state.currentTodo = null;
    },
  },
});

export const { addTodo, deleteTodo, addcurrentTodo, updatecurrentTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
