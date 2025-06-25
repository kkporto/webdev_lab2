
// import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";


import { addQuestion, updateQuestion } from "./reducer";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Form } from "react-bootstrap";


export function QuizEditorQuestions() { 
    

  const { cid, aid } = useParams();

  console.log(cid);
  const dispatch = useDispatch();
//   const navigate = useNavigate();


//   const [questionTitle, setQuestionTitle] = useState("");
  
  const { questions } = useSelector((state: any) => state.questionsReducer);
  const [editingId, setEditingId] = useState<string | null>(null);


    const [draft, setDraft] = useState<any>({
    _id: "",
    quizId: aid,
    title: "",
    points: 1,
    type: "Multiple Choice",
    prompt: ""
  });


  const startEditing = (q: any) => {
    setDraft({ ...q });          // load row into local state
    setEditingId(q._id);
  };

  const handleSave = () => {
    dispatch(updateQuestion({ quizId: aid, question: draft }));
    setEditingId(null);
  };

  const handleCancel = () => setEditingId(null);

//   const editingQuestion = "";


  console.log(questions);

  return (
    <div>
      <div className="d-flex justify-content-center mb-3">
        <Button
          variant="light"
          size="lg"
          className="text-dark fw-normal"
          onClick={() =>
            dispatch(addQuestion({ quizId: aid, title: "New Question" }))
          }
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          New Question
        </Button>
      </div>


      {questions
        .filter((q: any) => q.quizId === aid)
        .map((q: any, index: number) =>
          editingId === q._id ? (
            <div key={q._id} className="card p-3 mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={draft.title}
                  onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Points</Form.Label>
                <Form.Control
                  type="number"
                  value={draft.points}
                  onChange={(e) =>
                    setDraft({ ...draft, points: Number(e.target.value) })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Type</Form.Label>
                <Form.Select
                  value={draft.type}
                  onChange={(e) => setDraft({ ...draft, type: e.target.value })}
                >
                  <option>Multiple Choice</option>
                  <option>True/False</option>
                  <option>Fill in the Blank</option>
                </Form.Select>
              </Form.Group>
              
            {draft.type === "Multiple Choice" && (
            <Form.Group className="mb-3">
                <Form.Label>Choices – select the correct one</Form.Label>

  {draft.choices.map((c: any, idx: number) => (
    <div key={c.id} className="d-flex mb-2">
      <Form.Check
        type="radio"
        name="mcCorrect"
        className="me-2 mt-2"
        checked={c.correct}
        onChange={() =>
          setDraft({
            ...draft,
            choices: draft.choices.map((ch: any, i: number) => ({
              ...ch,
              correct: i === idx     // mark this as the only correct one
            }))
          })
        }
      />

      <Form.Control
        as="textarea"
        rows={2}
        className="flex-grow-1 me-2"
        placeholder={`Choice ${idx + 1}`}
        value={c.text}
        onChange={(e) =>
          setDraft({
            ...draft,
            choices: draft.choices.map((ch: any, i: number) =>
              i === idx ? { ...ch, text: e.target.value } : ch
            )
          })
        }
      />

      <Button
        variant="outline-danger"
        size="sm"
        onClick={() =>
          setDraft({
            ...draft,
            choices: draft.choices.filter((_: any, i: number) => i !== idx)
          })
        }
      >
        ✕
      </Button>
    </div>
  ))}

  {/* add choice */}
  <Button
    variant="link"
    onClick={() =>
      setDraft({
        ...draft,
        choices: [
          ...draft.choices,
          { id: crypto.randomUUID().slice(0, 4), text: "", correct: false }
        ]
      })
    }
  >
    + Add Choice
  </Button>
</Form.Group>
        
                
        )}

{/* TRUE/FALSE!!! */}
{draft.type === "True/False" && (
  <Form.Group className="mb-3">
    <Form.Label>Correct Answer</Form.Label>
    <div>
      <Form.Check
        inline
        type="radio"
        id="true"
        label="True"
        checked={draft.answer === true}
        onChange={()=>setDraft({...draft,answer:true})}
      />
      <Form.Check
        inline
        type="radio"
        id="false"
        label="False"
        checked={draft.answer === false}
        onChange={()=>setDraft({...draft,answer:false})}
      />
    </div>
  </Form.Group>
)}

{/* FILL IN*/}
{draft.type === "Fill in the Blank" && (
  <Form.Group className="mb-3">
    <Form.Label>Accepted Answers (case-insensitive)</Form.Label>
    {draft.blanks.map((b:string,idx:number)=>(
      <div key={idx} className="d-flex mb-2">
        <Form.Control
          value={b}
          placeholder={`Answer ${idx+1}`}
          onChange={(e)=>
            setDraft({...draft,blanks:draft.blanks.map((x:string,i:number)=>
              i===idx?e.target.value:x)})
          }
        />
        <Button
          variant="outline-danger"
          size="sm"
          className="ms-2"
          onClick={()=>setDraft({...draft,blanks:draft.blanks.filter((_:any,i:number)=>i!==idx)})}
        >
          ✕
        </Button>
      </div>
    ))}
    <Button variant="link" onClick={()=>
      setDraft({...draft,blanks:[...draft.blanks,""]})}
    >
      + Add Accepted Answer
    </Button>
  </Form.Group>
)}




              <Form.Group className="mb-3">
                <Form.Label>Question Prompt</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={draft.prompt}
                  onChange={(e) =>
                    setDraft({ ...draft, prompt: e.target.value })
                  }
                />
              </Form.Group>



              <div className="d-flex justify-content-end">
                <Button variant="danger" className="me-2 fw-normal" onClick={handleSave}>
                  Save
                </Button>
                <Button variant="light" className="text-dark fw-normal" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (


            <div key={q._id} className="d-flex align-items-center mb-2">
              <p className="me-2 mb-0">Question {index + 1} –</p>
              <span
                className="text-danger cursor-pointer"
                onClick={() => startEditing(q)}
              >
                {q.title || "Untitled"}
              </span>
            </div>
          )
        )}
    </div>
  );}
    

export function MultipleChoice(){

return(
<div>

    <h2>Hi</h2>
    </div>


);


  }