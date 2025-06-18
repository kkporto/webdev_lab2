import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  modules: modules,
};
const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }) => {
      const newModule: any = {
        _id: uuidv4(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules = [...state.modules, newModule] as any;
    },
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter(
        (m: any) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },

    // addLesson: (state, { payload: module }) => {
    //   const newLesson: any = {
    //     _id: uuidv4(),
    //     name: module.name,
    //     description: "Module description",
    //     module: "Adding module",
    //   };
    //   state.module.lessons = [...state.modules, newModule] as any;
    // },

    addLessonToModule: (state, { payload: moduleId }) => {
      // const { _id: moduleId } = module;

      const targetModule = state.modules.find((m: any) => m._id === moduleId);
      if (targetModule) {
        targetModule.lessons = targetModule.lessons ?? [];
        targetModule.lessons.push({
          _id: uuidv4(),
          name: "lesson name",
          description: "Module description",
            module: "Adding module",
        });
      }
    },

    deleteLesson: (state, { payload }) => {
      const { moduleId, lessonId } = payload;

      const targetModule = state.modules.find((m: any) => m._id === moduleId);
      if (targetModule && Array.isArray(targetModule.lessons)) {
        targetModule.lessons = targetModule.lessons.filter(
          (lesson: any) => lesson._id !== lessonId
        );
      }
    },
  }

});
export const { addModule, deleteModule, updateModule, editModule, addLessonToModule, deleteLesson } =
  modulesSlice.actions;
export default modulesSlice.reducer;