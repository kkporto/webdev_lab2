import { FaCheckCircle } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import {ListGroup} from 'react-bootstrap';
import { Link } from "react-router-dom";


import { Form } from "react-bootstrap";
import { BsGripVertical, BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { InputGroup } from 'react-bootstrap';

import { FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";

import { ProtectedRouteFaculty } from "../../Account/ProtectedRoute";
import * as assignmentsClient from "./client";

export function GreenHwButton() {
  return (
    <span className="me-1 position-relative">
      
      <BsGripVertical className="fs-4 me-1" />
      <TfiWrite style={{ top: "2px" }} className="text-success me-1 position-absolutetfi" />
    </span>);}



import { useEffect, useState } from "react";
import * as coursesClient from "../client";
import { addAssignment, deleteAssignment, setAssignments } from "./reducer";

// updateAssignment,

export function AssignmentsDataDriven() {
  const { cid } = useParams();
  const navigate = useNavigate();
  console.log(navigate);
  // console.log(navigate); //cancel out unused error 


  const [assignmentName] = useState(""); // setAssignmentName

  const assignments = useSelector((state: any) => state.assignmentsReducer ); //.assignments );//
  const dispatch = useDispatch();
// console.log(assignments);

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);

    console.log("Here: ",assignments);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);



  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { title: assignmentName, course: cid };
    const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(assignment));
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };


  // const saveAssignment = async (assignment: any) => {
  //   await assignmentsClient.updateAssignment(assignment);
  //   dispatch(updateAssignment(assignment));
  // };



  // const handleDelete = (assignmentId: string) => {
  //   const confirm = window.confirm("Are you sure you want to delete this assignment?");
  //   if (confirm) {
  //     dispatch(deleteAssignment(assignmentId));
  //   }
  // };

  console.log("Assignments:", assignments);
  console.log("Course ID:", cid);
  console.log("Assignments data:", assignments);
  console.log("Type:", typeof assignments, "Is array?", Array.isArray(assignments));
    
  return  (
    <div className="container mt-4">
      {/* <h2>Hi there</h2> */}
      <ListGroup id="wd-assignments" className="rounded-0">
           

        <div className="d-flex justify-content-between align-items-center mb-4">
          <InputGroup className="w-50">
            <InputGroup.Text><BsSearch /></InputGroup.Text>
            <Form.Control placeholder="Search ..." />
          </InputGroup>


                  <ProtectedRouteFaculty>
 
            <Button variant="secondary" className="me-2">
              <BsPlus className="me-1" /> Group
            </Button>
              
              <Link to={`/Kambaz/Courses/${cid}/new/AssignmentEditor`}>
                <Button variant="danger" id="wd-new-assignment-button"
                  onClick={createAssignmentForCourse}>
                  <BsPlus className="me-1" /> Assignment
                </Button>
              </Link>
            
         </ProtectedRouteFaculty>
        </div>


        <div className="bg-light px-3 py-2 mb-2 border rounded d-flex justify-content-between align-items-center">
          <span className="fw-bold">ASSIGNMENTS</span>
          <span className="px-2 py-1 border rounded-pill text-black small">40% of Total</span>
        </div>


        <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary text-white">
            <BsGripVertical className="me-2 fs-3" /> Week 1
          </div>

          <ListGroup className="wd-lessons rounded-0">
 {assignments.map((assignment: any) => (
              <div>
              <Link
                to={`/Kambaz/Courses/${cid}/${assignment._id}/AssignmentEditor`}
                className="text-decoration-none text-dark"
                key={assignment._id}
              >
                <ListGroup.Item
                  className="wd-lesson p-3 ps-1 border-start border-5 border-success border-top-0 border-end-0 border-bottom-0 bg-white"
                  style={{ borderBottom: "1px solid #dee2e6" }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="me-3 d-flex align-items-start">
                        <GreenHwButton />
                      </div>
                      <div>

                        <div className="fw-bold">{assignment._id + " - " + assignment.title}</div>
                        <p className="mb-1 small">
                          <span className="text-danger">Multiple Modules</span>
                          <span className="text-dark"> | Not available until {assignment.availableFrom}</span>
                        </p>
                        <p className="mb-0 text-muted small">
                          Due {assignment.dueDate} | {assignment.points} pts
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start">
                      
                  <ProtectedRouteFaculty>

                      <BsThreeDotsVertical className="bs me-2" />
                      <FaCheckCircle className="text-success mt-1 me-2" />

                        <Button
                          variant="no outline"
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault();
                            removeAssignment(assignment._id);
                            // handleDelete(assignment._id);
                          }}
                        >
                        <FaTrash className="text-danger float-end mt-1"  />
                        </Button>
                    
                    </ProtectedRouteFaculty>

                    </div>
                  </div>
                </ListGroup.Item>
              </Link>
            
            </div>
          ))}
          </ListGroup>
        </ListGroup.Item>
          
      
      </ListGroup>
    </div>
  );
}


