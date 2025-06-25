import { Form, Button,  } from "react-bootstrap";
// Row, Col
import { useParams, useNavigate } from "react-router";import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addQuiz, updateQuiz } from "../Quizzes/reducer";
import { v4 as uuidv4 } from "uuid";

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

export function QuizEditorDetails() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existingQuiz = useSelector((state: any) =>
    state.quizzesReducer.find((a: any) => a._id === aid)
  );

//   const [form, setForm] = useState<any>(

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




  const handleSave = () => {
    if (existingQuiz) {
      dispatch(updateQuiz(form));
    } else {
      dispatch(addQuiz(form));
    }
    // navigate(`/Kambaz/Courses/${cid}/Quizzes`);
    navigate(`/Kambaz/Courses/${cid}/${form._id}/QuizDetails`);
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Quizzes`);
  };

  return (
    <div className="container mt-4">
      <h2>{existingQuiz ? "Edit Quiz" : "Create Quiz"}</h2>




<Form>
  <Form.Group className="mb-3">
    <Form.Label>Title</Form.Label>
    <Form.Control
      type="text"
      value={form.title}
      onChange={(e) => setForm({ ...form, title: e.target.value })}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Description</Form.Label>
    <Form.Control
      as="textarea"
      rows={3}
      value={form.description}
      onChange={(e) => setForm({ ...form, description: e.target.value })}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Quiz Type</Form.Label>
    <Form.Select
      value={form.quizType}
      onChange={(e) => setForm({ ...form, quizType: e.target.value })}
    >
      <option>Graded Quiz</option>
      <option>Practice Quiz</option>
      <option>Graded Survey</option>
      <option>Ungraded Survey</option>
    </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Assignment Group</Form.Label>
    <Form.Select
      value={form.assignmentGroup}
      onChange={(e) => setForm({ ...form, assignmentGroup: e.target.value })}
    >
      <option>Quizzes</option>
      <option>Exams</option>
      <option>Assignments</option>
      <option>Project</option>
    </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Points</Form.Label>
    <Form.Control
      type="number"
      value={form.points}
      onChange={(e) => setForm({ ...form, points: Number(e.target.value) })}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Check
      type="checkbox"
      label="Shuffle Answers"
      checked={form.shuffleAnswers}
      onChange={(e) => setForm({ ...form, shuffleAnswers: e.target.checked })}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Time Limit (minutes)</Form.Label>
    <Form.Control
      type="number"
      value={form.timeLimit}
      onChange={(e) => setForm({ ...form, timeLimit: Number(e.target.value) })}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Check
      type="checkbox"
      label="Allow Multiple Attempts"
      checked={form.multipleAttempts}
      onChange={(e) => setForm({ ...form, multipleAttempts: e.target.checked })}
    />
  </Form.Group>

  {form.multipleAttempts && (
    <Form.Group className="mb-3">
      <Form.Label>Max Attempts</Form.Label>
      <Form.Control
        type="number"
        value={form.maxAttempts}
        onChange={(e) => setForm({ ...form, maxAttempts: Number(e.target.value) })}
      />
    </Form.Group>
  )}

  <Form.Group className="mb-3">
    <Form.Label>Show Correct Answers</Form.Label>
    <Form.Control
      type="text"
      placeholder="e.g., After Due Date or Immediately"
      value={form.showCorrectAnswers}
      onChange={(e) => setForm({ ...form, showCorrectAnswers: e.target.value })}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Access Code</Form.Label>
    <Form.Control
      type="text"
      value={form.accessCode}
      onChange={(e) => setForm({ ...form, accessCode: e.target.value })}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Check
      type="checkbox"
      label="One Question at a Time"
      checked={form.oneQuestionAtATime}
      onChange={(e) => setForm({ ...form, oneQuestionAtATime: e.target.checked })}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Check
      type="checkbox"
      label="Require Webcam"
      checked={form.webcamRequired}
      onChange={(e) => setForm({ ...form, webcamRequired: e.target.checked })}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Check
      type="checkbox"
      label="Lock Questions After Answering"
      checked={form.lockQuestionsAfterAnswering}
      onChange={(e) => setForm({ ...form, lockQuestionsAfterAnswering: e.target.checked })}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Due Date</Form.Label>
    <Form.Control
      type="date"
      value={form.dueDate}
      onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Available From</Form.Label>
    <Form.Control
      type="date"
      value={form.availableFrom}
      onChange={(e) => setForm({ ...form, availableFrom: e.target.value })}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Available Until</Form.Label>
    <Form.Control
      type="date"
      value={form.availableUntil}
      onChange={(e) => setForm({ ...form, availableUntil: e.target.value })}
    />
  </Form.Group>

  <Button variant="primary" onClick={handleSave}>
    Save
  </Button>
  <Button variant="secondary" className="ms-2" onClick={handleCancel}>
    Cancel
  </Button>
</Form>

    </div>
  );
}

