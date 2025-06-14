import Session from "./Account/Session";

import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import { KambazNavigation } from "./Courses/Navigation";
import Courses from "./Courses";
import { AssignmentEditor } from "./Courses/AssignmentEditor";


// import * as db from "./Database";
import * as userClient from "./Account/client";

import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./styles.css"


import * as courseClient from "./Courses/client";


export default function Kambaz() {

  const [courses, setCourses] = useState<any[]>([]);
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);


    const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    if (status.success) {console.log("Delete status:", status);} //att. to fix error from unused status

    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);



  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };



  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: uuidv4() }]);
  // };


  // const deleteCourse = (courseId: any) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  return (
    
    <Session>
    <div id="wd-kambaz">

        <KambazNavigation />
    <div  className="wd-main-content-offset p-3">
      <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="/Account/*" element={<Account />} />

        <Route path="Dashboard" element={
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}/>
                  } />

        <Route path="/Courses/:cid/*" element={<Courses courses={courses} />} />
        
        <Route path="/Calendar" element={<h1>Calendar</h1>} />
        <Route path="/Inbox" element={<h1>Inbox</h1>} />
        
        <Route path="/Courses/:cid/:aid/AssignmentEditor/*" element={<AssignmentEditor />} />

      </Routes>
    </div>
</div>

</Session>
);}


