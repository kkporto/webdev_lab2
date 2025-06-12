// import { useState } from "react";
// import { FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;


export default function Module() {
//   const [module, getModule] = useState({
//         id: 72009431234, name: "Module Megalodon",
//         description: "Example module for Megalodon course",
//         course: "MG5003"
//   });
//   const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`


  return (
    <div id="wd-working-with-objects">
      <h3>Module portion</h3>
      <h4>Retrieving Objects</h4>


    <a id="wd-query-parameter-subtract"
        href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
        <br/>
    </a>


    <a id="wd-query-parameter-subtract"
        href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
        <br/>
    </a>

    {/* <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/> */}


<hr/>


    </div>
);}
