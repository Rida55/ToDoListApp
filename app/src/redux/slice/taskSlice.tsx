import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskState } from '../../../res/interfaces/interfaces';



const initialState: TaskState = {
  tasks: [
    { id: '1', title: 'Task 1', checked: false },
    { id: '2', title: 'Task 2', checked: true },
    { id: '3', title: 'Task 3', checked: false },
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const taskToUpdate = state.tasks.find(task => task.id === action.payload.id);
      if (taskToUpdate) {
        taskToUpdate.title = action.payload.title;
      }
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask(state, action: PayloadAction<string>) {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.checked = !task.checked;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
