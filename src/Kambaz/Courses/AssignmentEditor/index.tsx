import { Form, Button,  } from "react-bootstrap";
// Row, Col
import { useParams, useNavigate } from "react-router";import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addAssignment, updateAssignment } from "../Assignments/reducer";

import { v4 as uuidv4 } from "uuid";

export function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existingAssignment = useSelector((state: any) =>
    state.assignmentsReducer.find((a: any) => a._id === aid)
  );

  const [form, setForm] = useState<any>(
    existingAssignment || {
      _id: uuidv4(),
      title: "",
      description: "",
      points: 100,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
      course: cid,
    }
  );

  const handleSave = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(form));
    } else {
      dispatch(addAssignment(form));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div className="container mt-4">
      <h2>{existingAssignment ? "Edit Assignment" : "Create Assignment"}</h2>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            value={form.points}
            onChange={(e) => setForm({ ...form, points: Number(e.target.value) })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            value={form.dueDate}
            onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Available From</Form.Label>
          <Form.Control
            type="date"
            value={form.availableFrom}
            onChange={(e) => setForm({ ...form, availableFrom: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Available Until</Form.Label>
          <Form.Control
            type="date"
            value={form.availableUntil}
            onChange={(e) => setForm({ ...form, availableUntil: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="secondary" className="ms-2" onClick={handleCancel}>
          Cancel
        </Button>
      </Form>
    </div>
  );
}
