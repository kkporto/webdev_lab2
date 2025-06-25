import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database";

// import { v4 as uuidv4 } from "uuid";


const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: quizzes,
  reducers: {

    addQuiz: (state, action) => {
      state.push(action.payload);
    },
    deleteQuiz: (state, action) => {
      return state.filter(a => a._id !== action.payload);
    },
    updateQuiz: (state, action) => {
      return state.map(a => a._id === action.payload._id ? action.payload : a);
    },


    // addQuestionToQuiz: (state, { payload }) => {
    //   const { quizId, question } = payload;      // question can be passed in
    //   const targetQuiz = state.find(q => q._id === quizId);

    //   if (targetQuiz) {
    //     targetQuiz.questions = targetQuiz.questions ?? [];
    //     targetQuiz.questions.push(
    //       question || {
    //         _id: uuidv4(),
    //         prompt: "New question",
    //         points: 0
    //       }
    //     );
    //   }
    // }



  },
});
export const { addQuiz, deleteQuiz, updateQuiz} = //, addQuestionToQuiz } =
  quizzesSlice.actions;
export default quizzesSlice.reducer;