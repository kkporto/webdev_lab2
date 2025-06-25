// import { Form, Button,  } from "react-bootstrap";
// Row, Col
// import { useParams, useNavigate } from "react-router";import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// import { addQuiz, updateQuiz } from "../Quizzes/reducer";
import { Nav } from "react-bootstrap";
// import { v4 as uuidv4 } from "uuid";

import { QuizEditorQuestions } from "./Questions";
import { QuizEditorDetails } from "./Details";

export function QuizEditor() {
//   const { cid, aid } = useParams();
  const [activeTab, setActiveTab] = useState<"details" | "questions">("details");

  return (
    <div id="wd-css-navigating-with-tabs">
      <h2>Quiz Editor</h2>

      <Nav
        variant="tabs"
        className="mb-3"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k as "details" | "questions")}
      >
        <Nav.Item>
          <Nav.Link eventKey="details">Details</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="questions">Questions</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* ---- content panes (always in DOM; show/hide by tab) ---- */}
      {activeTab === "details" && (
        <QuizEditorDetails /> //cid={cid} aid={aid} />
      )}

      {activeTab === "questions" && (
        <QuizEditorQuestions /> //cid={cid} aid={aid} />
      )}
    </div>
  );
}

