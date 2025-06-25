import { Link } from "react-router-dom";
import { Card, Row, Col, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { addEnrollment, deleteEnrollment } from "./Courses/People/reducer";
import { ProtectedRouteFaculty } from "./Account/ProtectedRoute";

export default function Dashboard(  {
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
  }: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (courseId: string) => void; // <- matches how you call it
    updateCourse: () => void;
  }) {


  console.log(deleteCourse);
  const dispatch       = useDispatch();
  const { currentUser } = useSelector((s: any) => s.accountReducer);
  const { enrollments } = useSelector((s: any) => s.enrollmentsReducer);


  const [showMine, setShowMine] = useState(false);


  const myCourseIds = enrollments
    .filter((e: any) => e.user === currentUser?._id)
    .map((e: any) => e.course);

  const available   = courses.filter((c) => !myCourseIds.includes(c._id));
  const mine        = courses.filter((c) =>  myCourseIds.includes(c._id));




  const handleEnroll = (courseId: string) =>
    dispatch(addEnrollment({ user: currentUser._id, course: courseId }));

  const handleUnenroll = (courseId: string) =>
    dispatch(deleteEnrollment({ courseId, currentUser: currentUser._id }));


  const list = showMine ? mine : available;   // decide which list to render
  const heading = showMine ? "My Courses" : "Available Courses";

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="mb-0">Dashboard</h1>
        <button
          className="btn btn-primary me-2"
          onClick={() => setShowMine(!showMine)}
        >
          {showMine ? "See Available" : "See My Courses"}
        </button>
      </div>



      {/* FACULTY ONLY */}
      <ProtectedRouteFaculty>
        <hr />
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
          >
            Update
          </button>
        </h5>

        <br/>
        <FormControl
          className="mb-2"
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <FormControl
          as="textarea"
          rows={3}
          value={course.description}
          onChange={(e) => setCourse({ ...course, description: e.target.value })}
        />

        <br/> 
      </ProtectedRouteFaculty>


      {/*COURSE cards */}
      <h2>{heading} ({list.length})</h2>
      <hr />

      <Row xs={1} md={5} className="g-4">
        {list.map((c) => (
          <Col key={c._id} style={{ width: 300 }}>
            <Card>
              <Link
                to={`/Kambaz/Courses/${c._id}/Home`}
                className="text-decoration-none text-dark"
              >
                <Card.Img src={c.img_path} variant="top" height={160} />
{showMine ? (
  <Button
    variant="danger"
    className="btn mt-3 ms-3"
    onClick={(e) => {
      e.preventDefault();    
      e.stopPropagation();  
      handleUnenroll(c._id);
    }}
  >
    Unenroll
  </Button>
) : (
  <Button
    variant="success"
    className="btn mt-3 ms-3"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();   
      handleEnroll(c._id);
    }}
  >
    Enroll
  </Button>
)}

                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">
                    {c.name}
                  </Card.Title>
                  <Card.Text
                    className="overflow-hidden"
                    style={{ height: 100 }}
                  >
                    {c.description}
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>


    </div>
  );
}