// import { useState } from "react";
import { Link } from "react-router-dom";
// import * as db from "./Database";
import {Card, Row, Col, Button, FormControl} from 'react-bootstrap';
import { useSelector } from "react-redux";
import * as db from "./Database";
// import { v4 as uuidv4 } from 'uuid';



export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; 
  setCourse: (course: any) => void;
  addNewCourse: () => void; 
  deleteCourse: (course: any) => void;
  updateCourse: () => void; }) 

  {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;  
  console.log("Current user ID:", currentUser?._id);
  console.log("All enrollments:", enrollments);
  console.log("Courses user is enrolled in:",
    enrollments
      .filter((e) => e.user === currentUser?._id)
      .map((e) => e.course)
  );
  console.log("Filtered courses visible on dashboard:",
    courses
      .filter((course) =>
        enrollments.some(
          (e) =>
            e.user === currentUser?._id &&
            e.course === course._id
        )
      )
  );

 


  return (
    
  <div id="wd-dashboard"> 
  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => {
                    addNewCourse();}} > 
                  Add         
          </button>


        <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>

      </h5>
      
<br />
      <FormControl value={course.name} className="mb-2" 
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl as="textarea" value={course.description} rows={3}
             onChange={(e) => setCourse({ ...course, description: e.target.value }) } />

      <hr />


 <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
 <div id="wd-dashboard-courses">
  <Row xs={1} md={5} className="g-4">
    {courses
    .filter((course) =>
      enrollments.some(
        (enrollment) =>
          enrollment.user === currentUser._id &&
          enrollment.course === course._id
         ))

    
    .map((course) => (
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
        <Link to={`/Kambaz/Courses/${course._id}/Home`}
            className="wd-dashboard-course-link text-decoration-none text-dark" >
        <Card.Img src={course.img_path} variant="top" width="100%" height={160} />
        <Card.Body className="card-body">
          <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
            {course.name} </Card.Title>
          <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            {course.description} </Card.Text>
          <Button variant="primary"> Go </Button>

            <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            </button>


            <button id="wd-edit-course-click"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
              className="btn btn-warning me-2 float-end" >
              Edit
            </button>

      </Card.Body>
     </Link>
    </Card>
   </Col>
   
          ))}




{/* 


   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/EECE2140.png" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">EECE 2140</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Computing Fundamentals for Software Engineers</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/EECE2150.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">EECE 2150</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Circuits and Signals: Biomedical Applications</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/EECE2160.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">EECE 2160</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Embedded Design: Enabling Robotics</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/EECE2520.png" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">EECE 2520</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Fundamentals of Linear Systems</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/EECE2322.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">EECE 2322</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Fundamentals of Digital Design and Computer Organization</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/EECE3324.png" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">EECE 3324</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Computer Architecture and Organization</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/EECE3468.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">EECE 3468</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Analysis of Random Phenomena in Electrical and Computer Engineering</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col> 

   <Col className="wd-dashboard-course" style={{ width: "300px" }}> Another course </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> Another course </Col> */}
  </Row>
</div></div>



);}
