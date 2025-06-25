
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { deleteQuiz } from "./reducer";
import { Link } from "react-router";
import { useParams } from "react-router";
// import { ListGroup } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import { ProtectedRouteStudent, ProtectedRouteFaculty } from "../../Account/ProtectedRoute";
import { Table } from "react-bootstrap";


import "./details.css";
import { v4 as uuidv4 } from "uuid";
// import { TakeQuiz } from "./TakeQuiz";

function formatDateTime(dateStr: string | undefined) {
  if (!dateStr) return "—";
  const date = new Date(dateStr);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}



export default function QuizDetails(){ //{ quizId }: MenuButtonsProps) {

  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();



  
  const existingQuiz = useSelector((state: any) =>
    state.quizzesReducer.find((a: any) => a._id === aid)
  );

  const [form, setForm] = useState<any>(
    existingQuiz || {
    _id: uuidv4(),
    title: "",
    description: "",
    course: cid,

    quizType: "Graded Quiz",           // default
    assignmentGroup: "Quizzes",        // default
    points: 100,
    shuffleAnswers: true,              // Yes
    timeLimit: 20,                     // in minutes
    multipleAttempts: false,           // No
    maxAttempts: 1,                    // 1
    showCorrectAnswers: "",            // blank
    accessCode: "",                    // blank
    oneQuestionAtATime: true,          // Yes
    webcamRequired: false,              // No
    lockQuestionsAfterAnswering: false, // No

    dueDate: "",
    availableFrom: "",
    availableUntil: "",

    questions: [],
    scores: {}
  }
  );
  console.log(navigate, dispatch, setForm);

    return(

 <div className="container mt-4">
      {/* <h2 className="align-label-centered">Quiz Details</h2> */}

      {/* <ListGroup className="mb-3">
        <ListGroup.Item ><strong>Title:</strong> {form.title}</ListGroup.Item>
        <ListGroup.Item><strong>Description:</strong> {form.description}</ListGroup.Item>
        <ListGroup.Item><strong>Points:</strong> {form.points}</ListGroup.Item>
        <ListGroup.Item><strong>Due Date:</strong> {form.dueDate}</ListGroup.Item>
        <ListGroup.Item><strong>Available From:</strong> {form.availableFrom}</ListGroup.Item>
        <ListGroup.Item><strong>Available Until:</strong> {form.availableUntil}</ListGroup.Item>
      </ListGroup> */}



      <h2>{form.title}</h2>
      <br/>

<div className="d-flex flex-column">
  <div className="d-flex ">
    <p className="align-label-centered">Quiz Type</p>
    <p className="align-label-left fw-bold">{form.quizType}</p>
  </div>

  <div className="d-flex ">
    <p className="align-label-centered">Points</p>
    <p className="align-label-left fw-bold">{form.points}</p>
  </div>

  <div className="d-flex ">
    <p className="align-label-centered">Assignment Group</p>
    <p className="align-label-left fw-bold">{form.assignmentGroup}</p>
  </div>

  <div className="d-flex ">
    <p className="align-label-centered">Shuffle Answers</p>
    <p className="align-label-left fw-bold">{form.shuffleAnswers ? "Yes" : "No"}</p>
  </div>

  <div className="d-flex ">
    <p className="align-label-centered">Time Limit</p>
    <p className="align-label-left fw-bold">{form.timeLimit} Minutes</p>
  </div>

  <div className="d-flex ">
    <p className="align-label-centered">Multiple Attempts</p>
    <p className="align-label-left fw-bold">{form.multipleAttempts ? "Yes" : "No"}</p>
  </div>

  <div className="d-flex ">
    <p className="align-label-centered">Max Attempts</p>
    <p className="align-label-left fw-bold">{form.maxAttempts}</p>
  </div>

  <div className="d-flex ">
    <p className="align-label-centered">Show Correct Answers</p>
    <p className="align-label-left fw-bold">{form.showCorrectAnswers || "—"}</p>
  </div>

  <div className="d-flex ">
    <p className="align-label-centered">Access Code</p>
    <p className="align-label-left fw-bold">{form.accessCode || "—"}</p>
  </div>

  <div className="d-flex ">
    <p className="align-label-centered">One Question at a Time</p>
    <p className="align-label-left fw-bold">{form.oneQuestionAtATime ? "Yes" : "No"}</p>
  </div>

  <div className="d-flex ">
    <p className="align-label-centered">Webcam Required</p>
    <p className="align-label-left fw-bold">{form.webcamRequired ? "Yes" : "No"}</p>
  </div>

  <div className="d-flex ">
    <p className="align-label-centered">Lock Questions After Answering</p>
    <p className="align-label-left fw-bold">{form.lockQuestionsAfterAnswering ? "Yes" : "No"}</p>
  </div>


<Table bordered responsive className="mt-3">
  <thead className="bg-light text-secondary">
    <tr>
      <th>Due</th>
      <th>For</th>
      <th>Available from</th>
      <th>Until</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{formatDateTime(form.dueDate)}</td>
      <td>Everyone</td>
      <td>{formatDateTime(form.availableFrom)}</td>
      <td>{formatDateTime(form.availableUntil)}</td>
    </tr>
  </tbody>
</Table>
</div>


    <ProtectedRouteStudent>
        
    <Link to={`/Kambaz/Courses/${cid}/${form._id}/TakeQuiz`}>
      <Button variant="danger" className="mb-3" 
    >
        Take Quiz
      </Button>
      </Link>
    </ProtectedRouteStudent>
    <br/>




    <ProtectedRouteFaculty>
        <Link to={`/Kambaz/Courses/${cid}/${form._id}/QuizEditor`}>
            <Button variant="danger" id="wd-new-quiz-button" className="mb-3">
                
                Edit
            </Button>
            </Link>
        <br/>


        <Link to={`/Kambaz/Courses/${cid}/${form._id}/TakeQuiz`}>
            <Button variant="danger" id="wd-new-quiz-button">
                
                Preview
            </Button>
            </Link>

    </ProtectedRouteFaculty>


    </div>


    );}
