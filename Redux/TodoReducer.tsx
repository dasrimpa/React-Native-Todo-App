import {createSlice} from '@reduxjs/toolkit';
import {Todo} from '../Authentication/Interface/types';

const initialState = {
  todoList: [] as Todo[],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    listUpdate: (state, {payload}: {payload: Todo[]}) => {
      state.todoList = payload;
    },

    updateTodo: (state, {payload}: {payload: Todo}) => {
      state.todoList = state.todoList.map(todo => {
        if (todo.objectId === payload.objectId) {
          return {
            ...todo,
            ...payload,
          };
        }
        return todo;
      });
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
