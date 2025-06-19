import { Link } from "react-router-dom";
import {Card, Row, Col, Button, FormControl} from 'react-bootstrap';
import { useSelector } from "react-redux";
import * as db from "./Database";

import { useDispatch } from "react-redux";
import { useState } from "react";

import { ProtectedRouteFaculty } from "./Account/ProtectedRoute";

import { addEnrollment, deleteEnrollment } from "./Courses/People/reducer";


export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; 
  setCourse: (course: any) => void;
  addNewCourse: () => void; 
  deleteCourse: (course: any) => void;
  updateCourse: () => void; 

}) 

  {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const { enrollments } = db;  
  const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments);

  console.log("Current user ID:", currentUser?._id);
  
  console.log("Current user role:", currentUser?.role);
  console.log("All enrollments:", enrollments);
  console.log("Courses user is enrolled in:",
    enrollments
      .filter((e: { user: string; course: string }) => e.user === currentUser?._id)
      .map((e: { user: string; course: string }) => e.course)
  );

  console.log("Filtered courses visible on dashboard:",
    courses.filter((course) =>
      enrollments.some((e: { user: string; course: string }) =>
        e.user === currentUser?._id && e.course === course._id
      )
    )
  );

  const [count, setCount] = useState(0);
  console.log(count);
  const dispatch = useDispatch();

 
  const handleUnenroll = (courseId: string) => {
    dispatch(deleteEnrollment({
      courseId,
      currentUser: currentUser._id // double-check that it's _id
    }));
  };

  const handleEnroll = (courseId: string) => {
  dispatch(addEnrollment({
    user: currentUser._id,
    course: courseId
    }));
  };

  return (
    
  <div id="wd-dashboard"> 
  <div className="d-flex justify-content-between align-items-center mb-3">
  <h1 className="mb-0" id="wd-dashboard-title">Dashboard</h1> 
  
  <button onClick={() => setCount(count + 1)}
          className="btn btn-primary me-2"
          id="wd-counter-up-click">Enrollments</button>
  
  </div>

      <ProtectedRouteFaculty>
      <hr />
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

      </ProtectedRouteFaculty>

   


      {Math.floor(count % 2) !== 0 && (
      <div>
      {/* <p>The counter is odd.</p> */}

        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4">
            {courses

            
            .map((course) => (
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                      
                <Card.Img src={course.img_path} variant="top" width="100%" height={160} />

            {enrollments.some(
              (enrollment: { _id: string; user: string; course: string }) =>
              enrollment.user === currentUser._id &&
              enrollment.course === course._id
              ) ? (
              <Button onClick={(event) => {
                      event.preventDefault();
                      handleUnenroll(course._id)
                    }} 
                
                variant="danger" className="btn float-left mt-3 ms-3" >
                  Unenroll
              </Button> ) : (
              <Button 
                  onClick={(event) => {
                      event.preventDefault();
                      handleEnroll(course._id) 
                  }}
                  
                    variant="success" className="btn float-left mt-3 ms-3" >
                 Enroll
              </Button>
              )}



                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.name} </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    {course.description} </Card.Text>

                  <ProtectedRouteFaculty>
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
                </ProtectedRouteFaculty>
              
              </Card.Body>
            </Link>
            </Card>
          </Col>
          
                  ))}

          </Row>
        </div>
      </div>
      )} 

      {Math.floor(count % 2) === 0 && ( 
      <div>

      {/* <p>The counter is even.</p> */}
        <h2 id="wd-dashboard-published">Published Courses 
          ({enrollments.filter((enrollment: any) => enrollment.user === currentUser._id).length})</h2> <hr />
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4">
            {courses
            .filter((course) =>
              enrollments.some(
                (enrollment: { _id: string, user: string; course: string }) =>
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

                  <ProtectedRouteFaculty>
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
                </ProtectedRouteFaculty>
              
              </Card.Body>
            </Link>
            </Card>
          </Col>
          
                  ))}

          </Row>
        </div>


      </div>
      )}






{/* </ProtectedRouteFaculty> */}
 
</div>


);}