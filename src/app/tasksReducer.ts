import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AddTaskPayloadType, TasksStateType, TaskType} from '../ts/types';
import {getRandomNum} from '../utils';

const initialState: TasksStateType = {
  allTasks: [],
  editingTask: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<AddTaskPayloadType>) => {
      const {description, sectionId, priority, title, author} = action.payload;
      const newTask = {
        id: getRandomNum(),
        sectionId,
        completed: false,
        title,
        description,
        priority,
        createdAt: new Date().toISOString(),
        author,
      };
      state.allTasks = [...state.allTasks, newTask];
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const currentTaskIndex: number = state.allTasks.findIndex(
        (task: TaskType) => task.id === action.payload
      );
      state.allTasks[currentTaskIndex].completed = !state.allTasks[currentTaskIndex].completed;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const currentTaskIndex: number = state.allTasks.findIndex(
        (task: TaskType) => task.id === action.payload
      );
      const newTasks = [...state.allTasks];
      newTasks.splice(currentTaskIndex, 1);
      state.allTasks = newTasks;
    },
    deleteAllTasks: (state) => {
      state.allTasks = [];
    },
    deleteCompletedTasks: (state) => {
      state.allTasks = [...state.allTasks].filter((task) => !task.completed);
    },
    setEditTask: (state, action: PayloadAction<TaskType | null>) => {
      state.editingTask = action.payload;
    },
    editTask: (state, action: PayloadAction<TaskType>) => {
      const currentTaskIndex: number = state.allTasks.findIndex(
        (task: TaskType) => task.id === action.payload.id
      );
      state.allTasks[currentTaskIndex] = action.payload;
    },
    markAllDone: (state, action: PayloadAction<{sectionId: number}>) => {
      const {sectionId} = action.payload;
      state.allTasks.forEach((task) => {
        if (task.sectionId === sectionId) {
          task.completed = true;
        }
      });
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
  deleteAllTasks,
  deleteCompletedTasks,
  setEditTask,
  editTask,
  markAllDone,
} = tasksSlice.actions;

const tasksReducer = tasksSlice.reducer;

export default tasksReducer;
