import { Link } from "react-router-dom";
import {Card, Row, Col, Button} from 'react-bootstrap';

export default function Dashboard() {
  return (
  <div id="wd-dashboard">
 <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
 <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
 <div id="wd-dashboard-courses">
  <Row xs={1} md={5} className="g-4">
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/CS1234.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>


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
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> Another course </Col>
  </Row>
</div></div>



);}
