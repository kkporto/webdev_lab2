import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";


// const coursesSlice = createSlice({
//   name: "courses",
//   initialState: courses,
//   reducers: {

//     addCourse: (state, action) => {
//       state.push(action.payload);
//     },
//     deleteCourse: (state, action) => {
//       return state.filter(a => a._id !== action.payload);
//     },
//     updateCourse: (state, action) => {
//       return state.map(a => a._id === action.payload._id ? action.payload : a);
//     }


//   },
// });




import { v4 as uuidv4 } from "uuid";

const initialState = {
  courses: courses,
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload: course }) => {
      const newCourse: any = {
        _id: uuidv4(),
        img_path: course.img_path,
        name: course.name,
        number: course.number,
        startDate: course.startDate,
        endDate: course.endDate,
        department: course.department,
        credits: course.credits,
        description: course.description
        
      };
      state.courses = [...state.courses, newCourse] as any;
    },

    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (m: any) => m._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((m: any) =>
        m._id === course._id ? course : m
      ) as any;
    },
    // editModule: (state, { payload: moduleId }) => {
    //   state.modules = state.modules.map((m: any) =>
    //     m._id === moduleId ? { ...m, editing: true } : m
    //   ) as any;
    // },
  },
});



export const { addCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;

// export const { addModule, deleteModule, updateModule, editModule } =
//   modulesSlice.actions;
// export default modulesSlice.reducer;