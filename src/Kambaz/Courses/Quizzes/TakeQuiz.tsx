// src/Courses/Quizzes/TakeQuiz.tsx
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { recordAnswer } from "../QuizEditor/reducer";          
import { Link } from "react-router";

export function TakeQuiz() {


  const { cid, aid } = useParams();    
  
  const dispatch  = useDispatch();                
  const { questions } = useSelector((s: any) => s.questionsReducer);
  const { currentUser } = useSelector((s: any) => s.accountReducer); 
  const quizQuestions = questions.filter((q: any) => q.quizId === aid);


//  const quizQuestions = questions.filter((q: any) => q.quizId === aid);
  const [openId, setOpenId] = useState<string | null>(null);

  /* ===== helper that fires the reducer ===== */
  const saveAnswer = (questionId: string, ans: any) =>
    dispatch(
      recordAnswer({
        questionId,
        studentId: currentUser._id,
        answer: ans
      })
    );

  /* ===== tiny helper to see if this student already answered ===== */
  const answerFor = (q: any) => {
    const guess = (q.studentGuess ?? []).find(
      (g: any) => g.studentId === currentUser._id
    );
    if (!guess) return null;
    switch (q.type) {
      case "Multiple Choice": return guess.studentMC;
      case "True/False":      return guess.studentTF;
      case "Fill in the Blank": return guess.studentBlank;
      default: return null;
    }
  };

  console.log(questions);
  return (
    <div className="container mt-4">
      <h3 className="mb-4">Take Quiz - {aid}</h3>

      {quizQuestions.map((q: any, idx: number) => {
        const stored = answerFor(q);               // what the student picked
        return (
          <div key={q._id} className="mb-2">

            <Button
              variant="link"
              className="p-0 text-danger text-decoration-none fw-bold"
              onClick={() => setOpenId(openId === q._id ? null : q._id)}
            >
              Question {idx + 1} 
            </Button>

            
            {openId === q._id && (
              <Card className="p-3 mt-2">
                <h5 className="mb-2">
                  Question {idx + 1}{" "}
                  <small className="text-muted">({q.points} pts)</small>
                </h5>

                <p className="mb-3">{q.prompt}</p>

                {/* MULTIPLE CHOICE */}
                {q.type === "Multiple Choice" && (
                  <Form>
                    {q.choices.map((c: any) => (
                      <Form.Check
                        key={c.id}
                        type="radio"
                        name={`mc-${q._id}`}
                        label={c.text}
                        checked={stored === c.id}          
                        onChange={() => saveAnswer(q._id, c.id)}  
                      />
                    ))}
                  </Form>
                )}

                {/* TRUE / FALSE */}
                {q.type === "True/False" && (
                  <Form>
                    <Form.Check
                      type="radio"
                      name={`tf-${q._id}`}
                      label="True"
                      checked={stored === true}
                      onChange={() => saveAnswer(q._id, true)}   
                    />
                    <Form.Check
                      type="radio"
                      name={`tf-${q._id}`}
                      label="False"
                      checked={stored === false}
                      onChange={() => saveAnswer(q._id, false)} 
                    />
                  </Form>
                )}

                {/* FILL IN THE BLANK */}
                {q.type === "Fill in the Blank" && (
                  <Form.Control
                    type="text"
                    placeholder="Your answer"
                    defaultValue={stored || ""}
                    onBlur={(e) => saveAnswer(q._id, e.target.value)} 
                  />
                )}

      <Button
        variant="secondary"
        className="mt-3 fw-bold ms-auto d-block"
        onClick={() => {
          const nextIdx = (idx + 1) % quizQuestions.length;
          setOpenId(quizQuestions[nextIdx]._id);
        }}
      >
        Next
      </Button>
              </Card>
            )}
          </div>
        );
      })}
 
 

    <Link to={`/Kambaz/Courses/:${cid}/${aid}/ShowQuizAnswers/`}>
      <Button
        size="lg"
        className="mt-5"
        variant="danger"

      >
          Submit Quiz
      </Button>
      </Link>

    </div>
  );
}