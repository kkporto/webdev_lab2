import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import { KambazNavigation } from "./Courses/Navigation";
import Courses from "./Courses";
import { AssignmentEditor } from "./Courses/AssignmentEditor";

import "./styles.css"



export default function Kambaz() {
  return (
    <div id="wd-kambaz">

        <KambazNavigation />
    <div  className="wd-main-content-offset p-3">
      <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="/Account/*" element={<Account />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Courses/:cid/*" element={<Courses />} />
        
        <Route path="/Courses/AssignmentEditor/*" element={<AssignmentEditor />} />
      </Routes>
    </div>
</div>


);}


