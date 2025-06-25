import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";

import { v4 as uuidv4 } from "uuid";

const initialState: any[] = [];

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (_state, action) => {
      return action.payload;
    },

    addAssignment: (state, { payload }) => {
      const newAssignment = {
        _id: uuidv4(),
        title: payload.title,
        description: payload.description,
        points: payload.points,
        dueDate: payload.dueDate,
        availableFrom: payload.availableFrom,
        availableUntil: payload.availableUntil,
        course: payload.course,
      };
      state.push(newAssignment);
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      return state.filter((a: any) => a._id !== assignmentId);
    },

    updateAssignment: (state, { payload }) =>
      state.map((a: any) => (a._id === payload._id ? payload : a)),

    editAssignment: (state, { payload: assignmentId }) =>
      state.map((a: any) => (a._id === assignmentId ? { ...a, editing: true } : a)),
  },
});


export const { addAssignment, deleteAssignment, updateAssignment, setAssignments, editAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;