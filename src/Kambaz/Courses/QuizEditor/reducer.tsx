import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  questions: questions,
};
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, { payload: question }) => {
    //   const newQuestion: any = {
    //     _id: uuidv4(),
    //     lessons: [],
    //     title: question.title,
    //     quizz: question.quizz,
    //   };


        const newQuestion: any = {
        _id: uuidv4(),

        title: question.title,
        quizId: question.quizId,        
        course: "",         
        type: "Multiple Choice",
        points: 1,
        prompt: "",
        choices: [
            { id: "a", text: "Option A", correct: false },
            { id: "b", text: "Option B", correct: false },
            { id: "c", text: "Option C", correct: false },
            { id: "d", text: "Option D", correct: false }
        ],
        answer: [""],
        answers: [""],
        blanks: [""],
        studentGuess: [
              {studentId: "",   
                    studentMC: "a", 
                    studentBlank: "", 
                    studentTF: false,
                    studentPoints: 0, }
                  ],
        
        //  ...(question.type === "Fill in the Blank" && { blanks: [""] }),

        };

      state.questions = [...state.questions, newQuestion] as any;
    },
    deleteQuestion: (state, { payload: questionId }) => {
      state.questions = state.questions.filter(
        (m: any) => m._id !== questionId);
    },
   
   
    updateQuestion: (state, { payload }) => {
      const { question } = payload;          
      state.questions = state.questions.map((q: any) =>
        q._id === question._id ? { ...q, ...question } : q
      );
    },
    editQuestion: (state, { payload: questionId }) => {
      state.questions = state.questions.map((m: any) =>
        m._id === questionId ? { ...m, editing: true } : m
      ) as any;
    },
  

recordAnswer: (state, { payload }) => {
  const { questionId, studentId, answer } = payload;

  state.questions = state.questions.map((q: any) => {
    if (q._id !== questionId) return q;


    const guessesArray = q.studentGuess ?? [];

    const template = {
      studentId,
      studentMC: "",
      studentBlank: "",
      studentTF: null,
      studentPoints: 0
    };

    const idx = guessesArray.findIndex((g: any) => g.studentId === studentId);
    const current = idx >= 0 ? guessesArray[idx] : template;
    let updated = { ...current };


    switch (q.type) {
      case "Multiple Choice":
        updated.studentMC = answer;
        const correct = q.choices.find((c: any) => c.correct)?.id;
        updated.studentPoints = answer === correct ? q.points : 0;
        break;

      case "True/False":
        updated.studentTF = answer === true || answer === "true";
        updated.studentPoints =
          updated.studentTF === q.answer ? q.points : 0;
        break;

      case "Fill in the Blank":
        updated.studentBlank = answer;
        updated.studentPoints = (q.answers || [])
          .map((a: string) => a.toLowerCase().trim())
          .includes(answer.toLowerCase().trim())
          ? q.points
          : 0;
        break;

      default:
        break;
    }

    const newGuesses =
      idx >= 0
        ? guessesArray.map((g: any, i: number) =>
            i === idx ? updated : g
          )
        : [...guessesArray, updated];

    return { ...q, studentGuess: newGuesses };  
  });
},


  }
});
export const { addQuestion, deleteQuestion, updateQuestion, editQuestion, recordAnswer } =
  questionsSlice.actions;
export default questionsSlice.reducer;