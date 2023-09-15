import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../slices/StudentSlice';

export default configureStore({
  reducer: {
    student: studentReducer,
  },
});
