import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import coursesReducer from "./Courses/reducer"
import enrollmentsReducer from "./Courses/People/reducer"
import quizzesReducer from "./Courses/Quizzes/reducer"
import questionsReducer from "./Courses/QuizEditor/reducer"

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    coursesReducer,
    assignmentsReducer,
    enrollmentsReducer,
    
    quizzesReducer,
    questionsReducer
  },
});
export default store;