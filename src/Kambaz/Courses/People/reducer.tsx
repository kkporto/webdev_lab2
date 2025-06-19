import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {

    addEnrollment: (state, { payload }) => {
    const { user, course } = payload;

    const alreadyEnrolled = state.enrollments.some(
        (e) => e.user === user && e.course === course
    );

    if (!alreadyEnrolled) {
        const newEnrollment = {
        _id: uuidv4(),
        course,
        user,
        };
        state.enrollments.push(newEnrollment);
    }
    },


    deleteEnrollment: (state, { payload }) => {
    const { user, course } = payload;

    state.enrollments = state.enrollments.filter(
        (e) => !(e.user === user && e.course === course)
    );
    } 

    }   
  }
);


export const { addEnrollment, deleteEnrollment } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;