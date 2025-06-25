import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function findQuizsForCourse(courseId) {
  const { quizs } = Database;
  return quizs.filter((quiz) => quiz.course === courseId);
}


export function createQuiz(quiz) {
  const newQuiz = { ...quiz, _id: uuidv4() };
  Database.quizs = [...Database.quizs, newQuiz];
  return newQuiz;
}

export function deleteQuiz(quizId) {
 const { quizs } = Database;
 Database.quizs = quizs.filter((quiz) => quiz._id !== quizId);
}

export function updateQuiz(quizId, quizUpdates) {
  const { quizs } = Database;
  const quiz = quizs.find((quiz) => quiz._id === quizId);
  Object.assign(quiz, quizUpdates);
  return quiz;
}
