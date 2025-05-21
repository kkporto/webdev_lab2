import { FaCheckCircle, FaCircle, FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import {ListGroup} from 'react-bootstrap';
import {BsGripVertical} from 'react-icons/bs';
import { Link } from "react-router-dom";


import { InputGroup,FormControl } from 'react-bootstrap';


export function GreenCheckmark() {
  return (
    <span className="me-1 position-relative">
      <FaCheckCircle style={{ top: "2px" }} className="text-success me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>);}




export function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div> );}


export function ModuleControlButtons() {
  return (
    <div className="float-end">
      {/* <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" /> */}
      <BsPlus className="bs" />
    </div> );}



export function GreenHwButton() {
  return (
    <span className="me-1 position-relative">
      <TfiWrite style={{ top: "2px" }} className="text-success me-1 position-absolutetfi" />
    </span>);}



export function RedWord() {
  return (
  <p className="wd-fg-color-red">
         Multiple Modules  
    <span className="wd-fg-color-black">   | Not available until </span>
  </p>

  );}


import { FaPlus } from "react-icons/fa6";
import { Button } from "react-bootstrap";
export function Modules() {
 return (
   <div id="wd-modules-controls" className="mb-4 d-flex gap-3">
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Module
     </Button>
     <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignment
     </Button>

</div>
);}





export function Search(){
  return (
    <div className="d-flex me-2 mb-4">
      <InputGroup size="lg" style={{ maxWidth: "300px" }}>
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>
        <FormControl
          type="text"
          placeholder="Search ..."
          className="border-start-0"
        />
      </InputGroup>
    </div>
  );
}





import { BsSearch } from "react-icons/bs";
import { Form } from "react-bootstrap";

export function AssignmentWriting() {
  return (
    <div id="wd-assignments" className="p-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup className="w-50">
          <InputGroup.Text><BsSearch /></InputGroup.Text>
          <Form.Control placeholder="Search ..." />
        </InputGroup>

        <div>
          <Button variant="secondary" className="me-2">
            <BsPlus className="me-1" /> Group
          </Button>
          <Button variant="danger">
            <BsPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <div className="bg-light px-3 py-2 mb-2 border rounded d-flex justify-content-between align-items-center">
        <span className="fw-bold">ASSIGNMENTS</span>
        <span className="px-2 py-1 border rounded-pill text-black small">40% of Total</span>
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary text-white">
            <BsGripVertical className="me-2 fs-3" /> Week 1
          </div>

          <ListGroup className="wd-lessons rounded-0">

            <Link to="/Kambaz/Courses/AssignmentEditor/AssignmentEditor" className="text-decoration-none text-dark">
              <ListGroup.Item
                className="wd-lesson p-3 ps-1 border-start border-5 border-success border-top-0 border-end-0 border-bottom-0 bg-white"
                style={{ borderBottom: "1px solid #dee2e6" }} >
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="me-3 d-flex align-items-start">
                      <BsGripVertical className="fs-4 me-1" />
                      <GreenHwButton />
                    </div>
                    <div>
                      <div className="fw-bold">A1 - ENV + HTML</div>
                      <p className="mb-1 small">
                        <span className="text-danger">Multiple Modules</span>
                        <span className="text-dark"> | Not available until May 13 at 12:00am</span>
                      </p>
                      <p className="mb-0 text-muted small">
                        Due May 20 at 11:59pm | 100 pts
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <BsThreeDotsVertical className="bs"/>
                    <FaCheckCircle className="text-success mt-1" />
                  </div>
                </div>
              </ListGroup.Item>
            </Link>

            <Link to="/Kambaz/Courses/AssignmentEditor/AssignmentEditor" className="text-decoration-none text-dark">
              <ListGroup.Item
                className="wd-lesson p-3 ps-1 border-start border-5 border-success border-top-0 border-end-0 border-bottom-0 bg-white"
                style={{ borderBottom: "1px solid #dee2e6" }}
              >
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="me-3 d-flex align-items-start">
                      <BsGripVertical className="fs-4 me-1" />
                      <GreenHwButton />
                    </div>
                    <div>
                      <div className="fw-bold">A2 - CSS + BOOTSTRAP</div>
                      <p className="mb-1 small">
                        <span className="text-danger">Multiple Modules</span>
                        <span className="text-dark"> | Not available until May 14 at 12:00am</span>
                      </p>
                      <p className="mb-0 text-muted small">
                        Due May 21 at 11:59pm | 100 pts
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <BsThreeDotsVertical className="bs"/>
                    <FaCheckCircle className="text-success mt-1" />
                  </div>
                </div>
              </ListGroup.Item>
            </Link>

            <Link to="/Kambaz/Courses/AssignmentEditor" className="text-decoration-none text-dark">
              <ListGroup.Item
                className="wd-lesson p-3 ps-1 border-start border-5 border-success border-top-0 border-end-0 border-bottom-0 bg-white"
              >
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="me-3 d-flex align-items-start">
                      <BsGripVertical className="fs-4 me-1" />
                      <GreenHwButton />
                    </div>
                    <div>
                      <div className="fw-bold">A3 - JS + REACT</div>
                      <p className="mb-1 small">
                        <span className="text-danger">Multiple Modules</span>
                        <span className="text-dark"> | Not available until May 15 at 12:00am</span>
                      </p>
                      <p className="mb-0 text-muted small">
                        Due May 27 at 11:59pm | 100 pts
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <BsThreeDotsVertical className="bs"/>
                    <FaCheckCircle className="text-success mt-1" />
                  </div>
                </div>
              </ListGroup.Item>
            </Link>

          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}