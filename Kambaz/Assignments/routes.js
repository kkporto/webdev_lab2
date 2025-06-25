import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {

//  app.get("/api/assignments/:courseId/assignments", (req, res) => {
//     const { courseId } = req.params;
//     const courseAssignments = assignments.filter(a => a.course === courseId);
//     res.json(courseAssignments);
//   });


 app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });

 app.delete("/api/assignments/:assignmentId", async (req, res) => {
   const { assignmentId } = req.params;
   const status = await assignmentsDao.deleteAssignment(assignmentId);
   res.send(status);
});


}

