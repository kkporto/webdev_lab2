import {ListGroup} from 'react-bootstrap';
import {BsGripVertical} from 'react-icons/bs';
import {LessonControlButtons, ModuleControlButtons} from "./LessonControlButtons";
// import 'style.css';

export default function Modules() {
  return (
<div>

<ListGroup className="rounded-0" id="wd-modules">


  <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
    <div className="wd-title p-3 ps-2 bg-secondary">
      <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
    </div>
    <ListGroup className="wd-lessons rounded-0">
      <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
      </ListGroup.Item>
      <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
      </ListGroup.Item>
      <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />
      </ListGroup.Item>
    </ListGroup>
  </ListGroup.Item>


  <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
    <div className="wd-title p-3 ps-2 bg-secondary">
      <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
    </div>
    <ListGroup className="wd-lessons rounded-0">
      <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
      </ListGroup.Item>
      <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> Understanding HTML basics <LessonControlButtons />
      </ListGroup.Item>
      <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> Creating simple web pages <LessonControlButtons />
      </ListGroup.Item>
      <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> Using tags and elements correctly <LessonControlButtons />
      </ListGroup.Item>
    </ListGroup>
  </ListGroup.Item>


  <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
    <div className="wd-title p-3 ps-2 bg-secondary">
      <BsGripVertical className="me-2 fs-3" /> Week 3 <ModuleControlButtons />
    </div>
    <ListGroup className="wd-lessons rounded-0">
      <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
      </ListGroup.Item>
      <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> Styling with CSS <LessonControlButtons />
      </ListGroup.Item>
      <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> Working with classes and IDs <LessonControlButtons />
      </ListGroup.Item>
      <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> Linking external stylesheets <LessonControlButtons />
      </ListGroup.Item>
    </ListGroup>
  </ListGroup.Item>

</ListGroup>

</div>
);}
