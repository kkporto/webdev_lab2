import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import { KambazNavigation } from "./Courses/Navigation";
import Courses from "./Courses";
import { AssignmentEditor } from "./Courses/AssignmentEditor";
import Assignments from "./Courses/Assignments";

import { ShowQuizAnswers } from "./Courses/Quizzes/ShowQuizAnswers";

// import * as db from "./Database";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Quizzes from "./Courses/Quizzes";
import { QuizEditor} from "./Courses/QuizEditor";

import "./styles.css"
import { useSelector } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
// import { addEnrollment } from "./Courses/People/reducer";
import Session from "./Account/Session";
// import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

import QuizDetails from "./Courses/Quizzes/QuizDetails";
import { TakeQuiz } from "./Courses/Quizzes/TakeQuiz";


export default function Kambaz() {
  // const dispatch = useDispatch();
  // const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
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



  //(db.courses);
  const [course, setCourse] = useState<any>({
    _id: uuidv4(), name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });


  // const [quiz, setQuiz] = useState<any>({
  //   _id: uuidv4(), name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  // });

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);

    // db.enrollments.push({
    //     _id: uuidv4(),
    //     user: currentUser._id,
    //     course: newCourse._id,
    // });

    // dispatch(addEnrollment({
    //   _id: uuidv4(),
    //   user: currentUser._id,
    //   course: newCourse._id
    // }));


    // commented within 5.3.4.2
  //   console.log("Enrolled courses for current user:",
  //   db.enrollments
  //     .filter((enr) => enr.user === currentUser?._id)
  //     .map((enr) => enr.course)
  // );

  };



  
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    console.log(status);
    setCourses(courses.filter((course) => course._id !== courseId));
  };


  const updateCourse =async () => {
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



  //   const addNewEnrollment = (courseId: any) => {
  //   //   const newEnrollment = { ...enrollment, _id: uuidv4(), course: courseId };
  //   //   setEnrollments([...enrollments, newEnrollment ]);

  //   //   db.enrollments.push({
  //   //       _id: uuidv4(),
  //   //       user: currentUser._id,
  //   //       course: newCourse._id,
  //   //   });

  //   //   console.log("Enrolled courses for current user:",
  //   //   db.enrollments
  //   //     .filter((enr) => enr.user === currentUser?._id)
  //   //     .map((enr) => enr.course)
  //   // );
  // };


  
  // const deleteEnrollment = (courseId: any) => {
    
  //   setEnrollments(enrollments.filter((enrollment) => {(enrollment.course !== courseId)&&(enrollment.user !== currentUser)}));


  //   // db.enrollments
  //   //   .filter((enr) => {(enr.user === currentUser?._id)&&()}
  // }


  // const [enrollments, setEnrollments] = useState<any[]>(db.enrollments);
  // const [enrollment, setEnrollment] = useState<any>({
  //   _id: uuidv4(),
  //   course: uuidv4(), 
  //   user: currentUser,
  // });


  return (

    
    <Session>

    <div id="wd-kambaz">

        <KambazNavigation />
    <div  className="wd-main-content-offset p-3">
      <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="/Account/*" element={<Account />} />
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}

        <Route path="Dashboard"  element={<ProtectedRoute>
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}

                      // enrollments={enrollments}
                      // enrollment={enrollment}
                      // addEnrollment={addEnrollment}
                      // deleteEnrollment={deleteEnrollment}
                      
                      /> </ProtectedRoute> } />
                  

        <Route path="/Courses/:cid/*" element={ <ProtectedRoute>
          <Courses courses={courses} /> 
          </ProtectedRoute>} />
        
        <Route path="/Calendar" element={<h1>Calendar</h1>} />
        <Route path="/Inbox" element={<h1>Inbox</h1>} />
        <Route path="/Courses/:cid/Assignments" element={<Assignments />} />
        <Route path="/Courses/:cid/:aid/AssignmentEditor/*" element={<AssignmentEditor />} />

        
        <Route path="/Courses/:cid/Quizzes" element={<Quizzes />} />
        <Route path="/Courses/:cid/:aid/QuizEditor/*" element={<QuizEditor />} />


        {/* <Route path="/Courses/:cid/:aid/QuizEditorDetails/*" element={<QuizEditorDetails />} />
        <Route path="/Courses/:cid/:aid/QuizEditorQuestions/*" element={<QuizEditorQuestions />} /> */}

        
        <Route path="/Courses/:cid/:aid/QuizDetails/*" element={<QuizDetails />} />
        <Route path="/Courses/:cid/:aid/TakeQuiz/*" element={<TakeQuiz />} />
        <Route path="/Courses/:cid/:aid/ShowQuizAnswers/*" element={<ShowQuizAnswers />} />


        </Routes>
      </div>
  </div>
  </Session>

);}


