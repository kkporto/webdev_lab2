import { ListGroup, FormControl } from 'react-bootstrap';
import {BsGripVertical} from 'react-icons/bs';
import {LessonControlButtons, ModuleControlButtons} from "./LessonControlButtons";
import ModulesControls from './ModulesControls';
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import { useParams } from "react-router";


import * as modulesClient from "./client";

import { addModule, editModule, updateModule, deleteModule, 
  addLessonToModule, deleteLesson, setModules }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  
  // console.log("Current user role:", currentUser?.role);

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    
    console.log("Here: ",modules);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };


  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

console.log("Modules dta:", modules);
console.log("Type:", typeof modules, "Is array?", Array.isArray(modules));
  return (


    <div className="d-flex flex-column">
    {currentUser?.role === "FACULTY" && (
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={createModuleForCourse}
      />
    )}

    
    <hr/>

      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          // .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <ListGroup.Item  key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> 
              {/* {module.name}  */}
                    {!module.editing && module.name}

      { module.editing && (
        <FormControl className="w-50 d-inline-block"
               onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                     saveModule({ ...module, editing: false });
                 }
               }}
               defaultValue={module.name}/>
      )}


        {currentUser?.role === "FACULTY" && ( 
        <ModuleControlButtons moduleId={module._id}

                  deleteModule={(moduleId) => removeModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} 
                  addLessonToModule={(moduleId) => dispatch(addLessonToModule(moduleId))} 
                  />
                )}

            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} 
                    
                    
                    {currentUser?.role === "FACULTY" && ( 
                      <LessonControlButtons 
                        moduleId={module._id}
                        lessonId={lesson._id}
                        deleteLesson={(moduleId, lessonId) => {
                          dispatch(deleteLesson({ moduleId, lessonId }));
                        }
                      }
                      /> )}
                  </ListGroup.Item>
                ))}
                </ListGroup>) 
                }
          </ListGroup.Item>))
          }

      </ListGroup>
</div>
);}
