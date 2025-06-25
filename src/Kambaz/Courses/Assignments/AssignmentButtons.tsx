
// export default function ModulesControls(

//   { moduleName, setModuleName, addModule }:
//   { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//  return (
//    <div id="wd-modules-controls" className="text-nowrap">
//      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn"
//        onClick={handleShow} >
//        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//        Module
//      </Button>
//      <Dropdown className="float-end me-2">
//        <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
//          <GreenCheckmark /> Publish All
//        </Dropdown.Toggle>
//        <Dropdown.Menu>
//          <Dropdown.Item id="wd-publish-all">
//            <GreenCheckmark /> Publish All
//          </Dropdown.Item>
//          <Dropdown.Item id="wd-publish-all-modules-and-items">
//            <GreenCheckmark /> Publish all modules and items
//          </Dropdown.Item>
//          <Dropdown.Item id="wd-publish-modules-only">
//            <GreenCheckmark /> Publish modules only
//          </Dropdown.Item>
//          {/* Create two more items with IDs wd-unpublish-all-modules-and-items and wd-unpublish-modules-only with
//              labels Unpublish all modules and items and Unpublish modules only */}
//        </Dropdown.Menu>
//      </Dropdown>
//      {/* Implement the View Progress and Collapse All buttons with IDs wd-view-progress and wd-collapse-all */}
   
//       <ModuleEditor show={show} handleClose={handleClose} dialogTitle="Add Module"
//        moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />
//    </div>
// );}


// <BsThreeDotsVertical className="bs me-2" />
//                       <FaCheckCircle className="text-success mt-1 me-2" />

//                       {currentUser?.role !== "FACULTY" && (
//                         <Button
//                           variant="no outline"
//                           size="sm"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handleDelete(assignment._id);
//                           }}
//                         >
//                         <FaTrash className="text-danger float-end mt-1"  />
//                         </Button>
//                       )}