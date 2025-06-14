import { ListGroup, FormControl } from 'react-bootstrap';
import {BsGripVertical} from 'react-icons/bs';
import {LessonControlButtons, ModuleControlButtons} from "./LessonControlButtons";
import ModulesControls from './ModulesControls';
import { useState, useEffect } from "react";
import * as coursesClient from "../client";

import { useParams } from "react-router";
// import * as db from "../../Database";

// import { v4 as uuidv4 } from "uuid";

import { addModule, editModule, updateModule, deleteModule, setModules }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";



import * as modulesClient from "./client";

export default function Modules() {
  // const { cid } = useParams();
  // // const modules = db.modules;
  // const [modules, setModules] = useState<any[]>(db.modules);
  
  // const [moduleName, setModuleName] = useState("");
  // const addModule = () => {
  //   setModules([ ...modules, { _id: uuidv4(), name: moduleName, course: cid, lessons: [] } ]);
  //   setModuleName("");
  // };


  
  // const deleteModule = (moduleId: string) => {
  //   setModules(modules.filter((m) => m._id !== moduleId));
  // };

  
  // const editModule = (moduleId: string) => {
  //   setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  // };
  // const updateModule = (module: any) => {
  //   setModules(modules.map((m) => (m._id === module._id ? module : m)));
  // };
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };


  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };


  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);


  return (
      
    // <div className="d-flex flex-column">
    //   <ModulesControls
    //     setModuleName={setModuleName}
    //     moduleName={moduleName}
    //     addModule={addModule}
    //   />

    <div className="d-flex flex-column">
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
      addModule={createModuleForCourse}  />
        {/* // addModule={() => {
        //   dispatch(addModule({ name: moduleName, course: cid }));
        //   setModuleName(""); */}

    <hr/>

      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          // .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> 
              {/* {module.name}  */}
                    {!module.editing && module.name}

      { module.editing && (
        <FormControl className="w-50 d-inline-block"
               onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                   dispatch(updateModule({ ...module, editing: false }));
                 }
               }}
               defaultValue={module.name}/>
      )}

        <ModuleControlButtons moduleId={module._id}
              
                  deleteModule={(moduleId) => removeModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} />
              {/* <ModuleControlButtons 
                moduleId={module._id}
                deleteModule={deleteModule}
                editModule={editModule}/> */}


            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </ListGroup.Item>
                ))}
                </ListGroup>) 
                }
          </ListGroup.Item>))
          }

      </ListGroup>
</div>
);}
