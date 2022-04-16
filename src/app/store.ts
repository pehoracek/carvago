import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import tasksReducer from './tasksReducer';
import sectionsReducer from './sectionsReducer';
import authorReducer from './authorReducer';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    sections: sectionsReducer,
    author: authorReducer,
  }, // place for your reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // place for your middleware if you want
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
