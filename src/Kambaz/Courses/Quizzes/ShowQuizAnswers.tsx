import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

export function ShowQuizAnswers() {
  const { aid } = useParams();  // quiz id
  const { questions } = useSelector((state: any) => state.questionsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const quizQuestions = questions.filter((q: any) => q.quizId === aid);
  const currentStudentId = currentUser?._id;

  const getStudentAnswer = (q: any) =>
    q.studentGuess.find((g: any) => g.studentId === currentStudentId);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Submitted Answers - {aid}</h3>

      {quizQuestions.map((q: any, idx: number) => {
        const studentAns = getStudentAnswer(q);

        return (
          <Card key={q._id} className="p-3 mb-3">
            <h5>
              Question {idx + 1} <small className="text-muted">({q.points} pts)</small>
            </h5>
            <p className="fw-bold">{q.prompt}</p>

            

            {q.type === "Multiple Choice" && (
              <ul className="list-group">
                {q.choices.map((c: any) => {
                  const isStudentAnswer = c.id === studentAns?.studentMC;
                  const isCorrect = c.correct;

                  return (
<li
  key={c.id}
  className={`list-group-item d-flex justify-content-between align-items-center ${
    isCorrect
      ? "bg-success bg-opacity-25"
      : isStudentAnswer && !isCorrect
      ? "bg-danger bg-opacity-25"
      : ""
  }`}
>
  {c.text}

  <div className="d-flex gap-2">
    {isStudentAnswer && (
      <span
        className={`badge ${
          isCorrect ? "bg-dark text-white" : "bg-danger text-white"
        }`}
      >
        Your Answer
      </span>
    )}
    {isCorrect && (
      <span className="badge bg-success text-white">Correct</span>
    )}
  </div>
</li>
                  );
                })}
              </ul>
            )}


            {q.type === "True/False" && (
              <div>
                <p>
                  <strong>Correct Answer:</strong> {q.answer ? "True" : "False"}
                </p>
                <p>
                  <strong>Your Answer:</strong>{" "}
                  {studentAns?.studentTF === true
                    ? "True"
                    : studentAns?.studentTF === false
                    ? "False"
                    : "N/A"}
                </p>
              </div>
            )}



            {q.type === "Fill in the Blank" && (
              <div>
                <p>
                  <strong>Correct Answers:</strong> {q.answers?.join(", ")}
                </p>
                <p>
                  <strong>Your Answer:</strong> {studentAns?.studentBlank || "N/A"}
                </p>
              </div>
            )}

            <div className="text-end text-muted mt-2">
              Score: {studentAns?.studentPoints || 0} / {q.points}
            </div>
          </Card>



        );
      })}
    </div>
  );
}