import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import {ListGroup} from 'react-bootstrap';





export function CourseNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
        className="list-group-item active border border-0"> Home </Link>
      <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"> Modules </Link>
      <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"> Piazza </Link>
      <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0"> Zoom </Link>
      <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0"> Assignments </Link>
      <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0"> Quizzes </Link>
      <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
        className="list-group-item text-danger border border-0" > People </Link>
    </div>
);}



export function KambazNavigation() {
 return (
  <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }} 
       className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
    <ListGroup.Item id="wd-neu-link" target="_blank" action
       href="https://www.northeastern.edu/"
       className="bg-black border-0 text-center">
       <img src="/images/NEU.png" width="75px" /></ListGroup.Item>
    <ListGroup.Item to="/Kambaz/Account" as={Link}
       className="text-center border-0 bg-black text-white">
       <FaRegCircleUser className="fs-1 text text-white" /><br />
       Account </ListGroup.Item>
    <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
       className="text-center border-0
                  bg-white text-danger">
       <AiOutlineDashboard className="fs-1 text-danger" /><br />
       Dashboard </ListGroup.Item>
    <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
       className="text-white
                  bg-black text-center border-0">
       <LiaBookSolid className="fs-1 text-danger" /><br />
       Courses </ListGroup.Item>

      
    <ListGroup.Item to="/Kambaz/Calendar" as={Link}
       className="text-white
                  bg-black text-center border-0">
       <IoCalendarOutline className="fs-1 text-danger" /><br />
       Calendar </ListGroup.Item>
    <ListGroup.Item to="/Kambaz/Inbox" as={Link}
       className="text-white
                  bg-black text-center border-0">
       <FaInbox className="fs-1 text-danger" /><br />
       Inbox </ListGroup.Item>
    <ListGroup.Item to="/Labs" as={Link}
       className="text-white
                  bg-black text-center border-0">
       <ImLab className="fs-1 text-danger" /><br />
       Labs </ListGroup.Item>



   </ListGroup>
   );}

/////////////////////////////////////////


// import { Link } from "react-router-dom";
// export default function CourseNavigation() {
//   return (
//     <div id="wd-courses-navigation">
//       <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link">Home</Link><br/>
//       <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link">Modules
//         </Link><br/>
//       <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link">Piazza</Link><br/>
//       <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link">Zoom</Link><br/>
//       <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link">
//           Assignments</Link><br/>
//       <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link">Quizzes
//         </Link><br/>
//       <Link to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link">Grades</Link><br/>
//       <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link">People</Link><br/>
//     </div>
//   );}
