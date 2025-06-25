import { ListGroup } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

// import * as db from "../Database";
import { useDispatch } from "react-redux";
import MenuButtons from "./MenuButtons";


import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRouteFaculty from "../../Account/ProtectedRoute";
import { InputGroup, Button, Form } from "react-bootstrap";

import {  FaCheckCircle } from "react-icons/fa";
import { BsSearch, BsPlus, BsGripVertical } from "react-icons/bs";

// import { deleteQuiz } from "./reducer";
import { useState } from "react";


export default function Quizzes() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(navigate, dispatch); //cancel out unused error 

  const quizzes = useSelector((state: any) => state.quizzesReducer)
    // .filter((a: any) => a.course === cid);
    .filter((a: any) => a.course === cid)
    .sort((a: any, b: any) =>
      new Date(a.availableFrom || 0).getTime() - new Date(b.availableFrom || 0).getTime()
    );
  // const { currentUser } = useSelector((state: any) => state.accountReducer);

  // const handleDelete = (quizId: string) => {
  //   const confirm = window.confirm("Are you sure you want to delete this quiz?");
  //   if (confirm) {
  //     dispatch(deleteQuiz(quizId));
  //   }
  // };


// establishing counter for dropping down menu
  const [count, setCount] = useState(0);
  console.log(count);
  // const checkMenuButtons = () => {
  //   setCount(prev => prev + 1);
  //   console.log(count + 1);
  //   {Math.floor(count % 2) !== 0 && (
  //     <div>
  //       <MenuButtons/>
  //         </div> )}
   
   
   
  //   // const confirm = window.confirm("Are you sure you want to delete this quiz?");
  //   // if (confirm) {
  //   //   dispatch(deleteQuiz(quizId));
  //   // }
  // };


  const [openId, setOpenId] = useState<string | null>(null);
  // console.log(count);


  return  (
    <div className="container mt-4">
      
      <ListGroup id="wd-modules" className="rounded-0">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <InputGroup className="w-50">
            <InputGroup.Text><BsSearch /></InputGroup.Text>
            <Form.Control placeholder="Search ..." />
          </InputGroup>


            <ProtectedRouteFaculty>
           
            <Button variant="secondary" className="me-2">
              <BsPlus className="me-1" /> Group
            </Button>
              
              <Link to={`/Kambaz/Courses/${cid}/new/QuizEditor`}>
                <Button variant="danger" id="wd-new-quiz-button">
                  <BsPlus className="me-1" /> Quiz
                </Button>
              </Link>
            
         </ProtectedRouteFaculty>
        </div>

        <div className="bg-light px-3 py-2 mb-2 border rounded d-flex justify-content-between align-items-center">
          <span className="fw-bold">QUIZZES</span>
          <span className="px-2 py-1 border rounded-pill text-black small">40% of Total</span>
        </div>

        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary text-white">
            <BsGripVertical className="me-2 fs-3" /> Week 1
          </div>

          <ListGroup className="wd-lessons rounded-0">
            {quizzes.map((quiz: any) => (
              <div>
              <Link
                to={`/Kambaz/Courses/${cid}/${quiz._id}/QuizDetails`}
                className="text-decoration-none text-dark"
                key={quiz._id}
              >
                <ListGroup.Item
                  className="wd-lesson p-3 ps-1 border-start border-5 border-success border-top-0 border-end-0 border-bottom-0 bg-white"
                  style={{ borderBottom: "1px solid #dee2e6" }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="me-3 d-flex align-items-start">
                        {/* <GreenHwButton /> */}
                      </div>
                      <div>

                        <div className="fw-bold">{quiz._id + " - " + quiz.title}</div>
                        <p className="mb-1 small">
                          <span className="text-danger">Multiple Modules</span>
                          <span className="text-dark"> | Not available until {quiz.availableFrom}</span>
                        </p>
                        <p className="mb-0 text-muted small">
                          {/* Due {quiz.dueDate} | {quiz.points} pts */}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start">
                      
                    <ProtectedRouteFaculty>
        
                      <Button 
                          variant="no outline"
                          size="sm"
                            onClick={(e) => {
                            e.preventDefault();   
                            e.stopPropagation();  

                            setCount(prev => prev + 1);      // keep your counter
                            setOpenId(prev => (prev === quiz._id ? null : quiz._id)); // <-- NEW
                            // checkMenuButtons();
                          }}

                      // className="btn-primary me-2"
                      id="wd-counter-up-click">
                      <BsThreeDotsVertical className="text-success" />

                      </Button>


                      <FaCheckCircle className="text-success mt-1 me-2" />

                        {/* <Button
                          variant="no outline"
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDelete(quiz._id);
                          }}
                        >
                        <FaTrash className="text-danger float-end mt-1"  />
                        </Button> */}
                    
                    </ProtectedRouteFaculty>


                    </div>
                  </div>
                </ListGroup.Item>
              </Link>

             
            {openId === quiz._id && (                         // <-- NEW condition
              <div className="ps-5 py-2 bg-light border-start border-3 border-secondary">
                <MenuButtons quizId={quiz._id} /> 
              </div>)}
              


            </div>
            ))}


          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

