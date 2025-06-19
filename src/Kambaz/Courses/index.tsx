// import { courses } from "../Database";
import { Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";

import { CourseNavigation } from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { AssignmentEditor } from "./AssignmentEditor";
import PeopleTable from "./People/Table";
import Quizzes from "./Quizzes";


export default function Courses({ courses }: { courses: any[]; }) {


  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  // const assignment = assignments.find((assignment) => assignment._id === aid);
  const { pathname } = useLocation();

  return (

<div id="wd-courses">
  <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      
      {course && course.name} &gt; {pathname.split("/")[4]}
      {/* Course 1234  */}
      </h2> <hr />
  <div className="d-flex">
    <div className="d-none d-md-block">
      <CourseNavigation />
    </div>
    <div className="flex-fill">
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Modules" element={<Modules />} />
      <Route path="Assignments" element={<Assignments />} />
      <Route path="Assignments/:aid" element={<AssignmentEditor />} />
      <Route path="Quizzes" element={<Quizzes />} />
      <Route path="People" element={<PeopleTable />} />
    </Routes>
    </div></div>
</div>

  );
}

