import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthorStateType} from '../ts/types';

const initialState: AuthorStateType = {
  authorName: 'Petr Horáček',
};

export const authorSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    changeAuthorName: (state, action: PayloadAction<string>) => {
      state.authorName = action.payload;
    },
  },
});

export const {changeAuthorName} = authorSlice.actions;

const tasksReducer = authorSlice.reducer;

export default tasksReducer;
