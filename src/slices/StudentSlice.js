import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    allStudents: [],
    currentStudent: {
      time: '',
      name: '',
      age: '',
      status: '',
      date: '',
      session: '',
    },
  },
  reducers: {
    addCurrentStudentName: (state, action) => {
      state.currentStudent.name = action.payload;
    },
    addSelectedStatus: (state, action) => {
      state.currentStudent.status = action.payload;
    },
    addSelectedSession: (state, action) => {
      state.currentStudent.session = action.payload;
    },
    addSelectedDate: (state, action) => {
      state.currentStudent.date = action.payload;
    },

    addCurrentStudentAge: (state, action) => {
      state.currentStudent.age = action.payload;
    },

    saveStudentInfo: (state) => {
      state.allStudents.push(state.currentStudent);
    },
  },
});

export const {
  addCurrentStudentName,
  addCurrentStudentAge,
  addSelectedDate,
  saveStudentInfo,
  addSelectedSession,
  addSelectedStatus,
} = studentSlice.actions;

export default studentSlice.reducer;
