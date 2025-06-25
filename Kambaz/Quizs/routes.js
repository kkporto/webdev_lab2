import * as quizsDao from "./dao.js";
export default function QuizRoutes(app) {

//  app.get("/api/quizs/:courseId/quizs", (req, res) => {
//     const { courseId } = req.params;
//     const courseQuizs = quizs.filter(a => a.course === courseId);
//     res.json(courseQuizs);
//   });


 app.put("/api/quizs/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizsDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });

 app.delete("/api/quizs/:quizId", async (req, res) => {
   const { quizId } = req.params;
   const status = await quizsDao.deleteQuiz(quizId);
   res.send(status);
});


}

