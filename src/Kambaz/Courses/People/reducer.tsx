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
        user,
        course,
        };

        state.enrollments.push(newEnrollment); 
      }
    },


    // addEnrollment: (state, { payload }) => {
    // const { user, course } = payload;

    // const alreadyEnrolled = state.enrollments.some(
    //     (e) => e.user === user && e.course === course
    // );

    // if (!alreadyEnrolled) {
    //     const newEnrollment = {
    //     _id: uuidv4(),
    //     course,
    //     user,
    //     };
    //     // state.enrollments.push(newEnrollment);
        
    //   state.enrollments = [...state.enrollments, newEnrollment] as any;
    // }

    // },

    deleteEnrollment: (state, { payload }) => {
    
    const { courseId, currentUser  } = payload;

    console.log("**** Attempting to delete enrollment with:");
    console.log("courseId:", courseId);
    console.log("currentUser:", currentUser);
    console.log("**** Enrollments before:", [...state.enrollments]);
    
    state.enrollments = state.enrollments.filter(
        (m: any) => (m.course !== courseId || m.user !== currentUser));
    
    
  console.log("**** Enrollments after:", [...state.enrollments]);
    },

    } 
      
  }
);


export const { addEnrollment, deleteEnrollment } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;